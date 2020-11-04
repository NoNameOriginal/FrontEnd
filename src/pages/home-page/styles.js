// @scripts
import globals from '../../styles/globals';

export default (theme) => ({
    ...globals(theme),
    homePage: {
    },
    loginButton: {
        marginTop: 50,
        width: 150
    },
    formContainer: {
        height: '100vh'
    },
    loginPage: {
        backgroundColor: '#F6F7FD',
        height: '100vh'
    },
    form: {
        left: '50%',
        maxWidth: 500,
        minWidth: 300,
        padding: 25,
        position: 'relative',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }  
});
