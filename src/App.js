import './App.css';
import { Routes, Route } from "react-router-dom";

import ContactPage from './Components/Contact';
import Footer from './Components/footer';
import HomePage from './Components/Home';
import Nav1 from './Components/Nav1';
import Nav2 from './Components/Nav2';
import Nav3 from './Components/Nav3';
import AboutPage from './Components/AboutPage';
import CoursesPage from './Components/CoursesPage';


function App() {
  return (
    <>
    <Nav1/>
    <Nav2/>
    <Nav3/>
    <Routes>
      <Route path='/home' element= {<HomePage/>}/>
      <Route path='/contact' element= {<ContactPage/>}/>
      <Route path='/about' element= {<AboutPage/>}/>
      <Route path='/courses' element= {<CoursesPage/>}/>




    </Routes>
    <Footer/>
    </>

  );
}
export default App;
