/* eslint-disable prettier/prettier */
import * as express from 'express';
import {changeFileSize} from '../services/indexService';

const imageController = async (req: express.Request, res: express.Response): Promise<void> => {
  const {w, h} = req.query;
  
  await changeFileSize(h ,w);
  res.send('successful');
};

export default imageController;
