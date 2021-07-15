// The main Application entry point
import express from 'express';
import parseText from '../services/indexService';
const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  const r = parseText('Hi');
  res.send(r);
});

export default indexRouter;
