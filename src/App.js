import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import Main from './Main';
import AzerOl from './AzerOl';
import Kampaniyalar from './Kampaniyalar';
import Destek from './Destek';
import About from './About';
import menu from './assets/menu (1).png';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <div className='App'>
        <div className='links'>
          <p className='a'><Link className='a' to="/">Fərdi</Link></p>
          <p className='b'><Link className='a' to="/personal/join_azercell">Azercell-li ol</Link></p>
          <p className='c'><Link className='a' to="/personal/campaigns">Kampaniyalar</Link></p>
          <p className='d'><Link className='a' to="/personal/support/internet">Dəstək</Link></p>
          <p className='e'><Link className='a' to="/about-us">Şirkət haqqında</Link></p>
          </div>
        <div className='menubar' onClick={toggleMenu}>
          <img src={menu} style={{ width: "24px", height: "24px" }} />
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/personal/join_azercell" element={<AzerOl />} />
          <Route path="/personal/campaigns" element={<Kampaniyalar />} />
          <Route path="/personal/support/internet" element={<Destek />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </div>
      <nav className={`menu ${isMenuOpen ? 'open' : 'closed'}`}>
        <Link to="/" onClick={closeMenu}>Fərdi</Link>
        <Link to="/personal/join_azercell" onClick={closeMenu}>Azercell-li ol</Link>
        <Link to="/personal/campaigns" onClick={closeMenu}>Kampaniyalar</Link>
        <Link to="/personal/support/internet" onClick={closeMenu}>Dəstək</Link>
        <Link to="/about-us" onClick={closeMenu}>Şirkət haqqında</Link>
      </nav>
    </>
  );
}

export default App;
