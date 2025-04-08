// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Container } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './pages/Categories';
import CartPage from './pages/CartPage';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: '#f8fafc',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm,'searchTerm')
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Container maxWidth="xl" sx={{ mt: 8 }}>
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/products" element={<Products searchTerm={searchTerm} />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;