import express, { Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

// Middlewares
app.use(express.json());

// Rotas iniciais (exemplo)
app.get('/', (req, res) => {
  res.json({ message: 'API funcionando!' });
});

export default app;
