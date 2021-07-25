// The main Application entry point
import express from 'express';
import imageController from '../controllers/ImageController';
import fetchController from '../controllers/FetchController';
const indexRouter = express.Router();

// Fetch image path
indexRouter.get('/', fetchController);

// Write Image path
indexRouter.post('/', imageController);

export default indexRouter;
