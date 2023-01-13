function sessionForm(props) {

    
    return(
        props.formType ? 'Login' (
            //render login form
            <button>Login</button>
        ) :
        (
            //render signup form
            <button>Signup</button>
        )
    )
}