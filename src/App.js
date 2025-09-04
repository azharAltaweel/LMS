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
import CoursesPage2 from './Components/CoursesPage2';


function App() {
  return (
    <>
    <Nav1/>
    <Nav2/>
    <Nav3/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path='/home' element= {<HomePage/>}/>
      <Route path='/contact' element= {<ContactPage/>}/>
      <Route path='/about' element= {<AboutPage/>}/>
      <Route path='/courses' element= {<CoursesPage/>}/>
       <Route path='/page1' element= {<CoursesPage/>}/>
      <Route path='/page2' element= {<CoursesPage2/>}/>

    </Routes>
    <Footer/>
    </>

  );
}
export default App;
