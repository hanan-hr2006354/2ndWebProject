import { getUserById, updateUser, deleteUser } from '../../../repository/UserRepo';

export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === 'GET') {
    const user = await getUserById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } else if (req.method === 'PUT') {
    const user = await updateUser(id, req.body);
    res.status(200).json(user);
  } else if (req.method === 'DELETE') {
    await deleteUser(id);
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
