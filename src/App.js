import './App.css';
import Hero from './components/Hero/hero';
import Navbar from './components/Navbar/navbar';
// import {
//   BrowserRouter as 
//   Routes,
//   Route,
//   Router
// } from 'react-router-dom';


function App() {
  return (
    <>
    
      <Navbar />
      <div className="container my-8">
        <Hero heading="Enter the text" />
      </div>
    </>
  );
}

export default App;
