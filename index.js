import express from 'express';
import { router } from './routes/routes.js';
import cors from 'cors';
import DBConnection from './database/db.js';

const app = express();
const PORT = 8001;

app.use(cors());

// Router middleware setup
app.use('/', router);


DBConnection();
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
