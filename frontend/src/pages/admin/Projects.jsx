import AdminSidebar from '../../components/admin/AdminSidebar';
import ProjectForm from '../../components/admin/ProjectForm';

export default function Projects() {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 p-8">
        <h2 className="text-3xl mb-4">Gerenciar Projetos</h2>
        <ProjectForm />
      </div>
    </div>
  );
}
