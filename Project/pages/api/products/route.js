// pages/api/product/index.js

import { getAllProducts, createProduct } from '../repo/ProductRepo';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const products = await getAllProducts();
    res.status(200).json(products);
  } else if (req.method === 'POST') {
    const product = await createProduct(req.body);
    res.status(201).json(product);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
