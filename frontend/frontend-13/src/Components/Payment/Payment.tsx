import { useState, FormEvent, ChangeEvent } from 'react';
// import { CardElement, injectStripe, ReactStripElements } from '@stripe/react-stripe-js';
import { CardElement, useStripe, useElements, PaymentElement, CardNumberElement, CardElementProps } from "@stripe/react-stripe-js";
import CloseIcon from "@mui/icons-material/Close";
import {Button, TextField, Box, Dialog, IconButton,  Typography} from "@mui/material";
import {CreateTokenCardData, StripeCardNumberElement} from '@stripe/stripe-js';
import { Colors } from "../../styles/theme";


 interface IFormProps extends CardElementProps{};
  // interface IFromState{ };
  interface PaymentProp{
    amount?: Number,
    show: boolean,
    setShow: Function
  }

 

  const Payment = ({amount, show, setShow}: PaymentProp) => {
    const [isProcessingPayment, setIsProcessingPayment ] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | undefined>();
    const elements = useElements();
    const stripe = useStripe();

    const handleOpenPayment = (showornot: boolean) => {
      setShow(!showornot);
    };

    interface IFromState{ 
      displayName: string,
      email: string,
      amount:string

    };
    const defaultFormFields = {
      displayName: '',
      email: '',
      address1:'',
      address2:'',
      city:'',
      state:'',
      zipcode:''
      // amount:''
    }
    const [formFields, setFormFields] = useState(defaultFormFields);

    const { displayName, email,address1, address2, city, state, zipcode
      // amount
     } = formFields;


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target
      setFormFields({...formFields, [name]: value})
    }

    
    const paymentHandler =  async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("checkout");
        try{
          const cardTokenData: CreateTokenCardData = {
            'name': displayName,
            'address_line1': address1,
            'address_line2': address2,
            'address_city': city,
            'address_state': state,
            // 'address_zip': zipcode,
            'address_country': 'US',
            'currency': 'USD'
        };
       
if(stripe && elements){
  const cardelement = elements.getElement(CardElement);
 
  if(cardelement){
    const token = await stripe.createToken(cardelement, cardTokenData);
    console.log(token);
  }
}
         
        } catch(e){
throw e;
        };
    }


    const cardStyle = {
      style: {
        base: {
          color: "#32325d",
          fontFamily: 'Arial, sans-serif',
          fontSmoothing: "antialiased",
          fontSize: "16px",
          "::placeholder": {
            color: "#32325d"
          }
        },
        invalid: {
          fontFamily: 'Arial, sans-serif',
          color: "#fa755a",
          iconColor: "#fa755a"
        }
      }
    };

    return (
      <>
        <Dialog 
     // open={false} 
      open={show}
      PaperProps={{
        sx: {
          width: 500,
          background: Colors.light_gray,
          borderRadius: 0,
        },
      }}>

<Box
          m={1}
          //margin
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <IconButton onClick={() => handleOpenPayment(show)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
            sx={{ p: 4 }}
            display="flex"
            justifyContent={"center"}
            flexDirection="column"
            alignItems={"center"}
          >

     <Typography  
    //  sx={{ mt: 2 }} 
     variant="h4" color={Colors.primary}>Payment Information</Typography>


<Box component='form' onSubmit={paymentHandler} sx={{ p: 4 }}
            // display="flex"
            justifyContent={"center"}
            flexDirection="column"
            alignItems={"center"}>
     {/* <form> */}
          {/* Collect More User Info */}
          <TextField
            label="Name"
            type="text"
            required
            name="displayName"
            value={displayName}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            type="email"
            required
            name="email"
            value={email}
            onChange={handleChange}
          />
          <Box>
           <TextField
            label="Address 1"
            type="text"
            required
            name="address1"
            value={address1}
            onChange={handleChange}
            variant="standard"
          />
          <TextField
            label="Address2"
            type="text"
            name="address2"
            value={address2}
            onChange={handleChange}  
            variant="standard"
          />
            <TextField
            label="City"
            type="text"
            required
            name="city"
            value={city}
            onChange={handleChange}
            variant="standard"
          />
          <TextField
            label="State"
            type="text"
            name="state"
            value={state}
            onChange={handleChange}
            variant="standard"
          />
            <TextField
            label="zipcode"
            type="text"
            name="zipcode"
            value={zipcode}
            onChange={handleChange}
            variant="standard"
          />
          </Box>
          {/* <TextField
            label="Amount"
            type="text"
            required
            name="amount"
            value={amount}
            onChange={handleChange}
            /> */}
<div className='payment-form '>
            <CardElement className='card-element' options={cardStyle}/>


          <Button
          type='submit' 
          // sx={{ mt: -1 }}
           variant="contained" style={{maxWidth: '100%', minWidth: '100%', borderRadius: '4px'  }}
          >
            <> Pay ${amount}</>
           
          </Button>
          </div>
        {/* </form> */}
        </Box>
</Box>
        </Dialog>

      </>
    )
  };

  export default Payment;