// @packages
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';

// @scripts
import CtrlLoginForm from './login-form';
import { initialState } from './state';
import { isAllPropsValid } from '../../util';

// @styles
import styles from './styles';

import { globalUI } from '../../core';

const LoginPage = ({
    classes,
    userProps
}) => {
    const [state, onChange] = useState(initialState);

    const handleOnLogIn = () => {
        
        if (state.identification.value) {
            const { identification } = state;
            userProps
                .onLogin(identification.value).then( (res) => {
                    if(res.status === 200){
                        globalUI.navigateToUrl('/home')
                    }
                });
        } else {
            onChange({
                ...state,
                showErrors: true
            });
        }
    };
    
    const handleOnRegister = () => {
        if (isAllPropsValid(state)) {
            const { identification, nameRegister, addressRegister, emailRegister} = state;

            userProps
                .onRegister({
                    identification: identification.value,
                    name: nameRegister.value,
                    address: addressRegister.value,
                    email: emailRegister.value
                }).then( (res) => {
                    if(res.status === 201){
                        globalUI.navigateToUrl('/home')
                    }
                });
        } else {
            onChange({
                ...state,
                showErrors: true
            });
        }

    }
    const handleFieldOnChange = ({ name, isValid, value }) => {
        onChange({
            ...state,
            [name]: {
                isValid,
                value
            }
        });
    };

    const {
        identification,
        nameRegister,
        addressRegister,
        emailRegister,
        showErrors
    } = state;

    return (
        <div
            className={classes.loginPage}
            id="login-page"
        >
            <CtrlLoginForm
                identificationValue={identification.value}
                nameValue={nameRegister.value}
                addressValue={addressRegister.value}
                emailValue={emailRegister.value}
                id="login-page-form"
                onFieldChange={handleFieldOnChange}
                loginEnabled={userProps.loginEnabled}
                onLogin={handleOnLogIn}
                onRegister={handleOnRegister}
                showErrors={showErrors}
            />
        </div>
    );
};

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired,
    userProps: PropTypes.shape({
        isLoggedIn: PropTypes.bool.isRequired,
        onLogin: PropTypes.func.isRequired,
        onRegister: PropTypes.func.isRequired
    }).isRequired
};

export default withStyles(styles)(LoginPage);
