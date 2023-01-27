import {
    MenuItem,
  } from "@mui/material";

import {clearCurrentUser} from "../../../Redux/toolkit/user.slice";
import { useAppDispatch, useAppSeletor } from "../../../Redux/toolkit/store.hook";

function LogOut(props: any) {

  const dispatch = useAppDispatch();
  const clearCurrUser = () => dispatch(clearCurrentUser); 

  const submitHandler = (e: React.SyntheticEvent ): void =>  {
    e.preventDefault();
    // clearCurrUser();
      props.logout({
      });
      localStorage.clear();
      window.location.href = '/';
    console.log("logout");
      
    } 


return(
    <MenuItem onClick={submitHandler}>Log Out</MenuItem>
)
    

  



}

export default LogOut;