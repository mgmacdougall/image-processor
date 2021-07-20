import * as express from 'express';
import parseText from '../services/indexService';

const indexTextController = (
  req: express.Request,
  res: express.Response
): void => {
  const r: string = parseText('Hi');
  res.send(r);
};

export default indexTextController;
