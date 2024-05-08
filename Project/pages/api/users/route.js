import { getAllUsers, createUser } from '../../../repository/UserRepo';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const users = await getAllUsers();
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
