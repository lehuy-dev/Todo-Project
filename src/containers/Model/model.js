import { Dialog, DialogTitle, Slide } from '@mui/material'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { hideModel } from '../../actions/model'
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} timeout={600} />;
});
class Model extends Component {
    render() {
        const { model, onHideModel } = this.props
        const { showModel, title, component } = model
        return (
            <form>
                <Dialog open={showModel} onClose={onHideModel} TransitionComponent={Transition}>
                    <DialogTitle>{title}</DialogTitle>
                    {component}
                </Dialog>
            </form>
        )
    }
}
const mapStateToProps = (state) => ({
    model: state.modelReducer
})
const mapDispatchToProps = (dispatch) => ({
    onHideModel: bindActionCreators(hideModel, dispatch)
})
const withConnect = connect(mapStateToProps, mapDispatchToProps)
const FORM_NAME = 'TASK_MANAGEMENT'
const withReduxForm = reduxForm({
    form: FORM_NAME
})
export default compose(withConnect, withReduxForm)(Model)