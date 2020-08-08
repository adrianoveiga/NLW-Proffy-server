import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

// CORS - needed to connect our server with frontend and app running
//        on different addresses (ex: localhost:3000 and localhost:3333)
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
