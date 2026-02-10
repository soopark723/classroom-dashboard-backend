import express, { Express, Request, Response } from 'express';
import { db } from './db/index';
import { users, subjects, classes } from './db/schema';

const app: Express = express();
const PORT = 8000;

// Middleware
app.use(express.json());

// Root GET route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the Classroom Management Dashboard API' });
});

// Example: Get all users
app.get('/api/users', async (req: Request, res: Response) => {
  try {
    const allUsers = await db.select().from(users);
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
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
