const express = require('express'); // Import express module

const app = express(); // Create an instance of express

app.use(express.json()); // Use express.json middleware to parse JSON requests

// Mock data for products

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 }
];

// GET /products endpoint to retrieve all products

app.get('/products', (req, res) => {
  res.json(products);
});

// GET /products/:id endpoint to retrieve a single product by ID

app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id); // Convert id to integer

  const product = products.find(p => p.id === id); // Find product with matching ID

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});