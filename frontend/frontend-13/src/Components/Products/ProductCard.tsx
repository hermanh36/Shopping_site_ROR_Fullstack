import { useState, useEffect, useCallback } from "react";
import {
  ProductBox,
  ProductImage,
  ProductMetaWrapper,
  ProductFavButton,
  ProductActionButton,
  ProductAddToCart,
  ProductActionsWrapper
} from "../../styles/products";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { Stack, Tooltip, Typography, } from "@mui/material";
import { addToCart } from "../../Redux/toolkit/cart.slice";
import {useAppDispatch, useAppSeletor} from '../../Redux/toolkit/store.hook';
import {getProductsSelector, Product} from "../../Redux/toolkit/product.slice";
import ProductDetails from "../product_pages/product_detail";
import {useNavigate} from 'react-router-dom';

export default function ProductCard( 
  product:Product
   ) {

  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const handleOpenDetail = (showornot:boolean)=>{setShow(showornot)};


const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };

const addToCartHander = (product: Product) => dispatch(addToCart(product)); 
const navigate = useNavigate();

  return (
    <>

      <ProductBox onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage 
        src={product.image}
         />
        <ProductFavButton isfav={0}>
          <FavoriteIcon />
        </ProductFavButton>
        {showOptions ? (
          <ProductAddToCart show={showOptions} variant="contained"
          onClick={()=>addToCartHander(product)}
          >
            Add to cart
          </ProductAddToCart>
        ): undefined}
        <ProductActionsWrapper show={showOptions}>
          <Stack direction={"column"}>
            <ProductActionButton>
              <Tooltip placement="left" title="share this product">
                <ShareIcon color="primary" />
              </Tooltip>
            </ProductActionButton>


            <ProductActionButton 
            onClick={()=>{handleOpenDetail(true);
          }
            }>
        
              <Tooltip placement="left" title="Full view">
                <FitScreenIcon color="primary" />
              </Tooltip>
              


            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>

      </ProductBox>
      <ProductMetaWrapper>
        <Typography variant={"h6"} lineHeight={2}>
          {product.name}
        </Typography>
        <Typography variant={"caption"}>
          ${product.price}
        </Typography>
        </ProductMetaWrapper>
    
      
        <ProductDetails product={product} show={show} setShow={setShow}/>

    </>
  );
}