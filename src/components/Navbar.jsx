// components/Navbar.jsx
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Box
          sx={{
            width: '200px', 
            marginRight: '450px', 
            display: 'flex',
            alignItems: 'center', 
          }}
        >
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              fontWeight: 'bold',
              fontSize: '1.5rem', 
              textTransform: 'none', 
              textAlign: 'left', 
              width: '100%', 
              justifyContent: 'flex-start', 
            }}
          >
            8IRE STORE
          </Button>
        </Box>
        {/* Navigation buttons and SearchBar */}
        <Box sx={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/products">Products</Button>
          <Button color="inherit" component={Link} to="/categories">Categories</Button>
          <Button color="inherit" component={Link} to="/cart">Cart</Button>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;