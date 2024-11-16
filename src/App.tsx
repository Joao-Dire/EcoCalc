import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import About from './pages/About/About';
import Calculator from './pages/Calculator/Calculator';
import NotFoundPage from './pages/NotFound/NotFound';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
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