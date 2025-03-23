import { useParams } from 'react-router-dom';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';


function PortfolioContent() {
  const theme = useTheme();

  if (!theme) return <div>Loading...</div>;

  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ backgroundColor: theme.background_color }}
        className="min-h-screen"
        >
        <h1 style={{ color: theme.primary_color }}>Bem-vindo ao meu Portfólio</h1>
        {/* Conteúdo dinâmico */}
    </  motion.div>
  );  
} 
  
export default function Portfolio() {
  const { username } = useParams();

  return (
    <ThemeProvider username={username}>
      <PortfolioContent />
    </ThemeProvider>
  );
}
