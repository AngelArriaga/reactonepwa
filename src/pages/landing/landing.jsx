import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

import Login from "../login/login";
import Password from "../password/password-page";

const styles = theme => ({
  mainApp: {
    margin: "5rem"
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

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.mainApp}>
          {
              this.state.page === 1 ? <Login passwordEvent={this.handlePasswordRequest_Click} /> :
              <Password />
          }
        
      </div>
    );
  }
}

export default withStyles(styles)(Landing);
