import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import About from './pages/About/About';
import Calculator from './pages/Calculator/calculator';
import NotFoundPage from './pages/NotFound/NotFound';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/About' element={<About />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;