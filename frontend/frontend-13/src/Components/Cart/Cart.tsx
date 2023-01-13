import {
  Drawer,
  Box,
  Avatar,
  Typography,
  Divider,
  Paper,
  Button,
} from "@mui/material";
import React from "react";
import {
  getCartProduct,
  getTotalPrice,
  removeFromCart,
  addToCart
} from "../../Redux/toolkit/cart.slice";
import { OpenCart, getCartStatus } from "../../Redux/toolkit/showcart.slice";
import { useAppDispatch, useAppSeletor } from "../../Redux/toolkit/store.hook";
import { Colors } from "../../styles/theme";
import { Product} from "../../Redux/toolkit/product.slice"
import { BannerShopButton } from "../../styles/banner";

const Cart: React.FC = () => {
  const cartProducts = useAppSeletor(getCartProduct);
  const totalPrice = useAppSeletor(getTotalPrice);
  const showCart = useAppSeletor(getCartStatus);
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = (productId: number) =>
    dispatch(removeFromCart(productId));
  const handleOpenCart = (showornot: boolean) => {
    dispatch(OpenCart(showornot));
  };

  const addToCartHander = (product: Product) => dispatch(addToCart(product)); 

  const cartContent = cartProducts.map((product) => (
    <React.Fragment key={product.id}>

      <Box
        display="flex"
        sx={{ pt: 2, pb: 2 }}
        alignItems="start">
        <Avatar src={product.image} sx={{ width: 96, height: 96, mr: 2 }} />

        <Box display="flex" 
        justifyContent={"start"} flexDirection={"column"}
        >
<Box  >
          <Typography variant="h6" display="inline" align="left" sx={{  pr: 5  }} >
            {product.name}</Typography>
          <Typography sx={{  pl: 5  }} variant="body1" display="inline">
          ${product.price} </Typography>
        </Box>

          <Typography variant="subtitle2" color={Colors.dim_grey}>
            {product.description}
          </Typography>
          <Box  
          display="flex"
        sx={{ pt: 2, pb: 2,}}
        alignItems="center"
        justifyContent="center"
        >
      < BannerShopButton  sx={{ width: 40, height: 30 }} onClick={() => handleRemoveFromCart(product.id)}>
          {" "} - {" "}
        </BannerShopButton>

        <Typography variant="body1" width={"50%"} textAlign="center"> {product.amount} </Typography>

< BannerShopButton sx={{ width: 40, height: 30 }} onClick={() => addToCartHander(product)} color="primary">
          {" "} + {" "} </BannerShopButton>
       
      </Box>

        </Box>
      </Box>

     
      <Divider variant="inset" />
    </React.Fragment>
  ));

  return (
    <>
      <Drawer
        open={showCart}
        onClose={() => handleOpenCart(showCart)}
        anchor="right"
        PaperProps={{
          sx: {
            width: 500,
            background: Colors.light_gray,
            borderRadius: 0,
          },
        }}

      >

       {cartProducts.length === 0 ? (

      <Box
            sx={{ p: 4 }}
            display="flex"
            justifyContent={"center"}
            flexDirection="column"
            alignItems={"center"}
    >

            <Typography variant="h5" color={Colors.black}>
              No items in cart.
            </Typography>
        </Box>

        ) : (
          <Box
            sx={{ p: 4 }}
            display="flex"
            justifyContent={"center"}
            flexDirection="column"
            alignItems={"center"}
          >
            <Typography variant="h3" color={Colors.black}>
              My Cart{" "}
            </Typography>
            <Typography variant="body1" color={Colors.muted}>
              Please enjoy your shop with us!
            </Typography>

            <Paper
              elevation={0}
              sx={{
                mt: 2,
                width: "90%",
                padding: 4,
              }}
            >
              {cartContent}
            </Paper>

            <Typography sx={{ mt: 4 }} variant="h5">
              Total: ${totalPrice}
            </Typography>

            <Button sx={{ mt: 4 }} variant="contained">
              Check Out
            </Button>
          </Box>
        )}
        <Button onClick={() => handleOpenCart(showCart)}>CLOSE</Button>
     </Drawer>
    </>
  );
};
export default Cart;
