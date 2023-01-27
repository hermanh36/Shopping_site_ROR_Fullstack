import {connect} from 'react-redux';
import {logout} from '../../../Redux/actions/session_actions';
import LogOut from './LogOut';

const mSTP = (state:any) => {
    return {
        error: state.session.error
    }
}

const mDTP = {
        logout: () => logout(), 
}


// export default connect(mSTP,mDTP)(LogOut);