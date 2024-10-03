import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import HomePage from './pages/homePage/HomePage';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactPage from './pages/Contact/Contact'; // Create this component

function App() {
  return (
    <Router>
      <>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;

