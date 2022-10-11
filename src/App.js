import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Experience from './Components/Experiance';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';

function App() {
  return (
    <>
   
  {/* <Home></Home> */}
  <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/project" element={<Projects></Projects>}></Route>
        <Route path='/Experiance' element={<Experience></Experience>}></Route>
    </Routes>

     
    </>
  );
}

export default App;
