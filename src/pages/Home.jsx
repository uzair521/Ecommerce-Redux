// pages/Home.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice';
import { addToCart } from '../redux/slices/cartSlice'; // Import the addToCart action
import ProductList from '../components/ProductList';
import { Container, Typography, Box, CircularProgress } from '@mui/material';

const Home = ({ searchTerm }) => {
  const dispatch = useDispatch();
  const { items: products, loading } = useSelector((state) => state.products);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch the addToCart action
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // Filter hot-selling products based on search term
  const hotSellingProducts = products
    .filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(0, 12); // Display only the first 12 products

  return (
    <Container maxWidth="lg" sx={{ pt: 8, pb: 4 }}>
      <Typography variant="h3" component="h1" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center' }}>
        Welcome to Our E-Commerce Store
      </Typography>

      <Typography variant="h4" component="h2" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center' }}>
        Hot Selling Products
      </Typography>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        <ProductList products={hotSellingProducts} addToCart={handleAddToCart} />
      )}
    </Container>
  );
};

export default Home;