import {connect} from 'react-redux';
import { login,signup } from '../../Redux/actions/session_actions';
import SessionForm from './session_form'

const mSTP = (state:any) => {
    return {
        currentUser: state.session.id,
        signUpUserId: state.users.user,
        error: state.session.error
    }
}

const mDTP = {
        login: (user:any) => login(user), 
        signUp: (user:any) => (signup(user))
}


export default connect(mSTP,mDTP)(SessionForm);


