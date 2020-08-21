import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from '../types';
import axios from 'axios';

export const loginUser = (userData, history) => (dispatch) => {
    dispatch({type: LOADING_UI});
    axios.post('/login', userData)
            .then(result => {
                localStorage.setItem('FBIdToken', `Bearer ${result.data.token}`);
                console.log(result.data);
                const FBIdToken = `Bearer ${result.data.token}`;
                axios.defaults.headers.common['Authorization'] = FBIdToken;
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
    axios.get('/user')
        .then(res => {
            dispatch({
                type: SET_USER,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}