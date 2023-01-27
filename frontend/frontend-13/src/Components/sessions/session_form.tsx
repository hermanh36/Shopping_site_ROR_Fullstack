import { Container, Typography, TextField, Button, Link, Box, Grid, Paper, Avatar, FormControlLabel } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {Colors} from "../../styles/theme"
import {
  BannerShopButton,
} from "../../styles/banner";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSeletor } from "../../Redux/toolkit/store.hook";
import {addCurrentUser, UserType} from "../../Redux/toolkit/user.slice";

export type sessionEnum = "login" | "sign_up";


interface sessionForm {
  formType: sessionEnum;
}

function SessionForm(props: any) {
  let navigate = useNavigate();
  const [credential, setCredential] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);
  const [error, setErrors] = useState(false);
  const dispatch = useAppDispatch();
  const addCurrUser = (user: UserType) => dispatch(addCurrentUser(user)); 
  useEffect(() => {
    console.log(props.signUpStatus);
    console.log(props.signUpUserId);
    console.log(props);
    if (props.currentUserId) {
      navigate("/");
      console.log("login"+props.currentUserId)
      const curUser = {
        user: props.currentUserId,
        username: props.currentUserName,
        email: props.currentUserEmail
      }
      addCurrUser(curUser);
      return;
    }
    if (props.signUpUserId === 'SUCCESS') {
      navigate("/login");
      console.log("sign up"+props.signUpUserId)
    }
  },[props.currentUserId, props.signUpStatus])


  const submitHandler = (e: React.SyntheticEvent ): void =>  {
    e.preventDefault();
    if (props.formType ===  'login') {
      props.login({
        credential: credential,
        password: password
      })
    } else {
      props.signUp({
        username: username,
        email: email,
        password: password
      })
    }
  }



  //Sign up password validation
  const handleValidation = (e:any) => {
    var reg = /^(?=.*\d)(?=.*[.!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,}$/;
    setValid(reg.test(e.target.value));
    setPassword(e.target.value);
  };


  const paperStyle={padding :20,height:'80vh',width:500, margin:"50px auto"}
  const avatarStyle={backgroundColor: Colors.secondary}
  // const btnstyle={margin:'8px 0'}

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
    <Container className="login-container" maxWidth="xs">

    <Grid  container
  direction="column"
  justifyContent="center"
  alignItems="center">

     <Avatar style={avatarStyle}>
     {props.formType === "login" ? <LockOutlinedIcon/> : <AddCircleOutlineOutlinedIcon/>}
      </Avatar>
    
      <Typography variant="h3" align="center" sx={{mt:2}}>
     
        {props.formType === "login" ? "Login" : "Sign Up"}
      </Typography>
      
      <form onSubmit={submitHandler}>
        {props.formType === "login" ? (
          <div className='login-labels-container'>
            <TextField
              onChange={(e) => setCredential(e.target.value)}
              variant="outlined"
              margin="normal"
              label="Username"
              fullWidth
              required
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              margin="normal"
              label="Password"
              type="password"
              fullWidth
              required
            />
          </div>
        ) : (
          <div className='login-labels-container'>
            <TextField
              onChange={(e) => setUsername(e.target.value)}
              variant="outlined"
              margin="normal"
              label="Username"
              value={username}
              error={username !=="" && username.length<6}
              helperText={username !=="" && username.length<6?'User name must be 6 characters long!':''}
              fullWidth
              required
            />
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              margin="normal"
              label="Email"
              value={email}
              error={email !=="" && email.length<6}
              helperText={email !=="" && email.length<6?'Please use a valid email!':''}
              fullWidth
              required
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              margin="normal"
              label="Password"
              type="password"
              value={password}
              error={password !=="" && password.length<6}
              helperText={password !=="" && password.length<6?'Password must be minimum 6 characters':''}
              fullWidth
              required
            />
          </div>
        )}
        {props.formType === "login" ? (
          <Container>
            <BannerShopButton sx={{ width: "300px" }}  type="submit" fullWidth variant="contained" color="primary">
              Login
            </BannerShopButton>
            <Typography variant='subtitle1'> New here? {'\u00A0'}
            <Link href="/signup">
              Please Sign up!
            </Link>
            </Typography>
          
          </Container>
        ) : (
          <Container>
            <BannerShopButton sx={{ width: "300px" }} type="submit" fullWidth variant="contained" color="primary">
              Sign Up
            </BannerShopButton>
            <Typography variant='subtitle1' >Aleady have account? {'\u00A0'} 
            <Link  href="/login">
              Please Sign in!
            </Link></Typography>
           
          </Container>
        )}
        {
          props.formType === 'login' ? (
            props.loginError ? <p>Your credentials are incorrect</p> : <></>
          )
          :
          (
            props.signUpError ? <p>Your username is taken! Please try another one!</p> : <></>
          )
        }
      </form>
      </Grid>
    </Container>
    </Paper>
    </Grid>
  );
}

export default SessionForm;
