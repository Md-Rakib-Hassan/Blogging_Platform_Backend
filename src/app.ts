import express, { Application, Request, Response } from 'express';
const app: Application = express();

app.use(express.json());

app.get('/health', (req:Request, res:Response) => {
    res.send('Welcome Server is running!');
})

export default app;
