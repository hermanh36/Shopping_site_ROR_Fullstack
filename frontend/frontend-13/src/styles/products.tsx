import {styled} from "@mui/system";
import { Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { slideInBottom, slideInRight } from "../animations";
import { Colors } from "./theme";

export const ProductBox:any = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },
  
}));

export const ProductImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // width: "100%",
  width:"300px",
  height:"250px",
  background: Colors.light_gray,
  padding: '10px',
  [theme.breakpoints.down("md")]: {
    width: "80%", 
    padding: '24px',
  },
}));

export const ProductActionButton = styled(IconButton)(() => ({
  background: Colors.white,
  margin: 4,
}));


type Fav = {
  isfav: number,
}


export const ProductFavButton = styled(ProductActionButton)<Fav>(({ isfav, theme }) => ({
  color: isfav ? Colors.primary : Colors.light,  
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    right: 0,
    top: 0,
  },
}));

type ShowOptions = {
  show: boolean,
}


export const ProductAddToCart = styled(Button, {
  shouldForwardProp: (prop) => prop !== "show",
})<ShowOptions>(({ show, theme }) => ({
  width: "120px",
  fontSize: "12px",
  [theme.breakpoints.up("md")]: {
    position: "absolute",    
    bottom: "2%",
    width: "300px",
    padding: "10px 5px",
    animation:
      show &&
      `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
  background: Colors.secondary,
  opacity: 0.9,
}));

export const ProductMetaWrapper = styled(Box)(({theme}) => ({
  padding: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));


export const ProductActionsWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "show",
})<ShowOptions>(({ show, theme }) => ({ 
  [theme.breakpoints.up("md")]: {
    display: show ? 'visible' : 'none',
    position: "absolute",
    right: 0,
    top: '20%',
    animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  }
}));