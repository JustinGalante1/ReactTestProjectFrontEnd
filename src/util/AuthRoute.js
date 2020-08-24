import React, { Component } from 'react'
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AuthRoute = ({ component: Component, authenticated, ...rest}) => (
    <Route    
        {...rest}    
        //if authenticated, redirect to home. If not authenticated, redirect to the page they were originally trying to go to with the necessary properties
        render={(props) => authenticated === true ? <Redirect to='/'/> : <Component {...props}/>} 
    />
);

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
})

AuthRoute.propTypes = {
    user: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(AuthRoute)
