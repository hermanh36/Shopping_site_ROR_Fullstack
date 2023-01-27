import { Button, Typography, useMediaQuery } from "@mui/material";
import {
    BannerContainer,
    BannerContent,
    BannerDescription,
    BannerImage,
    BannerShopButton,
    BannerTitle,
  } from "../../styles/banner";
  import {useState, MouseEvent} from 'react';
  import AllProducts from "../all_products/AllProducts";

export default function Banner(){

  const [showAllProductPage, setShowAllProductPage] = useState(false);
    return(
        
        <BannerContainer >
        <BannerImage src="/images/shop.png" />
        <BannerContent>
          <Typography variant="h6">Big sale!</Typography>
          <BannerTitle variant="h2">
            New Come
          </BannerTitle>
  
          <BannerDescription variant="subtitle1">
            Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
            tempor incididunt ut labore et dolore magna
          </BannerDescription>
  
          <BannerShopButton color="primary" 
          // href="/products"
          onClick={()=>{setShowAllProductPage(true)}}
          >Shop Now</BannerShopButton>
        </BannerContent>
        <AllProducts showAllProductPage={showAllProductPage} setShowAllProductPage={setShowAllProductPage} />
      </BannerContainer>
    )
}