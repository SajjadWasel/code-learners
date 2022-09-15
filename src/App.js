import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './components/AboutPage/AboutPage';
import Contact from './components/Contact/Contact';
import CoursesPage from './components/CoursesPage/CoursesPage';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import './components/CustomComponents/CustomComponents.css';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  // ===== AOS(Animate On Scroll) Animiation Starts=====
  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])
  // ===== AOS(Animate On Scroll) Animiation ends=====



  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='home' element={<Navigate to='/' replace />}>Home</Route>
        <Route path='about' element={<AboutPage></AboutPage>}>About</Route>
        <Route path='courses' element={<CoursesPage></CoursesPage>}>Courses</Route>
        <Route path='contact' element={<Contact></Contact>}>Contact</Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      {/* ==== Footer ==== */}
      <Footer></Footer>
    </div>
  );
}

export default App;
