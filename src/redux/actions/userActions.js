import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_UNAUTHENTICATED, LOADING_USER } from '../types';
import axios from 'axios';

export const loginUser = (userData, history) => (dispatch) => {
    dispatch({type: LOADING_UI});
    axios.post('/login', userData)
            .then(result => {
                setAuthorizationHeader(result.data.token);
                dispatch(getUserData()); //succesfully logged in at this point
                dispatch({ type: CLEAR_ERRORS });
                history.push('/');
            })
            .catch(err=>{
                dispatch({
                    type: SET_ERRORS,
                    payload: err.response.data
                })
            });
}

export const getUserData = () => (dispatch) =>{
    dispatch({ type: LOADING_USER });
    axios.get('/user')
        .then(res => {
            dispatch({
                type: SET_USER,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('FBIdToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
}

export const signupUser = (newUserData, history) => (dispatch) => {
    dispatch({type: LOADING_UI});
    axios.post('/signup', newUserData)
            .then(result => {
                setAuthorizationHeader(result.data.token);
                dispatch(getUserData()); //succesfully logged in at this point
                dispatch({ type: CLEAR_ERRORS });
                history.push('/');
            })
            .catch(err=>{
                dispatch({
                    type: SET_ERRORS,
                    payload: err.response.data
                })
            });
}

export const uploadImage = (formData) => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios.post('/user/image', formData)
        .then(() => {
            dispatch(getUserData());
        })
        .catch(err=> console.log(err));
}

const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
}