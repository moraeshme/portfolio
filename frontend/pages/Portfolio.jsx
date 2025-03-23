import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Portfolio() {
  const { username } = useParams();
  const [portfolio, setPortfolio] = useState(null);
  const [theme, setTheme] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPortfolio() {
      try {
        const { data } = await axios.get(`/api/portfolio/${username}/`);
        setPortfolio(data);
        setTheme(data.theme);
      } catch (error) {
        console.error('Erro ao carregar portfolio:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPortfolio();
  }, [username]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-xl">Carregando...</span>
      </div>
    );
  }

  if (!portfolio || !theme) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-xl">Portfolio não encontrado.</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ backgroundColor: theme.background_color }}
      className="min-h-screen text-center p-8"
    >
      <h1 className="text-5xl font-bold mb-4" style={{ color: theme.primary_color }}>
        {portfolio.title}
      </h1>
      <p className="text-xl mb-8" style={{ color: theme.secondary_color }}>
        {portfolio.description}
      </p>

      {portfolio.content.sections.map((section, index) => (
        <motion.section
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 + index * 0.2 }}
          className="mb-12"
        >
          <h2
            className="text-3xl font-semibold mb-4"
            style={{ color: theme.primary_color }}
          >
            {section.heading}
          </h2>
          <p className="text-lg" style={{ color: theme.secondary_color }}>
            {section.body}
          </p>
        </motion.section>
      ))}
    </motion.div>
  );
}