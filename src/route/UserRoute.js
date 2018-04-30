import {authenticationService} from "../services/LogInService"
import React, { Component } from "react";

export default ComposedComponent =>

  class Auth extends Component {
    componentDidMount = () => {
      if (!authenticationService.isAuthenticated()) 
      this.props.history.push("/login");
    };

    render() {
      return <ComposedComponent {...this.props} />;
    }
  };