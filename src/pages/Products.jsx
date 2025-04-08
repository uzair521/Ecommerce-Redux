// pages/Products.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice';
import { addToCart } from '../redux/slices/cartSlice'; // Import the addToCart action
import ProductList from '../components/ProductList';
import { Container, Typography, CircularProgress, Alert } from '@mui/material';

const Products = ({ searchTerm }) => {
  const dispatch = useDispatch();
  const { items: products, loading, error } = useSelector((state) => state.products);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch the addToCart action
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
      <CircularProgress />
    </Container>
  );

  if (error) return (
    <Container sx={{ mt: 4 }}>
      <Alert severity="error" sx={{ maxWidth: '600px', mx: 'auto' }}>
        Error: {error}
      </Alert>
    </Container>
  );

  return (
    <Container maxWidth="lg" sx={{ pt: 8, pb: 4 }}>
      <Typography variant="h3" component="h1" sx={{ 
        mb: 4,
        fontWeight: 'bold',
        textAlign: 'center'
      }}>
        Our Products
      </Typography>
      <ProductList products={filteredProducts} addToCart={handleAddToCart} />
    </Container>
  );
};

export default Products;