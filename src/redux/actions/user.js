// @packages
import axios from 'axios';

// @scripts
import { config } from '../../config';

// @constants
export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const ENABLED_LOGIN = 'ENABLED_LOGIN';
export const LOGOUT = 'LOGOUT';
export const REMEMBER_ME = 'REMEMBER_ME';
export const UPDATE_LANGUAGE = 'UPDATE_LANGUAGE';

/**
 * @param {string} identification
 */
export const login = ( identification ) =>
    (dispatch) => axios
        .get(`${config.services.validateCitizen}${identification}` )
        .then((response) => {
            if(response.status === 204){
                dispatch({
                    type: ENABLED_LOGIN,
                    payload: true
               });
            }
            if(response.status === 200){
                dispatch({
                    type: 'STORE_IDENTIFICATION',
                    payload: identification
                })
            }
            return response;
            
        })
        .catch((error) => Promise.reject(error));

/**
 * @param {string} identification
 */
export const register = ( {identification, name, address, email} ) =>
(dispatch) => axios
    .post(config.services.registerCitizen, {
        id: identification,
        name,
        address,
        email,
        operatorId: "1",
        operatorName: "Operador Ciudadano"
    } )
    .then((response) => {
        if(response.status == 201){
            dispatch({
                type: 'STORE_IDENTIFICATION',
                payload: identification
            })
        }
        return response;
        
    })
    .catch((error) => Promise.reject(error));

export const logout = () =>
    ({
        type: LOGOUT
    });

/**
 * @param {string} languageCode - E.g: 'en', 'es'.
 */
export const updateLanguage = (languageCode) =>
    ({
        type: UPDATE_LANGUAGE,
        payload: languageCode
    });
