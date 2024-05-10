// pages/api/product/[id].js

import { getProductById, updateProduct, deleteProduct } from '../repo/ProductRepo';

export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === 'GET') {
    const product = await getProductById(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } else if (req.method === 'PUT') {
    const product = await updateProduct(id, req.body);
    res.status(200).json(product);
  } else if (req.method === 'DELETE') {
    await deleteProduct(id);
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
