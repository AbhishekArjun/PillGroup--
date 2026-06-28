import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const Churches = lazy(() => import('./pages/Churches'));
const Individuals = lazy(() => import('./pages/Individuals'));
const Children = lazy(() => import('./pages/Children'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center p-6">Loading…</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="churches" element={<Churches />} />
            <Route path="individuals" element={<Individuals />} />
            <Route path="children" element={<Children />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
