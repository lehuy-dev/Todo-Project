import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import { withStyles } from '@mui/styles'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import styles from './styles'
class GlobalLoading extends Component {
    
    render() {
       const {classes, show} = this.props
        return (
            <>
                {show && <Box className={classes.globalLoading}>
                    <CircularProgress/>
                </Box>}
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        show: state.globalLoadingReducer.showLoading
    }
}
const withConnect = connect(mapStateToProps, null)
export default compose(withStyles(styles), withConnect)(GlobalLoading)
