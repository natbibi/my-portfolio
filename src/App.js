import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Home, Projects, Contact } from './pages';
import { Header, Footer } from './layout'
import profilepic from '../public/images/profilepic.jpg'

import './style.css';

function App(){

    return(
      <>
        <Header />
        <img src={profilepic} alt="logo / Animated avatar of Natalie" className="img-circle" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </>
    );
  
  };
  
  export default App;