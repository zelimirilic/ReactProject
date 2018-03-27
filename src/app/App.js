import React, { Component } from 'react';
import './App.css';
import { Header } from './partials/Header';
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import { Feed } from './Feed';
import { People } from './People';
import { Profile } from './Profile';
import { Footer } from './partials/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/mainPage" component={Feed} />
          <Route path="/users" component={People} />
          <Route path="/myProfile" component={Profile} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export { App };
