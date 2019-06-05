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

class C9PasswordField extends Component {
    constructor() {
        super();

        this.state = {
            hasError: true,
            textValue: "",
            valueInit: false,
            isPasswordVisible: false
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

    
    handleClickShowPassword = () => {
        this.setState(prevState => {
            return {
                isPasswordVisible: !prevState.isPasswordVisible
            }
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <div >
                <FormControl className={classes.formCls}>
                    <InputLabel htmlFor="adornment-password" className={classes.inputField}>{this.props.label}</InputLabel>
                    <Input className={classes.inputField}
                        id="adornment-password"
                        t
                        type={this.state.isPasswordVisible ? "text" : "password"}
                        value={this.state.textValue}
                        onChange={this.setValue}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                >
                                    {this.state.isPasswordVisible ? <VisibilityOff/> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>
        );
    }
}

export default withStyles(styles)(C9PasswordField);
