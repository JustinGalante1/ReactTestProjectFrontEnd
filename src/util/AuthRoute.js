import React, { Component } from 'react'
import {Route, Redirect} from 'react-router-dom';

const AuthRoute = ({ component: Component, authenticated, ...rest}) => (
    <Route    
        {...rest}    
        //if authenticated, redirect to home. If not authenticated, redirect to the page they were originally trying to go to with the necessary properties
        render={(props) => authenticated === true ? <Redirect to='/'/> : <Component {...props}/>} 
    />
);

export default AuthRoute
