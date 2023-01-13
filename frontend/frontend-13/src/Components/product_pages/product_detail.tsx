import Comment from "./product_comments";
import Button from "@mui/material/Button";
import { Product } from "../../Redux/toolkit/product.slice";
import { Dialog, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch, useAppSeletor } from "../../Redux/toolkit/store.hook";
import { useParams } from "react-router-dom";
import { getProductsSelector } from "../../Redux/toolkit/product.slice";
import { useSelector } from "react-redux";
import { addToCart } from "../../Redux/toolkit/cart.slice";

type DetailPropsType={
    product:Product,
    show: boolean,
    setShow: Function
}

export default function ProductDetails(
    {product, show, setShow}: DetailPropsType
) {

  const handleOpenCart = (showornot: boolean) => {
    setShow(!showornot);
  };
  const reviewSubmitHandler = () => {};

  const allproducts = useSelector(getProductsSelector);
  const { productId } = useParams();
  // const detail = allproducts.find(prod=> prod.id ===productId);
  const addToCartHander = (product: Product) => dispatch(addToCart(product)); 
  const dispatch = useAppDispatch();

  return (
    <>
      <Dialog 
     // open={false} 
      open={show} 
      fullScreen>
        <Box
          m={1}
          //margin
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <IconButton onClick={() => handleOpenCart(show)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <div className="product-detail-page">
          <div className="product-detail-container">
            <div className="product-detail-thumbnail">
              <img
                 src={product.image}
                alt=""
              />
            </div>
            <div className="product-details">
              <div className="product-detail-title-container">
                <p className="product-detail-title">{product.name}</p>
              </div>
              <div className="product-details-description-flex">
                <div className="product-detail-description-container">
                  <p className="product-detail-description">
                    Description: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div className="product-detail-price-container">
                  <p className="product-detail-price">
                
                    {product.price}
                  </p>
                </div>
              </div>
              <div>
                <Button variant="contained" sx={{ marginRight: "0.2rem" }}
                 onClick={()=>addToCartHander(product)}
                >
                  Add to Cart
                </Button>
                <Button sx={{ marginLeft: "0.2rem" }} variant="contained">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
          <div>
            <p className="product-detail-reviews">Reviews</p>
            <p>No Reviews Yet</p>
            <Comment />
          </div>
          <div className="product-detail-footer"></div>
        </div>
      </Dialog>
    </>
  );
}
