import './App.css';
import Aboutus from './components/About/about';
import Hero from './components/Hero/hero';
import Base64 from './components/Base64/Base64';
import Navbar from './components/Navbar/navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container my-8">
          <Routes>
            <Route path="/about" element={<Aboutus/>} />
            <Route path="/base64" element={<Base64/>} />
            <Route path="/" element={<Hero heading="Enter the text" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;