import childProfile1 from '../assets/images/child-profile-1.png';
import childProfile2 from '../assets/images/child-profile-2.png';
import childProfile3 from '../assets/images/child-profile-3.png';
import childProfile4 from '../assets/images/child-profile-4.png';

const profileImages = [childProfile1, childProfile2, childProfile3, childProfile4];

export const children = [
  { id: 'aman', name: 'Aman', age: 8, grade: 'Class 3', location: 'Hyderabad', monthlyAmount: 2500, focus: 'School fees and meals', color: 'bg-sky-100 text-sky-800', story: 'Aman enjoys maths and wants to become an engineer. Sponsorship keeps him in school with books, meals, and mentoring.' },
  { id: 'sara', name: 'Sara', age: 9, grade: 'Class 4', location: 'Vijayawada', monthlyAmount: 2500, focus: 'Uniforms and tuition', color: 'bg-rose-100 text-rose-800', story: 'Sara is a confident reader who helps classmates after school. She needs steady support for tuition and uniforms.' },
  { id: 'rahul', name: 'Rahul', age: 8, grade: 'Class 3', location: 'Hyderabad', monthlyAmount: 2500, focus: 'Books and transport', color: 'bg-emerald-100 text-emerald-800', story: 'Rahul loves science experiments and rarely misses class. Monthly support covers transport and learning materials.' },
  { id: 'meera', name: 'Meera', age: 10, grade: 'Class 5', location: 'Warangal', monthlyAmount: 3000, focus: 'Digital learning', color: 'bg-amber-100 text-amber-800', story: 'Meera hopes to become a teacher. Sponsorship gives her access to tutoring, internet, and a safe study space.' },
  { id: 'arjun', name: 'Arjun', age: 11, grade: 'Class 6', location: 'Secunderabad', monthlyAmount: 3000, focus: 'Tuition and nutrition', color: 'bg-indigo-100 text-indigo-800', story: 'Arjun is strong in languages and football. Support helps with school fees, nutrition, and after-school mentoring.' },
  { id: 'diya', name: 'Diya', age: 7, grade: 'Class 2', location: 'Nizamabad', monthlyAmount: 2200, focus: 'Primary education', color: 'bg-fuchsia-100 text-fuchsia-800', story: 'Diya is learning English and drawing. A sponsor helps her family keep education consistent through the year.' },
  { id: 'kabir', name: 'Kabir', age: 12, grade: 'Class 7', location: 'Karimnagar', monthlyAmount: 3200, focus: 'Exam preparation', color: 'bg-cyan-100 text-cyan-800', story: 'Kabir wants to study medicine one day. He needs academic coaching, school supplies, and health support.' },
  { id: 'nisha', name: 'Nisha', age: 13, grade: 'Class 8', location: 'Guntur', monthlyAmount: 3200, focus: 'School continuation', color: 'bg-lime-100 text-lime-800', story: 'Nisha is determined to finish school and mentor younger students. Sponsorship reduces pressure on her family.' },
  { id: 'rohan', name: 'Rohan', age: 6, grade: 'Class 1', location: 'Kurnool', monthlyAmount: 2000, focus: 'Foundational learning', color: 'bg-orange-100 text-orange-800', story: 'Rohan is beginning his school journey. Support provides books, meals, and regular classroom attendance.' },
  { id: 'anika', name: 'Anika', age: 14, grade: 'Class 9', location: 'Tirupati', monthlyAmount: 3500, focus: 'Secondary school fees', color: 'bg-violet-100 text-violet-800', story: 'Anika is preparing for board exams and wants to study commerce. Sponsorship supports fees and tutoring.' },
  { id: 'vivek', name: 'Vivek', age: 10, grade: 'Class 5', location: 'Nellore', monthlyAmount: 2800, focus: 'Meals and books', color: 'bg-teal-100 text-teal-800', story: 'Vivek is curious and loves reading stories. Sponsor support covers books, meals, and school activities.' },
  { id: 'tara', name: 'Tara', age: 9, grade: 'Class 4', location: 'Mysuru', monthlyAmount: 2600, focus: 'Tuition support', color: 'bg-pink-100 text-pink-800', story: 'Tara is improving quickly in maths with tutoring. Sponsorship keeps that progress stable.' },
  { id: 'ishaan', name: 'Ishaan', age: 12, grade: 'Class 7', location: 'Bengaluru', monthlyAmount: 3300, focus: 'STEM learning', color: 'bg-blue-100 text-blue-800', story: 'Ishaan enjoys robotics clubs at school. Monthly support helps him access supplies and workshops.' },
  { id: 'priya', name: 'Priya', age: 11, grade: 'Class 6', location: 'Chennai', monthlyAmount: 3000, focus: 'School supplies', color: 'bg-red-100 text-red-800', story: 'Priya writes short poems and wants to become a journalist. Sponsorship covers school supplies and mentoring.' },
  { id: 'dev', name: 'Dev', age: 8, grade: 'Class 3', location: 'Pune', monthlyAmount: 2500, focus: 'Transport and meals', color: 'bg-green-100 text-green-800', story: 'Dev travels far for school. Support helps him attend safely and receive nutritious meals.' },
  { id: 'kavya', name: 'Kavya', age: 15, grade: 'Class 10', location: 'Mumbai', monthlyAmount: 3800, focus: 'Board exam support', color: 'bg-yellow-100 text-yellow-800', story: 'Kavya is focused on completing Class 10 with strong marks. Sponsorship covers exam fees and coaching.' },
  { id: 'farhan', name: 'Farhan', age: 13, grade: 'Class 8', location: 'Delhi', monthlyAmount: 3400, focus: 'Mentorship', color: 'bg-slate-200 text-slate-800', story: 'Farhan is thoughtful and enjoys computer classes. He needs mentorship and learning resources.' },
  { id: 'lina', name: 'Lina', age: 7, grade: 'Class 2', location: 'Kochi', monthlyAmount: 2200, focus: 'Early education', color: 'bg-purple-100 text-purple-800', story: 'Lina loves art and music. Sponsorship helps her remain enrolled and confident in class.' },
  { id: 'omkar', name: 'Omkar', age: 10, grade: 'Class 5', location: 'Nagpur', monthlyAmount: 2800, focus: 'Health and education', color: 'bg-stone-200 text-stone-800', story: 'Omkar is recovering academically after family hardship. Support provides health checkups and steady schooling.' },
  { id: 'zoya', name: 'Zoya', age: 12, grade: 'Class 7', location: 'Lucknow', monthlyAmount: 3300, focus: 'Learning materials', color: 'bg-cyan-100 text-cyan-800', story: 'Zoya is an excellent speaker and wants to become a lawyer. Sponsorship covers materials and workshops.' },
].map((child, index) => ({
  ...child,
  image: profileImages[index % profileImages.length],
}));

export function findChild(childId) {
  return children.find((child) => child.id === childId);
}
