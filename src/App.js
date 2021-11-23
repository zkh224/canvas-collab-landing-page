import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages';
import {Switch, Route} from 'react-router-dom';
import Learn from './pages/learn';
import Dropdown from './components/Dropdown';

function App() {                  // to toggle the grid
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
        console.log('i resized')
      }
    };
      window.addEventListener('resize', hideMenu);
      
      return () => {
        window.removeEventListener('resize', hideMenu);
      };
    });

  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/learn' component={Learn} />
        
      </Switch>
      <Footer />
    </>
  );
}

export default App;