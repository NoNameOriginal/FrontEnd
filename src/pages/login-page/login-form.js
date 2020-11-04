// @packages
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// @scripts
import CtrlTextField from '../../components/common/ctrl-text-field';
import { config } from '../../config';

// @styles
import styles from './styles';

const CtrlLoginForm = ({
    classes,
    identificationValue,
    nameValue,
    addressValue,
    emailValue,
    id,
    loginEnabled,
    onFieldChange,
    onLogin,
    onRegister,
    showErrors
}) => (
    <div id={id}>
        <Grid container direction="row">
            <Grid
                className={classes.formContainer}
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
            >
                <form
                    autoComplete="off"
                    className={classes.form}
                    noValidate
                >
                    <Grid justify="center" container>
                        <Grid item>
                            <Typography
                                className={classes.formTitle}
                                variant="h5"
                            >
                                {config.text.loginPage.welcomeToReact}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid justify="center" container>
                        <Grid item>
                        {!loginEnabled &&
                            <Typography
                                className={classes.formTitle}
                            >
                                {config.text.loginPage.loginLabel}
                            </Typography>}
                            {loginEnabled &&
                            <Typography
                                className={classes.formTitle}
                            >
                                {config.text.loginPage.registerLabel}
                            </Typography>}
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item lg={12} sm={12} md={12} xs={12}>
                            <CtrlTextField
                                autoFocus
                                icon="account_circle"
                                id={`${id}-identification-input`}
                                label={config.text.loginPage.userLabel}
                                name="identification"
                                onChange={onFieldChange}
                                onEnter={onLogin}
                                placeholder={config.text.loginPage.userPlaceholder}
                                required
                                showErrors={showErrors}
                                type="text"
                                value={identificationValue}
                            />
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid item>

                            {!loginEnabled &&
                                <Button
                                    className={classes.loginButton}
                                    color="primary"
                                    id={`${id}-continue-button`}
                                    onClick={onLogin}
                                    value={config.text.loginPage.continue}
                                    variant="contained">
                                    {config.text.loginPage.formTitle}
                                </Button>
                            }

                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item lg={12} sm={12} md={12} xs={12}>
                            <CtrlTextField
                                autoFocus
                                icon="account_circle"
                                id={`${id}-nameRegister-input`}
                                label={config.text.loginPage.nameRegisterLabel}
                                name="nameRegister"
                                onChange={onFieldChange}
                                onEnter={onRegister}
                                visible={loginEnabled}
                                placeholder={config.text.loginPage.nameRegisterPlaceholder}
                                required
                                showErrors={showErrors}
                                type="text"
                                value={nameValue}
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item lg={12} sm={12} md={12} xs={12}>
                            <CtrlTextField
                                autoFocus
                                icon="account_circle"
                                id={`${id}-addressRegister-input`}
                                label={config.text.loginPage.addressRegisterLabel}
                                name="addressRegister"
                                onChange={onFieldChange}
                                onEnter={onRegister}
                                visible={loginEnabled}
                                placeholder={config.text.loginPage.addressRegisterPlaceholder}
                                required
                                showErrors={showErrors}
                                type="text"
                                value={addressValue}
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item lg={12} sm={12} md={12} xs={12}>
                            <CtrlTextField
                                autoFocus
                                icon="account_circle"
                                id={`${id}-emailRegister-input`}
                                label={config.text.loginPage.emailRegisterLabel}
                                name="emailRegister"
                                onChange={onFieldChange}
                                onEnter={onRegister}
                                visible={loginEnabled}
                                placeholder={config.text.loginPage.emailRegisterPlaceholder}
                                required
                                showErrors={showErrors}
                                type="email"
                                value={emailValue}
                            />
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid item>

                            {loginEnabled &&
                                <Button
                                    className={classes.loginButton}
                                    color="primary"
                                    id={`${id}-continue-button`}
                                    onClick={onRegister}
                                    value={config.text.loginPage.register}
                                    variant="contained">
                                    {config.text.loginPage.registerTitle}
                                </Button>
                            }

                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    </div>
);

CtrlLoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
    identificationValue: PropTypes.string,
    nameValue: PropTypes.string,
    addressValue: PropTypes.string,
    emailValue: PropTypes.string,
    id: PropTypes.string.isRequired,
    onFieldChange: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
    onRegister: PropTypes.func.isRequired,
    showErrors: PropTypes.bool.isRequired
};

CtrlLoginForm.defaultProps = {
    identificationValue: null,
    nameValue: null,
    addressValue: null,
    emailValue: null
};

export default withStyles(styles)(CtrlLoginForm);
