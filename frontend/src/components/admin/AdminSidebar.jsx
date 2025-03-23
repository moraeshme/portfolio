import { Link } from 'react-router-dom';

export default function AdminSidebar() {
  return (
    <nav className="w-64 bg-gray-800 h-screen text-white p-4">
      <Link to="/admin/dashboard" className="block py-2">Dashboard</Link>
      <Link to="/admin/projects" className="block py-2">Projetos</Link>
      <Link to="/admin/skills" className="block py-2">Skills</Link>
      <Link to="/admin/about-me" className="block py-2">Sobre mim</Link>
    </nav>
  );
}
