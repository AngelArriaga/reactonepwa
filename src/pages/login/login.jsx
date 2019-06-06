import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

import { Paper, Button, Typography, Link } from "@material-ui/core";
import C9TextField from "../../components/textFields/textField/text-field-v1";
import C9PasswordField from "../../components/textFields/password-field-v1/password-field-v1";

const styles = theme => ({
  mainApp: {
    margin: "5rem"
  },
  paperCls: {
    padding: "0rem .5rem",
    display: "flex",
    flexDirection: "column"
  },
  mt1: {
    marginTop: "3rem"
  },
  mt0: {
    marginTop: "1rem"
  },
  mb0: {
    marginBottom: "1rem"
  },
  hasCursor: {
    cursor: "pointer"
  }
});

class Login extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.mainApp}>
        <Paper className={classes.paperCls}>
          <C9TextField className={classes.mt1} label="User Name" />
          <C9PasswordField className={classes.mt1} label="Password" />
          <div>
            <Typography
              align={"right"}
              className={[classes.mt1, classes.hasCursor].join(" ")}
            >
              <Link variant="body2" onClick={this.props.passwordEvent}>
                {"Forgot Password ?"}
              </Link>
            </Typography>
          </div>
          <Button
            variant="contained"
            color="primary"
            className={[classes.button, classes.mt1].join(" ")}
          >
            Sign In
          </Button>

          <Typography
            align={"center"}
            className={[classes.mt0, classes.mb0, classes.hasCursor].join(" ")}
          >
            Become a member:
            <Link variant="body2">{"  Create your Account"}</Link>
          </Typography>

        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
