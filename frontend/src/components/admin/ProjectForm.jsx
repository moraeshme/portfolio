import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProjectForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/projects/').then(res => setProjects(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/admin/projects/', { title, description });
    setTitle('');
    setDescription('');
    const res = await axios.get('/api/admin/projects/');
    setProjects(res.data);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          className="border p-2 mb-4 w-full"
          placeholder="Título do projeto"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          className="border p-2 mb-4 w-full"
          placeholder="Descrição"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <button className="bg-blue-500 text-white py-2 px-4">Adicionar Projeto</button>
      </form>

      <ul>
        {projects.map(project => (
          <li key={project.id} className="mb-4 border-b pb-2">
            <strong>{project.title}</strong>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
