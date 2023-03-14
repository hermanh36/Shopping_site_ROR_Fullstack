import React, { useState, useEffect } from "react";
import { addProduct, Product, addProductAsync } from "../../Redux/toolkit/product.slice";
import { useAppDispatch } from "../../Redux/toolkit/store.hook";
import {
  Typography,
  Box,
  Dialog,
  IconButton,
  Paper,
  Alert,
  Collapse,
  Button
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import * as productUtil from '../../api/products_api'

type Props = {
  show: boolean;
  handleShow:Function;
}

export default function UploadPage(prop:Props){
  const dispatch = useAppDispatch();

  const [product, setProduct] = useState
  <Product>
  ({
    id:0,
    seller_id: "",
    name: "",
    price: 0,
    description: "",
    image: "",
  });
  const [productImage, setProductImage] = useState(null);
  const [imageURL, setImageURL] = useState("");

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setProduct((prev) => {
      (prev as any)[name] = value;
      const newValue = { ...prev };
      return newValue;
    });

  const imageUploadHandler = (e: any) => {
    e.preventDefault();
    if (e.target.files) {
      setProductImage(e.target.files[0]);
      // console.log(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (productImage) {
      setImageURL(URL.createObjectURL(productImage));
       URL.revokeObjectURL(productImage);
      // setImageURL(productImage);
    }
  }, [productImage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    product.image = imageURL;
    // dispatch(addProduct(product));
    // dispatch(addProduct({ ...product }));
    dispatch(addProductAsync(product));
    setOpenSucess(true);  
    setProduct({
      id:0,
      seller_id: "",
      name: "",
      price: 0,
      description: "",
      image: "",
    });
  };

  const { 
    seller_id, 
    name, price, description, image } = product;

  const paperStyle={padding :20,height:'80vh',width:500, margin:"50px auto"};

  const [openSucess, setOpenSucess] = React.useState(false);

  return (
    <Dialog open={prop.show} fullScreen>
     

      <Box
        m={1}
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <IconButton onClick={() => prop.handleShow(!prop.show)}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      <Paper elevation={10} style={paperStyle}>
      <div className="product-upload-container">
        <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
          <Typography variant="h4">Upload Products</Typography>
        </Box>
        <Box>
          <form className="product-upload-form" onSubmit={handleSubmit}>
            <div>
              <Typography variant="subtitle1"> Product ID: </Typography>{" "}
              <input
                type="text"
                placeholder="id"
                name="seller_id"
                value={seller_id}
                onChange={handleChange}
              />{" "}
            </div>
            <div>
            <Typography variant="subtitle1">Product Name: </Typography>{" "}
              <input
                type="text"
                placeholder="product name"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div>
            <Typography variant="subtitle1">Product Price: </Typography>{" "}
              <input
                type="number"
                placeholder="price"
                name="price"
                value={price}
                onChange={handleChange}
              />
            </div>
            <div>
              <Typography variant="subtitle1">Description: </Typography>{" "}
              <input
                type="text"
                placeholder="description"
                name="description"
                value={description}
                onChange={handleChange}
              />
            </div>
            <div className="upload-picture-container">
            <Typography variant="subtitle1">Upload Picture:</Typography>
            <div className="button_wrap">
              <input
                type="file"
                accept="image/*"
                placeholder="image"
                name="image"
                onChange={(e) => imageUploadHandler(e)}
              />
              </div>

              <Button className="upload-product-btn" type="submit" 
              disabled={openSucess}>
                Upload Products
              </Button>


              <Box sx={{ width: '100%' }}>
      <Collapse in={openSucess}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenSucess(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Upload Successful!
        </Alert>
      </Collapse>
    </Box>
            </div>
          </form>
        </Box>
      </div>
      </Paper>
    </Dialog>
  );
};

