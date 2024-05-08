import { getAllSales, createSale } from '../../../repository/SalesRepo';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const sales = await getAllSales();
    res.status(200).json(sales);
  } else if (req.method === 'POST') {
    const sale = await createSale(req.body);
    res.status(201).json(sale);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
