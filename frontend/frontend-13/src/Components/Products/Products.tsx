import { Box, Button, Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { getProductsSelector, addProduct, addProductAsync } from "../../Redux/toolkit/product.slice";
import ProductCard from "./ProductCard";
import * as productUtil from "../../api/products_api";
import { useEffect, useState } from "react";
import * as userUtil from "../../api/user_api_util";
import { useAppDispatch } from "../../Redux/toolkit/store.hook";

export default function Products() {
  const dispatch = useAppDispatch();
  const products = useSelector(getProductsSelector);
  var productsArr: any[]=[];

useEffect(()=>{
productUtil.getProducts().then((response)=>{
  // console.log(response.data);
  Object.keys(response.data).forEach(key=> productsArr.push(response.data[key]));
  // console.log(productsArr);
  for(var i=0; i<productsArr.length; i++){
    console.log(productsArr[i].image);
    console.log(typeof(productsArr[i].image));
    dispatch(addProduct(productsArr[i]));
  }
 
});

}, [dispatch]);

 

  const renderProducts = products.map((product) => (
    <Grid item key={product.id} xs={2} sm={4} md={4} display="flex" flexDirection={'column'} alignItems="center">
        <ProductCard {...product} />  
    </Grid>
  ));
  return (
    <Container>
    <Grid        
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        sx={{ margin: `20px 4px 10px 4px` }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
}