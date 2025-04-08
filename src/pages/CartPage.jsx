// pages/CartPage.jsx
import { useSelector } from 'react-redux';
import Cart from '../components/Cart';
import { Container, Typography, Box } from '@mui/material';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <Container maxWidth="md" sx={{ pt: 8, pb: 4 }}>
      <Typography 
        variant="h3" 
        component="h1" 
        sx={{ 
          mb: 3,
          fontWeight: 'bold',
          textAlign: 'center'
        }}
      >
        Your Shopping Cart
      </Typography>

      {/* Display Cart Items */}
      <Cart />

      {/* Display Total Price */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
          Total Price: ${totalPrice.toFixed(2)}
        </Typography>
      </Box>

      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <button variant="contained" color="inherit" >
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
        Proceed To Checkout
        </Typography>
        </button>
      </Box>
    </Container>
  );
};

export default CartPage;