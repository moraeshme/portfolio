import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ThemeContext = createContext();

export const ThemeProvider = ({ username, children }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    axios.get(`/api/portfolio/${username}/`).then(response => {
      setTheme(response.data.theme);
    });
  }, [username]);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
