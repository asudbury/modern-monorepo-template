import express from 'express';
import { z } from 'zod';
import { sum } from '@repo/utils';

const app = express();
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/sum', (req, res) => {
  const schema = z.object({ a: z.string(), b: z.string() });
  const result = schema.safeParse(req.query);
  if (!result.success) {
    return res.status(400).json({ error: 'Invalid query params' });
  }
  const { a, b } = result.data;
  res.json({ result: sum(Number(a), Number(b)) });
});

app.use((_req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
