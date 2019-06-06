import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import {
  Paper,
  TextField,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  Input
} from "@material-ui/core";

import {
  Visibility,
  VisibilityOff,
  WarningOutlined,
  CheckOutlined,
  Edit,
  EditOutlined
} from "@material-ui/icons/";

const defaultFontSize = "2rem";

const styles = theme => ({
  formCls: {
    width:'100%'
  },
  inputField: {
   
    fontSize: "1.5rem"
  },
  red: {
    color: "orange",
    fontSize: defaultFontSize
  },
  green: {
    color: "green",
    fontSize: defaultFontSize
  }, 
  edit: {
      color: '#e39a15d4',
    fontSize: defaultFontSize
  }
});

class C9TextField extends Component {
  constructor() {
    super();

    this.state = {
      hasError: true,
      textValue: "",
      valueInit: false
    };
  }

  setValue = evt => {
      console.log(evt);
    this.setState(
      {
        textValue: evt.currentTarget.value,
        hasError: evt.currentTarget.value === "error" || evt.currentTarget.value === '',
        valueInit: true //only want it altered once since this changes the behavior of validation visuals
      }
    );
  };

  getIcon = () => {
      let icon = !this.state.valueInit ? <EditOutlined /> 
                : this.state.hasError ?  <WarningOutlined  />
                : <CheckOutlined />;

                return icon;
  }

  getIconStyle = () =>{
    let iconStyle = !this.state.valueInit ? this.props.edit 
    : this.state.hasError ?  this.props.red
    : this.props.green;
    
    return iconStyle;
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="App">
         <FormControl className={classes.formCls}>
          <InputLabel htmlFor="adornment-password" className={classes.inputField}>{this.props.label}</InputLabel>
          <Input className={classes.inputField}
            id="adornment-password"
            type="email"
            // type={this.state.hasError ? "text" : "password"}
            value={this.state.textValue}
            onChange={this.setValue}
            endAdornment={
              <InputAdornment position="end">
                   {
                       !this.state.valueInit ? <EditOutlined className={classes.edit}/> 
                       : this.state.hasError ?  <WarningOutlined  className={classes.red}/>
                       : <CheckOutlined className={classes.green}/>
                   }
                {/* <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.getIcon()}
                </IconButton> */}
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(C9TextField);
