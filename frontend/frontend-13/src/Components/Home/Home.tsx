import { useState } from 'react';
import { Typography, Link, Container,Box } from "@mui/material";
import Banner from "./Banner";
import Promotions from "./Promotions";
import Products from "../Products/Products";
import Footer from "./Footer";
import Cart from "../Cart/Cart";
import UploadPage from '../UploadProduct/UploadPage';

export type CartItemType = {
  id: number;
  name: string;
  price: number;
  // category: string;
  description: string;
  image: string;
  amount: number;
};


function Home() {


  return (
    <div>
       <Promotions/>
      <Banner/>
      <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Trending Products</Typography>
            </Box>
      <Products/>
      <Footer/>
      <Cart/>
    </div>
  );
}

export default Home;