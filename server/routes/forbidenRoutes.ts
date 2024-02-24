import { Router, NextFunction, Request, Response } from 'express';
import logger from '../middleware/logger'

const forbidenRouter: Router = Router();

forbidenRouter.route('/*')
  .get((req: Request, res: Response, next: NextFunction) => {
    logger(req, next)
    res.status(405).send(`This is a single POST endpoint server.\nOther methods forbidden.`)
  })
  .put((req: Request, res: Response, next: NextFunction) => {
    logger(req, next)
    res.status(405).send(`This is a single POST endpoint server.\nOther methods forbidden.`)
  })
  .delete((req: Request, res: Response, next: NextFunction) => {
    logger(req, next)
    res.status(405).send(`This is a single POST endpoint server.\nOther methods forbidden.`)
  })

export default forbidenRouter