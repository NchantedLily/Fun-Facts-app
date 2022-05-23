import React, { Component } from 'react';
import Navbar from './animeFactsComponents/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'

import home from './animeFactsComponents/home';
import anime from './animeFactsComponents/anime';
import bleach from './animeFactsComponents/bleach';
import codeGeass from './animeFactsComponents/codeGeass';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Navbar/>
      <Route exact path='/' component={home}/>
      <Route path='/anime'component={anime}/>
      <Route path='/bleach'component={bleach}/>
      <Route path='/codeGeass'component={codeGeass}/>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;