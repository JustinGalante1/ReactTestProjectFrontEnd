import React, { Component } from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

//MUI
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

//Icons


const styles = (theme) => ({
    ...theme.spreadThis
})

class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        const { classes, user: { credentials: { handle, createdAt, imageUrl, bio, website, location }, loading }} = this.props;
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

Profile.propTypes = {
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(withStyles(styles)(Profile))