import { getSaleById, updateSale, deleteSale } from '../../../repository/SalesRepo';

export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === 'GET') {
    const sale = await getSaleById(id);
    if (sale) {
      res.status(200).json(sale);
    } else {
      res.status(404).json({ error: 'Sale not found' });
    }
  } else if (req.method === 'PUT') {
    const sale = await updateSale(id, req.body);
    res.status(200).json(sale);
  } else if (req.method === 'DELETE') {
    await deleteSale(id);
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
