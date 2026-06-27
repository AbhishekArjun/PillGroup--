const USERS_KEY = 'pilli-foundation-users';
const CURRENT_USER_KEY = 'pilli-foundation-current-user';
const INQUIRIES_KEY = 'pilli-foundation-inquiries';

const parseStorage = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key) ?? 'null') ?? fallback;
  } catch {
    return fallback;
  }
};

const writeStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export function getCurrentUser() {
  return parseStorage(CURRENT_USER_KEY, null);
}

export function createUser({ name, email, password }) {
  const users = parseStorage(USERS_KEY, []);
  const normalized = email.trim().toLowerCase();

  if (users.some((user) => user.email === normalized)) {
    throw new Error('An account with this email already exists.');
  }

  users.push({ name: name.trim(), email: normalized, password });
  writeStorage(USERS_KEY, users);
  return { name: name.trim(), email: normalized };
}

export function signIn({ email, password }) {
  const users = parseStorage(USERS_KEY, []);
  const normalized = email.trim().toLowerCase();
  const user = users.find((entry) => entry.email === normalized);

  if (!user || user.password !== password) {
    throw new Error('That email or password is incorrect.');
  }

  writeStorage(CURRENT_USER_KEY, { name: user.name, email: user.email });
  return { name: user.name, email: user.email };
}

export function signOut() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

export async function saveInquiry({ name, email, interest, message, page, collection }) {
  const inquiries = parseStorage(INQUIRIES_KEY, []);
  inquiries.push({ name, email, interest, message, page, collection, submittedAt: new Date().toISOString() });
  writeStorage(INQUIRIES_KEY, inquiries);
  return true;
}
