import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/admin/Dashboard';
import Projects from './pages/admin/Projects';
import Skills from './pages/admin/Skills';
import AboutMe from './pages/admin/AboutMe';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<div>Home</div>} /> {/* Adicione esta linha */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/projects" element={
          <ProtectedRoute>
            <Projects />
          </ProtectedRoute>
        } />
        <Route path="/admin/skills" element={
          <ProtectedRoute>
            <Skills />
          </ProtectedRoute>
        } />
        <Route path="/admin/about-me" element={
          <ProtectedRoute>
            <AboutMe />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}