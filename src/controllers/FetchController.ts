import * as express from 'express';
import fetchImage from '../services/fetchService';
import fetchBaseImage from '../services/fetchBaseImageService';
import changeFileSize from '../services/indexService';

const fetchFile = async (req: express.Request, res: express.Response): Promise<void> => {
  const name = String(req.query.name) || null;
  const height = Number(req.query.h) || null;
  const width = Number(req.query.w) || null;
  let result = 'No file found';

  if (name && height && width) {
    await changeFileSize(height, width, name);
    result = await fetchImage(height, width, name);
  } else if (name && height === null && width === null) {
    result = await fetchBaseImage(name);
  }

  const test: number = result.indexOf('\\');
  if (test > -1) {
    res.sendFile(result);
  } else {
    res.send(result);
  }
};

export default fetchFile;
