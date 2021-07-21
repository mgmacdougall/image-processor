/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import * as express from 'express';
import {changeFileSize} from '../services/indexService';

const imageController = async (req: express.Request, res: express.Response): Promise<void> => {
  let result = false;
  if(req.query && req.query.w && req.query.h){
    const w = (req.query as any).w;
    const h = (req.query as any).h;
    const name = (req.query as any).name;
    result = await changeFileSize(h, w, name);
  }
  res.send('successful'+ " " + result);
};

export default imageController;
