import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

import Login from "../login/login";
import Password from "../password/password-page";
import Register from "../register/register-page";

const styles = theme => ({
  mainApp: {
    backgroundColor:'lightgrey',
    height:'99vh',
    width: '98vw'
  
  },
  
});

class Landing extends Component {

  constructor() {
    super();

    this.state = {
      hasError: false,
      page: 1
    };
  }

  handlePasswordRequest_Click = () => {

    this.setState({
        page:2
    });

  }

  handleSignInRequest_Click = () => {
    this.setState({
      page: 1
    })
  }

  handleRegisterRequest_Click = () => {
    this.setState({
      page: 3
    })
  }

  getComponent = () =>{
    switch(this.state.page){
      case 1:{
        return <Login passwordEvent={this.handlePasswordRequest_Click} registerEvent={this.handleRegisterRequest_Click} />;
      }
      case 2:{
        return <Password signInEvent={this.handleSignInRequest_Click} registerEvent={this.handleRegisterRequest_Click}/>
      }
      case 3:{
        return <Register  passwordEvent={this.handlePasswordRequest_Click} signInEvent={this.handleSignInRequest_Click}/>;
      }
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.mainApp}>
          {            
             this.getComponent()            
          }
        
      </div>
    );
  }
}

export default withStyles(styles)(Landing);
