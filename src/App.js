import React from 'react'
import { Switch, Route } from 'react-router-dom';
import * as Pages from './pages';
import { Header, Footer } from './layout'
import profilepic from '../public/images/profilepic.jpg'

import './style.css';

function App(){

    return(
      <>
        <Header />
        <img src={profilepic} alt="logo / Animated avatar of Natalie" className="img-circle" />
        <Switch>
          <Route exact path="/">
            <Pages.Home />
          </Route>
          <Route path="/projects">
            <Pages.Projects />
              </Route>
          <Route path="/contact">
            <Pages.Contact />
          </Route>
          <Route>
            <Pages.NotFound />
          </Route>
        </Switch>
        <Footer />
      </>
    );
  
  };
  
  export default App;