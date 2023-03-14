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
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteProductAsync } from "../../Redux/toolkit/product.slice";
// import CloseIcon from "@mui/icons-material/Close"

export default function ProductCard( 
  product:Product
   ) {

  const [showOptions, setShowOptions] = useState(false);
  const dispatch:any = useAppDispatch();
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

const[imageBloburl, setImageBloburl]=useState("");



// useEffect(() => {
//   return () => {
    // const imagetoBlob= new Blob([product.image], {type:'image/png'});
    // if(imagetoBlob){
    //   setImageBlob(imagetoBlob);
    // }
    
    // URL.revokeObjectURL(imageUrl);
//     const imageBlob= new Blob([product.image], {type:'image/png'});

//     //  const imageUrl=
//      setImageBloburl(URL.createObjectURL(imageBlob));
//      console.log("effect");
//      console.log(imageBloburl);
//   };
// }, []);

const handleDelete=(product:Product)=>{
dispatch(deleteProductAsync (product));
// console.log("delete"+product.id)
}

  return (
    <>
{/* {console.log(imageUrl)} */}
      <ProductBox onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage 
        src={product.image}
        // src={URL.createObjectURL(product.image)}
        // src={imageUrl}
        // src={imageBloburl}
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

          <ProductActionButton onClick={()=>handleDelete(product)}>
              <Tooltip placement="left" title="share this product">
                <DeleteIcon  color="primary" />
              </Tooltip>
            </ProductActionButton>

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