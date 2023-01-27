import {connect} from 'react-redux';
import { login,signup} from '../../Redux/actions/session_actions';
import SessionForm from './session_form'

const mSTP = (state:any) => {
    return {
        currentUserId: state.session.id,
        signUpUserId: state.users.user,
        currentUserName: state.users.username,
        currentUserEmail: state.users.email,
        error: state.session.error
    }
}

const mDTP = {
        login: (user:any) => login(user), 
        signUp: (user:any) => (signup(user))
}


export default connect(mSTP,mDTP)(SessionForm);


