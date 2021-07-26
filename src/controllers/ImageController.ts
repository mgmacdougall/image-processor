import * as express from 'express';
import changeFileSize from '../services/indexService';

const imageController = async (req: express.Request, res: express.Response): Promise<void> => {
  const width = Number(req.query.w) || null;
  const height = Number(req.query.h) || null;
  const name = String(req.query.name) || null;
  if (width && height && name) {
    await changeFileSize(height, width, name);
  }
  res.redirect(`/?w=${width}&h=${height}&name=${name}`);
};

export default imageController;
