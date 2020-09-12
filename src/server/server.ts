import 'dotenv/config';
import * as express from 'express';
import apiRouter from './routes';
import * as db from './db';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cors from 'cors';

const app = express();

app.use(express.static('public'));
app.use(apiRouter);

// Call midlewares
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
const startServer = async () => {
  app.listen(port, () =>
    console.log(`Server listening @: http://localhost${port}`)
  );
};
(async () => {
  await db.connectDB();
  await startServer();
})();
