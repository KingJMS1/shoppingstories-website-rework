import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts', postRoutes)
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://root:Password543210@cluster0.ihhclha.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true, dbName : 'Test'})
.then(() => app.listen(PORT, () => console.log(`Mongo DB connected on ${PORT}`)))
.catch((err) => console.log(err)); 

// mongoose.syncIndexes('useFindAndModify', false);