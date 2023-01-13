import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import {useState} from 'react';
export default function ProductComments() {
    const [rating, setRating] = useState<number | null | undefined>(0);
    
    const submitHandler = () => {

    }
    
    //NOTE: HIDE DELETE AFTER CONFIRMING USER !== CURRENT USER
    
    return (
        <div className='product-comments'>
            <p className='leave-review'>Leave a Review?</p>
                <Rating 
                name="size-medium" 
                sx={{alignSelf:'flex-start'}}
                value={rating} 
                onChange={(event, newValue) => {setRating(newValue);}}
                />
                <textarea className='product-detail-comments'></textarea>
                <div className='product-detail-comments-buttons-container'>
                    <Button 
                    variant="contained"
                    sx={{ alignSelf:'flex-start', marginTop: '0.2rem'}}
                    >
                        Submit
                    </Button>
                </div>
        </div>
    )
}