import React, { Component } from 'react';
import './App.css';
import { Header } from './partials/Header';
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import { People } from './People';
import { Profile } from './Profile';
import { Footer } from './partials/Footer';
import { FeedPage } from "./feed/FeedPage"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/feed" component={FeedPage} />
          <Route path="/users" component={People} />
          <Route path="/myProfile" component={Profile} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export { App };
