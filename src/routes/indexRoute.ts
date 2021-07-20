// The main Application entry point
import express from 'express';
import indexTextController from '../controllers/indexController';
import imageController from '../controllers/ImageController';

const indexRouter = express.Router();

indexRouter.get('/', indexTextController);

indexRouter.get('/:name', imageController);

export default indexRouter;
