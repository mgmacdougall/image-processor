// The main Application entry point
import express from 'express';
import indexRouter from './routes/indexRoute';

const PORT = 5555;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

export default app;
