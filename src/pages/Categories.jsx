import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/slices/categorySlice';
import { Container, Typography, CircularProgress, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';

const Categories = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Container maxWidth="lg" sx={{ pt: 8, pb: 4 }}>
      <Typography 
        variant="h3" 
        component="h1" 
        sx={{ 
          mb: 4,
          fontWeight: 'bold',
          textAlign: 'center'
        }}
      >
        Categories
      </Typography>
      {status === 'loading' ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {items.map((cat) => (
            <Grid item key={cat.id} xs={12} sm={6} md={4}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 3
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={cat.image || 'https://via.placeholder.com/400'}
                  alt={cat.name}
                  sx={{
                    objectFit: 'fit'
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" align="center">
                    {cat.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Categories;
