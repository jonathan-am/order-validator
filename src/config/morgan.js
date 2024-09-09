import morgan from 'morgan';
import logger from './logger';

export const morganHTTP = morgan('combined');

export default morganHTTP;