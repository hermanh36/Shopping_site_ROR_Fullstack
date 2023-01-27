import styled from "styled-components";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { data } from "../../data";
import { getProductsSelector } from "../../Redux/toolkit/product.slice";
import ProductCard from "../Products/ProductCard";
import Footer from "../public/Footer/Footer";
import Cart from "../Cart/Cart"
import { Colors } from "../../styles/theme";

export default function AllProducts() {

  const products = useSelector(getProductsSelector);

  const renderProducts = products.map((product) => (
    <Grid item key={product.id} xs={2} sm={4} md={4} display="flex" flexDirection={'column'} alignItems="center">

        <ProductCard {...product} />
      
    </Grid>
  ));

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;

`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  color: Colors.secondary,
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

  return (
    <Container>
              <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Products</Typography>
            </Box>
            <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" >
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price Low to High</Option>
            <Option value="desc">Price High to Low</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Grid        
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        sx={{ margin: `20px 4px 10px 4px` }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {renderProducts}
      </Grid>
      <Footer/>
      <Cart/>
    </Container>
  );
}