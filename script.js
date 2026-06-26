import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js';
import { getFirestore, collection, addDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID'
};

let db = null;
let auth = null;

const shouldUseFirebase = firebaseConfig.projectId && firebaseConfig.projectId !== 'YOUR_PROJECT_ID';

if (shouldUseFirebase) {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
}

const forms = document.querySelectorAll('form');

const getStoredUsers = () => JSON.parse(localStorage.getItem('pilli-foundation-users') || '[]');
const saveStoredUsers = (users) => localStorage.setItem('pilli-foundation-users', JSON.stringify(users));

const handleAuthSubmit = async (event, type) => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = form.querySelector('.form-status');
  const submitButton = form.querySelector('button[type="submit"]');

  const formData = new FormData(form);
  const email = formData.get('email')?.toString() || '';
  const password = formData.get('password')?.toString() || '';
  const name = formData.get('name')?.toString() || '';

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = type === 'signup' ? 'Creating account...' : 'Signing in...';
  }

  try {
    if (auth && shouldUseFirebase) {
      if (type === 'signup') {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('Signed up', userCredential.user.uid);
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('Signed in', userCredential.user.uid);
      }
      if (status) {
        status.textContent = type === 'signup' ? 'Account created successfully.' : 'Signed in successfully.';
      }
      window.location.href = 'index.html';
      return;
    }

    const users = getStoredUsers();
    if (type === 'signup') {
      const existing = users.find((user) => user.email.toLowerCase() === email.toLowerCase());
      if (existing) {
        throw new Error('User already exists');
      }
      users.push({ name, email, password });
      saveStoredUsers(users);
      if (status) {
        status.textContent = 'Account created locally. You can now log in.';
      }
      window.location.href = 'login.html';
      return;
    }

    const existingUser = users.find((user) => user.email.toLowerCase() === email.toLowerCase());
    if (!existingUser || existingUser.password !== password) {
      throw new Error('Invalid credentials');
    }

    if (status) {
      status.textContent = 'Signed in successfully.';
    }
    localStorage.setItem('pilli-foundation-current-user', JSON.stringify({ name: existingUser.name, email: existingUser.email }));
    window.location.href = 'index.html';
  } catch (error) {
    console.error(error);
    if (status) {
      status.textContent = error.message === 'User already exists' || error.message === 'Invalid credentials'
        ? 'That account already exists or the credentials are incorrect.'
        : 'We could not complete that request right now.';
    }
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = submitButton.dataset.originalText || (type === 'signup' ? 'Create Account' : 'Log In');
    }
  }
};

forms.forEach((form) => {
  if (form.id === 'login-form') {
    form.addEventListener('submit', (event) => handleAuthSubmit(event, 'login'));
    return;
  }

  if (form.id === 'signup-form') {
    form.addEventListener('submit', (event) => handleAuthSubmit(event, 'signup'));
    return;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const status = form.querySelector('.form-status');

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';
    }

    const formData = new FormData(form);
    const payload = {
      name: formData.get('name') || '',
      email: formData.get('email') || '',
      interest: formData.get('interest') || '',
      message: formData.get('message') || '',
      page: window.location.pathname,
      submittedAt: new Date().toISOString()
    };

    try {
      if (db) {
        await addDoc(collection(db, form.dataset.collection || 'general-inquiries'), {
          ...payload,
          createdAt: serverTimestamp()
        });
      } else {
        const history = JSON.parse(localStorage.getItem('pilli-foundation-inquiries') || '[]');
        history.push(payload);
        localStorage.setItem('pilli-foundation-inquiries', JSON.stringify(history));
      }

      if (status) {
        status.textContent = 'Thank you! Your message has been received.';
      }
      form.reset();
    } catch (error) {
      console.error(error);
      if (status) {
        status.textContent = 'We could not submit this form yet. Please email foundation@pilligroup.com directly.';
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = submitButton.dataset.originalText || submitButton.textContent;
      }
    }
  });
});

forms.forEach((form) => {
  const button = form.querySelector('button[type="submit"]');
  if (button && !button.dataset.originalText) {
    button.dataset.originalText = button.textContent;
  }
});
