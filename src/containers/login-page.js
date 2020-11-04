// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import LoginPage from '../pages/login-page';
import { login } from '../redux';
import { register } from '../redux';

const LoginPageContainer = ({
    userOnLogin,
    userOnRegister,
    loginEnabled,
    userPermissions
}) => (
    <LoginPage
        userProps={{
            isLoggedIn: Boolean(userPermissions.length),
            loginEnabled,
            onLogin: userOnLogin,
            onRegister: userOnRegister
        }}
    />
);

LoginPageContainer.propTypes = {
    userOnLogin: PropTypes.func.isRequired,
    userOnRegister: PropTypes.func.isRequired,
    userPermissions: PropTypes.arrayOf(PropTypes.string).isRequired
};

const mapStateToProps = ({ user }) => ({
    userPermissions: user.account.permissions,
    loginEnabled: user.rememberMe
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    userOnLogin: login,
    userOnRegister: register
}, dispatch);

export default connect(
    mapStateToProps, mapDispatchToProps
)(LoginPageContainer);
