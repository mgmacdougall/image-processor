import * as express from 'express';
import fetchImage from '../services/fetchService';

const fetchFile = async (req: express.Request, res: express.Response): Promise<void> => {
  const name = String(req.query.name) || null;
  const height = String(req.query.h) || null;
  const width = String(req.query.w) || null;
  let result: string;
  if (name && height && width) {
    result = await fetchImage(name, width, height);
    console.log(result)
    res.send(result);
  }
};

export default fetchFile;
