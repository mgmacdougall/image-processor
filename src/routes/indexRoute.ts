// The main Application entry point
import express from 'express';
import indexTextController from '../controllers/indexController';
const indexRouter = express.Router();

indexRouter.get('/', indexTextController);

export default indexRouter;
