import { Router, NextFunction, Request, Response } from 'express';
import logger from '../middleware/logger'
import compute from '../api/computeModule';

const apiRouter: Router = Router();

apiRouter.route('/')
  .post((req: Request, res: Response, next: NextFunction) => {
    logger(req, next)
    req.body
      ? res.status(200).send(`Accepted. Await data.\n`)
      : res.status(400).send("No data to compute.");

    const data = req.body
    const day = new Date(`${data.time}`).toLocaleDateString('en-GB', { weekday: 'long' });
    const time = new Date(`${data.time}`).getHours()

    const result = compute(~~data.cartValue, ~~data.distance, ~~data.items, day, time)
    console.log(result)

  })

export default apiRouter