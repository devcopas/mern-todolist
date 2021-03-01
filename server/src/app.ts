import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();
const PORT = 8080;
const {
	MONGODB_ATLAS_USERNAME,
	MONGODB_ATLAS_PASSWORD,
	MONGODB_ATLAS_DBNAME
} = process.env

const uri = `mongodb+srv://${MONGODB_ATLAS_USERNAME}:${MONGODB_ATLAS_PASSWORD}@cluster0.u5dqp.mongodb.net/${MONGODB_ATLAS_DBNAME}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };


app.use(cors());

app.get('/', (req: Request, res: Response) => res.send('Berhasil'));

app.get('/about', (req: Request, res: Response) => res.send('About API'));

mongoose.set('useFindAndModify', true);
mongoose.connect(uri, options)
	.then(() => {
		app.listen(PORT, () => console.log(`App is listening at http://localhost:${PORT}`))
	})
	.catch((error) => {
		throw error
	})
