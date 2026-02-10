import express, { Express, Request, Response } from 'express';
import { db } from './db/index';
import { departments, subjects } from './db/schema';

const app: Express = express();
const PORT = 8000;

// Middleware
app.use(express.json());

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

// Example: Get all subjects
app.get('/api/subjects', async (req: Request, res: Response) => {
  try {
    const allSubjects = await db.select().from(subjects);
    res.json(allSubjects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch subjects' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
