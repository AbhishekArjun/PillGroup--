const USERS_KEY = 'pilli-foundation-users';
const CURRENT_USER_KEY = 'pilli-foundation-current-user';
const INQUIRIES_KEY = 'pilli-foundation-inquiries';
const SPONSORSHIPS_KEY = 'pilli-foundation-sponsorships';

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

  const newUser = { name: name.trim(), email: normalized, password };
  users.push(newUser);
  writeStorage(USERS_KEY, users);
  writeStorage(CURRENT_USER_KEY, { name: newUser.name, email: newUser.email });
  return { name: newUser.name, email: newUser.email };
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

export function getSponsorshipsForUser(email) {
  if (!email) return [];
  const sponsorships = parseStorage(SPONSORSHIPS_KEY, []);
  return sponsorships.filter((sponsorship) => sponsorship.userEmail === email);
}

export function createSponsorship({ userEmail, childId, childName, amount, frequency, paymentMethod }) {
  const sponsorships = parseStorage(SPONSORSHIPS_KEY, []);
  const record = {
    id: `SP-${Date.now()}`,
    userEmail,
    childId,
    childName,
    amount,
    frequency,
    paymentMethod,
    status: 'Active',
    startedAt: new Date().toISOString(),
  };

  sponsorships.push(record);
  writeStorage(SPONSORSHIPS_KEY, sponsorships);
  return record;
}
