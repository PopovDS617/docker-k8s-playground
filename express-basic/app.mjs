import express from 'express';

import { connectToDatabase } from './helpers.mjs';

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ data: 'valuable data' });
});

await connectToDatabase();

app.listen(3000, () => console.log('app is running'));
