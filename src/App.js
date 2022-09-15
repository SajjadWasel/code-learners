import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './components/AboutPage/AboutPage';
import Contact from './components/Contact/Contact';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import './components/CustomComponents/CustomComponents.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='home' element={<Navigate to='/' replace/>}>Home</Route>
        <Route path='about' element={<AboutPage></AboutPage>}>About</Route>
        <Route path='courses' element={<Courses></Courses>}>Courses</Route>
        <Route path='contact' element={<Contact></Contact>}>Contact</Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    <Footer></Footer>
      
    </div>
  );
}

export default App;
