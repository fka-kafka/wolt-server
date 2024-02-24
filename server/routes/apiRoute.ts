import { Router, NextFunction, Request, Response } from 'express';
import logger from '../middleware/logger'

const apiRouter: Router = Router();

apiRouter.route('/')
  .post((req: Request, res: Response, next: NextFunction) => {
    logger(req, next)
    req.body
      ? res.status(200).send(`Accepted. Await data.\n`)
      : res.status(400).send("No data to compute.")
  })

export default apiRouter