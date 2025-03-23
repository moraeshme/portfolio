import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/admin/Dashboard';
import Projects from './pages/admin/Projects';
import Skills from './pages/admin/Skills';
import AboutMe from './pages/admin/AboutMe';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/projects" element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          } 
        />
        <Route path="/admin/skills" element={<Skills />} />
        <Route path="/admin/about-me" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}
