import { authenticationService } from "../services/LogInService";
import React, { Component } from "react";


export default ComposedComponent =>

  class Auth extends Component {
    componentDidMount = () => {
      if (authenticationService.isAuthenticated()) {
        console.log("yes")
    } else 
      console.log("no");
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  };