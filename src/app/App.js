import React, { Component } from 'react';
import './App.css';
import { Header } from './partials/Header';
import { Route, Switch } from 'react-router-dom'
import { Footer } from './partials/Footer';
import { FeedPage } from "./feed/FeedPage";
import { PostDetails } from "./feed/PostDetails";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/post/:type/:id" component={PostDetails} />
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
