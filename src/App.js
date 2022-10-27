import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Blogs from './components/Blogs'
import Competitions from './components/Competitions'
import Events from './components/Events';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Home" element={<Home/>} />
        <Route path="Blogs" element={<Blogs/>} />
        <Route path="Events" element={<Events/>} />
        <Route path="Competitions" element={<Competitions/>} />
        <Route path="Login" element={<Login/>}/>
        <Route path="Signup" element={<Signup/>}/>
      </Routes>
    </>
  );
}

export default App;
