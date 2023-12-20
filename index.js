import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import Connection from './database/db.js';
import Routes from './routes/Routes.js';
import path from 'path';

const __dirname = path.resolve();


dotenv.config();
const app = express();

app.use(express.static(path.join(__dirname ,"./client/build")));

app.get('*' , function(_ , res){
	res.sendFile(path.join(__dirname , "./client/build/index.html"), function(err){
		res.status(500).send(err);
	})
})
const PORT = process.env.PORT || 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);