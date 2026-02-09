import express, { Express, Request, Response } from 'express';

const app: Express = express();
const PORT = 8000;

// Middleware
app.use(express.json());

// Root GET route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the Classroom Management Dashboard API' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
