import app  from"./app";
import logger from "./config/logger";
import { initProducer } from "./config/producer.config";

initProducer();

app.listen(3001, logger.info('Server iniciado na porta 3001!'))