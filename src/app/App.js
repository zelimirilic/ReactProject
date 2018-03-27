import React, { Component } from 'react';
import './App.css';
import { Header } from './partials/Header';
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import { Footer } from './partials/Footer';
import { FeedPage } from "./feed/FeedPage"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/feed" component={FeedPage} />
          <Route path="/people" component={PeoplePage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const PeoplePage = () => <div>PeoplePage</div>
const ProfilePage = () => <div>ProfilePage</div>

export { App };
