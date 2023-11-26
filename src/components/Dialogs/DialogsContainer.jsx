

import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessageActionCreator} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import {connect} from "react-redux";




let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}



export default compose(
    connect(mapStateToProps, {addMessageActionCreator}),
    withAuthRedirect
)(Dialogs)
