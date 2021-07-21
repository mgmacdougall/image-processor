// The main Application entry point
import express from 'express';
import imageController from '../controllers/ImageController';

const indexRouter = express.Router();
indexRouter.get('/', imageController);

export default indexRouter;
