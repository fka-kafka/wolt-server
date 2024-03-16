import moment, { Moment } from "moment";
import { v4 as uuidv4 } from 'uuid';
import { appendFile } from 'fs';
import { join } from "path";
import { NextFunction } from "express";

const logger = (req: any, next: NextFunction): void => {
  const now: string | Moment = moment().format('ddd MMM Do,HH:mm:SS (ZZ)')
  const uuid: string = uuidv4()
  const filename: string = join(process.cwd(), 'server', 'logs', 'logs.txt')
  const log: string = `${uuid} : Server accessed on ${now.split(',')[0]} at ${now.split(',')[1]}. Method: ${req.method}\n`

  appendFile(filename, log, 'utf8', () => console.log('Check logs'))
  next();
}

export default logger