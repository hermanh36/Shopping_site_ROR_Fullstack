import styled from "styled-components";
import { Box, Button, Container, Grid, Typography, Dialog, IconButton, SelectChangeEvent, MenuItem} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { data } from "../../data";
import { getProductsSelector } from "../../Redux/toolkit/product.slice";
import ProductCard from "../Products/ProductCard";
import Footer from "../public/Footer/Footer";
import Cart from "../Cart/Cart"
import { Colors } from "../../styles/theme";

type Props={
  showAllProductPage:boolean 
  setShowAllProductPage: Function
}
export default function AllProducts(props:Props) {

  const initialproducts = useSelector(getProductsSelector);
  const [products, setProducts] = useState(initialproducts);
  const [sort, setSort]=useState("");

  useEffect(()=>{
    if(initialproducts){
      setProducts(initialproducts)
    }
  },[initialproducts])

//   useEffect(()=>{

// setProducts(useSelector(getProductsSelector));

//   },[getProductsSelector])


  // const products = useSelector(getProductsSelector);

  // useEffect(() => {
  //   const sortProducts = type => {
  //     const types = {
  //       id: 'id',
  //       priceasc: 'asc',
  //       pricedesc: 'desc',
  //     };
  //     const sortProperty = types[type];
  //     const sorted = [...bands].sort((a, b) => b[sortProperty] - a[sortProperty]);
  //     setProducts(sorted);
  //   };

  //   sortProducts(sortType);
  // }, [sortType]);
    // const renderProducts = products.map((product) => (
    //     <Grid item key={product.id} xs={2} sm={4} md={4} display="flex" flexDirection={'column'} alignItems="center">
    
    //         <ProductCard {...product} />
          
    //     </Grid>
    //   ));
      // const renderProducts =()=>{
      //   if(sort=="asc"){
      //     products
      //     .sort((a, b)=> a.price - b.price)
      //     .map((product) => (
      //       <Grid item key={product.id} xs={2} sm={4} md={4} display="flex" flexDirection={'column'} alignItems="center">
        
      //           <ProductCard {...product} />
              
      //       </Grid>
      //     ))
      //   }

      //   if(sort=="desc"){
      //     products
      //     .sort((a,b)=> b.price - a.price)
      //     .map((product) => (
      //       <Grid item key={product.id} xs={2} sm={4} md={4} display="flex" flexDirection={'column'} alignItems="center">
        
      //           <ProductCard {...product} />
              
      //       </Grid>
      //     ))
      //   }
    
      // }
   
  // useEffect(() => {
  //   const renderProducts = products.map((product) => (
  //     <Grid item key={product.id} xs={2} sm={4} md={4} display="flex" flexDirection={'column'} alignItems="center">
  
  //         <ProductCard {...product} />
        
  //     </Grid>
  //   ));

  //   renderProducts;
  // }, [products]);


  const sortProducts=(e:string)=>{
    console.log("choose"+e);
    if(e=="asc"){
      setProducts([...products].sort((a, b)=> a.price - b.price));
    }

    if(e=="desc"){
      setProducts([...products].sort((a,b)=> b.price - a.price));

    }
    
  }

   
  const handleSelect = (event:string)=>{
    setSort(event);
    // console.log("select"+event);
    sortProducts(event);
  }
 
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
    <Dialog open={props.showAllProductPage} fullScreen>
     

      <Box
        m={1}
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <IconButton onClick={() => props.setShowAllProductPage(!props.showAllProductPage)}>
          <CloseIcon />
        </IconButton>
      </Box>

    <Container>
              <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Products</Typography>
            </Box>
            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
            <FilterContainer>
        {/* <Filter> */}
          {/* <FilterText>Filter Products:</FilterText> */}
          {/* <Select name="color" >
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select> */}
        {/* </Filter> */}
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select value={sort} onChange={
            (e)=>handleSelect(e.target.value)
          }>
            {/* <Option value="newest">Newest</Option> */}
            <Option value="asc">Price Low to High</Option>
            <Option value="desc">Price High to Low</Option>
          </Select>
        </Filter>
      </FilterContainer>
      </Box>
      <Grid        
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        sx={{ margin: `20px 4px 10px 4px` }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {renderProducts}

      </Grid>
      {/* <Footer/> */}
      {/* <Cart/> */}
    </Container>
    </Dialog>
  );
}