import { ProcessEnvOptions } from 'child_process';
import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import forbidenRouter from './routes/forbidenRoutes';
import apiRouter from './routes/apiRoute';

const app: Express = express();
const PORT: string | number | ProcessEnvOptions = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use('/', forbidenRouter)
app.use('/api', apiRouter)

app.listen(PORT, () => {
  console.log(`Server listening on port:${PORT}`)
})

