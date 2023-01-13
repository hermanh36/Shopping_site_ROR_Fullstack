import { Button, Typography, useMediaQuery } from "@mui/material";
import {
    BannerContainer,
    BannerContent,
    BannerDescription,
    BannerImage,
    BannerShopButton,
    BannerTitle,
  } from "../../styles/banner";

export default function Banner(){
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
  
          <BannerShopButton color="primary">Shop Now</BannerShopButton>
        </BannerContent>
      </BannerContainer>
    )
}