import * as express from 'express';
import fetchImage from '../services/fetchService';
import fetchBaseImage from '../services/fetchBaseImageService';

const fetchFile = async (req: express.Request, res: express.Response): Promise<void> => {
  const name = String(req.query.name);
  const height = String(req.query.h);
  const width = String(req.query.w);
  let result = 'No file found';
  
  if (name && height && width) {
    result = await fetchImage(name, width, height);
    // return res.sendFile(result);
  } else if (name && height === 'undefined' && width === 'undefined') {
    result = await fetchBaseImage(name);
    console.log('here2', result);
  }

  const test: number = result.indexOf('\\');
  if (test > -1) {
    console.log(result);
    res.sendFile(result);
  } else {
    res.send(result);
  }
};

export default fetchFile;
