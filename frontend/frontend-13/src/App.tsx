import './App.css';
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import SessionForm from "./Components/sessions/session_container"
import NavBar from './Components/public/NavBar/NavBar';
import { Typography, Link, Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import ProductDetails from './Components/product_pages/product_detail';



function App() {



  return (
    <>
      <div>
        <ThemeProvider theme={theme}>
          <Container
            sx={{
              background: "#fff",
            }}>
            <NavBar/>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path='/login' element={<SessionForm formType='login'/>} />
                <Route path='/signup' element={<SessionForm formType='sign_up'/>} />
                {/* <Route path='/product-detail-test' element={<ProductDetails/>} /> */}
                {/* <Route path='/products/:productId' element={<ProductDetails/>} /> */}
              </Routes>
            </BrowserRouter>
          </Container>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
