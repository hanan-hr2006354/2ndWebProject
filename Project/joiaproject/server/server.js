import express from 'express';
import users from './data/users.json';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: "http://127.0.0.1:5501"
}));

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
