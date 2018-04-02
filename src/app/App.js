import React, { Component } from 'react';
import './App.css';
import { Header } from './partials/Header';
import { Route, Switch } from 'react-router-dom'
import { Footer } from './partials/Footer';
import { FeedPage } from "./feed/FeedPage";
import { PeoplePage } from './feed/people/PeoplePage'
import { PostDetails } from "./feed/PostDetails"
import { ProfilePage } from "./profile/ProfilePage"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/post/:type/:id" component={PostDetails} />
          <Route path="/people" component={PeoplePage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/" component={FeedPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}




export { App };
