import express from 'express';
const app = express();
import helmet from 'helmet';
import cors from 'cors';
import {createConnection} from './dbconfig/connection.js';
import {router as blogRoutes} from './routes/blog.js';
import {validateApiKey} from './middleware/validateKey.js';

app.use(express.json());
app.use(helmet());
app.use(cors());
createConnection();
app.use('/blogs', blogRoutes);
app.use(validateApiKey);

app.listen('3000', () => {
	console.log('server is running on port 3000');
});
