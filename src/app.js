import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import ExceptionHandler from '~/middlewares/handler/exception.handler';
import routes from '~/routes/v1';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'))
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(compression());
app.use(cors());
app.use('/v1', routes);
app.use(ExceptionHandler);

export default app;