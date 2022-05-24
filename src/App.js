import React, { Component } from 'react';
import Navbar from './animeFactsComponents/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import home from './animeFactsComponents/home';
import anime from './animeFactsComponents/animejp';
import bleach from './animeFactsComponents/bleach';
import codeGeass from './animeFactsComponents/codeGeass';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={home}/>
      <Route path='/anime' component={anime}/>
      <Route path='/bleach' component={bleach}/>
      <Route path='/codeGeass' component={codeGeass}/>
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;