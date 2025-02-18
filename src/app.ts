import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import router from './app/routes';
import notFound from './app/middlewares/notFound';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.get('/health', (req:Request, res:Response) => {
    res.send('Welcome Server is running!');
})
app.get('/', (req:Request, res:Response) => {
    res.send('Welcome Server is running!');
})
app.use('/api', router);

app.use(globalErrorHandler);
app.use(notFound);

export default app;
