import React, { useState, useEffect } from "react";
import { addProduct, Product } from "../../Redux/toolkit/product.slice";
import { useAppDispatch } from "../../Redux/toolkit/store.hook";
import {
  Typography,
  Box,
  Dialog,
  IconButton,
  Paper
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  show: boolean;
  handleShow:Function;
}

export default function UploadPage(prop:Props){
  const dispatch = useAppDispatch();

  const [product, setProduct] = useState<
  Product
  >({
    id: 0,
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
    }
  };

  useEffect(() => {
    if (productImage) {
      setImageURL(URL.createObjectURL(productImage));
    }
  }, [productImage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    product.image = imageURL;
    // dispatch(addProduct(product));
    dispatch(addProduct({ ...product }));
  };

  const { id, name, price, description, image } = product;

  const paperStyle={padding :20,height:'80vh',width:500, margin:"50px auto"}
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
                type="number"
                placeholder="id"
                name="id"
                value={id}
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

              <button className="upload-product-btn" type="submit">
                Upload Products
              </button>
            </div>
          </form>
        </Box>
      </div>
      </Paper>
    </Dialog>
  );
};

