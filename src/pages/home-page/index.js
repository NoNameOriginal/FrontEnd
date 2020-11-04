// @packages
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { useSelector } from "react-redux";
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

// @styles
import styles from './styles';


const HomePage = ({
    classes
}) => {

    const [fileState, setFileState] = useState()

    const [serverResponse, setServerResponse] = useState()
    
    const identification = useSelector(state => state.user.account.identification);
    
    const handleFile = (event) => {
        const file = event.target.files[0]
        setFileState(file)
    }
    
    const handleOnLoadFile = () => {
        const formData = new FormData()
        formData.append('file', fileState);
        axios.post('http://backend-env.eba-6jzxphdh.us-east-1.elasticbeanstalk.com/doUpload', formData).then(response => {
            axios.get('https://govcarpetaapp.mybluemix.net/apis/authenticateDocument/'+
                       identification+
                       '/'+
                       encodeURIComponent(response.data.urlfile)+
                       '/'+
                       response.data.fileName).then(response => {
                        setServerResponse(response.data)
                       });
            
        })
    }

    

    return (
        <div className={classes.loginPage}>
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
                                    variant="h6"
                                >
                                    Cargue el archivo para que sea autenficado
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item lg={12} sm={12} md={12} xs={12}>
                                <Input
                                    id="standard-adornment-weight"
                                    type='file'
                                    inputProps={
                                        {
                                            type:'file'
                                        }
                                    }
                                    onChange={handleFile}
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item lg={12} sm={12} md={12} xs={12}>
                                <Button
                                    className={classes.loginButton}
                                    color="primary"
                                    id={`auth-continue-button`}
                                    onClick={handleOnLoadFile}
                                    value='Autentificar'
                                    variant="contained">
                                    Autentificar
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid justify="center" container>
                            <Grid item>
                                <Typography
                                    className={classes.formTitle}
                                    variant="h6"
                                >
                                    {serverResponse}
                                </Typography>
                            </Grid>
                        </Grid>
                    </form>    
                </Grid>
            </Grid>
        </div>
    );
};

HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
    content: PropTypes.string
};

HomePage.defaultProps = {
    content: null
};

export default withStyles(styles)(HomePage);
