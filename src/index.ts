import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import express, { Express, Request, Response } from 'express';
import { db } from './db/index';
import { departments, subjects } from './db/schema';
import subjectsRouter from './routes/subjects';
import cors from "cors";

const app: Express = express();
const PORT = 8000;

app.use(cors({
    origin: process.env.FRONTEND_URL || (process.env.NODE_ENV !== 'production' ? true : false),
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// Middleware
app.use(express.json());

app.use('/api/subjects', subjectsRouter)

// Root GET route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the Classroom Management Dashboard API' });
});

// Example: Get all departments
app.get('/api/departments', async (req: Request, res: Response) => {
  try {
    const allDepartments = await db.select().from(departments);
    res.json(allDepartments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch departments' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});