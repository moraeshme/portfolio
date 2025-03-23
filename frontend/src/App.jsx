// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:username" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
