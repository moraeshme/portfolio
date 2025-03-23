import { render } from '@testing-library/react';
import App from '../App';
import { AuthProvider } from '../contexts/AuthContext';

// eslint-disable-next-line no-undef
test('Renderiza o App corretamente', () => {
  render(
    <AuthProvider>
      <App />
    </AuthProvider>
  );
});