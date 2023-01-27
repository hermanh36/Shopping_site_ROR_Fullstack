// import { useTheme } from "@mui/system";
import {
    Box,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListItem,
    Stack,
    Typography,
    Link,
    Grid,
    Badge,
    Menu,
    MenuItem,
    Button,
  } from "@mui/material";
  import {
    // AppbarActionIcons,
    AppbarContainer,
    AppbarHeader,
    MyList,
  } from "../../../styles/navbar";
  import {Colors} from "../../../styles/theme";
  import PersonIcon from "@mui/icons-material/Person";
  import FavoriteIcon from "@mui/icons-material/Favorite";
  import SearchIcon from "@mui/icons-material/Search";
  import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
  import { OpenCart, getCartStatus } from "../../../Redux/toolkit/showcart.slice";
  import { useAppDispatch, useAppSeletor } from "../../../Redux/toolkit/store.hook";
import { getCartItemAmount } from "../../../Redux/toolkit/cart.slice";
import {getCurrenntUser} from "../../../Redux/toolkit/user.slice";
import {useState, MouseEvent} from 'react';
import UploadPage from "../../UploadProduct/UploadPage";
import Search from "./Search";
import  configureStore from '../../../Redux/store/store'


function NavBar(){
  const dispatch = useAppDispatch();
  const show = useAppSeletor(getCartStatus);
  const CurrentUserName = useAppSeletor(getCurrenntUser).username;

  const handleOpenCart = (showornot:boolean)=>{dispatch(OpenCart(showornot))};
  const ItemAmount = useAppSeletor(getCartItemAmount);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
const [showUploadPage, setShowUploadPage] = useState(false);
const [showSearchBox, setShowSearchBox] = useState(false);

return(
  <>
<AppbarContainer>
      <AppbarHeader variant="h4">Happy Shop</AppbarHeader>
      <MyList >
    
      
      <ListItem button component="a" href="/" >
        <ListItemText secondary="Home"/>
        </ListItem>
       

       
        <ListItem button component="a" href="/" >
        <ListItemText secondary="Categories" />
        </ListItem>
       
        <ListItem button component="a" href="/">
        <ListItemText secondary="Products" />   
        </ListItem>


        <ListItem button component="a" href="/">
        <ListItemText secondary="About us" />
        </ListItem>
    
    
        <ListItem button onClick={() => setShowSearchBox(true)}>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
         </ListItem>
         <Search showSearchBox={showSearchBox} setShowSearchBox={setShowSearchBox}/>
         <Divider orientation="vertical" flexItem />

        <ListItem button
          sx={{
            justifyContent: "center",
          }}
          onClick={()=>handleOpenCart(show)}
          
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: Colors.secondary,
            }}
          >
            <Badge color="secondary" badgeContent={ItemAmount}>
            <ShoppingCartIcon />
            </Badge>
          </ListItemIcon>
        </ListItem >
        <Divider orientation="vertical" flexItem />

        <ListItem button          
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color:  Colors.secondary,
            }}
          >
            <FavoriteIcon />
          </ListItemIcon>
        </ListItem>
        <Divider orientation="vertical" flexItem />

        <ListItem button
       // component="a" href="/login"
          sx={{
            justifyContent: "center",
          }}
   
        >
        <Button
               onClick={handleMenu}
               aria-controls={open ? 'basic-menu' : undefined}
               aria-haspopup="true"
               aria-expanded={open ? 'true' : undefined}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: Colors.secondary,
            }}
        
          >
            <PersonIcon />
          </ListItemIcon>
          </Button>
          </ListItem>

{CurrentUserName?( <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        
        <MenuItem onClick={()=>{handleClose();
        setShowUploadPage(true)}}>Upload Product</MenuItem>

           <MenuItem onClick={handleClose} component="a" href="/login">{CurrentUserName}</MenuItem>
           <MenuItem onClick={handleClose} component="a" href="/login">Log Out</MenuItem>

      </Menu>

):( <Menu
  anchorEl={anchorEl}
  open={open}
  onClose={handleClose}
  MenuListProps={{
    'aria-labelledby': 'basic-button',
  }}
>
  
  <MenuItem onClick={()=>{handleClose();
  setShowUploadPage(true)}}>Upload Product</MenuItem>
  <MenuItem onClick={handleClose} component="a" href="/login">My account</MenuItem> 
</Menu>

)} 

        <Divider orientation="vertical" flexItem />
     
          </MyList>
       
    </AppbarContainer>
    <UploadPage show={showUploadPage} handleShow={setShowUploadPage}/>
    </>
);

}

export default NavBar;