import { Router, NextFunction, Request, Response } from 'express';
import logger from '../middleware/accessLogger'
import compute from '../api/computeModule';

const apiRouter: Router = Router();

apiRouter.route('/')
  .post((req: Request, res: Response, next: NextFunction) => {
    logger(req, next)
    if (req.body) {
      const data = req.body
      const day = new Date(`${data.time}`).toLocaleDateString('en-GB', { weekday: 'long' });
      const time = new Date(`${data.time}`).getHours()

      const result = compute(~~data.cartValue, ~~data.distance, ~~data.items, day, time)
      result !== undefined
        ? (console.log(result), res.status(200).json({"deliveryFee": result}))
        : res.status(500).send("Internal server error.");

    } else res.status(400).send("No data to compute.");
  })

export default apiRouter