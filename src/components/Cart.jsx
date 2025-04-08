// components/Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item));
  };

  return (
    <Grid container spacing={3}>
      {cartItems.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4}>
          <Card sx={{ m: 2 }}>
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body1">${item.price}</Typography>
              <Typography variant="body2">Quantity: {item.quantity}</Typography>
              <Button 
                variant="contained" 
                color="secondary" 
                onClick={() => handleDecrement(item)}
                sx={{ mt: 2, mr: 1 }}
              >
                -
              </Button>
              <Button 
                variant="contained" 
                color="secondary" 
                onClick={() => handleIncrement(item)}
                sx={{ mt: 2, mr: 1 }}
              >
                +
              </Button>
              <Button 
                variant="contained" 
                color="secondary" 
                onClick={() => handleRemove(item)}
                sx={{ mt: 2 }}
              >
                Remove
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cart;