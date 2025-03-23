import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('/api/auth/users/me/', { headers: { Authorization: `JWT ${token}` } })
        .then(res => setUser(res.data))
        .catch(() => setUser(null));
    }
  }, []);

  const login = async (credentials) => {
    const res = await axios.post('/api/auth/jwt/create/', credentials);
    localStorage.setItem('token', res.data.access);
    setUser(res.data.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
