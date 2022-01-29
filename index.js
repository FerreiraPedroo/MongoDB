require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const GetRouter = require("./Router/GetRouter");
const PutRouter = require("./Router/PutRouter");
const PostRouter = require("./Router/PostRouter");
const DeleteRouter = require("./Router/DeleteRouter");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors({
  "origin": "localhost:3000",
  "methods": "GET, POST, PUT, DELETE",
  "credentials": true
}))
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(GetRouter);
app.use(PutRouter);
app.use(PostRouter);
app.use(DeleteRouter);

app.use((err, req, res, next) => {
  console.log(`# Erro > url: '${req.url}' | method: '${req.method}' | msg: ${JSON.stringify(err)}`)
  res.status(500).send(err)
});

(async () => {
  const optionsMongoDB = {
    serverSelectionTimeoutMS: 2000,
    heartbeatFrequencyMS: 5000
  };

  try {
    await mongoose.connect(process.env.MONGODB_URL, optionsMongoDB)
    console.log(`# MongodbDB conected... host:'${mongoose.connections[0].host}' | port:'${mongoose.connections[0].port}' | db name:'${mongoose.connections[0].name}'`)
  } catch (error) {
    console.log("#");
    console.log("# Não foi possivel estabelecer conexão com o MongodbDB ...");
  }
})()



app.listen(port, () => {
  console.log(`#### SERVIDOR ON at Port: ${port}`);
  console.log("#");
});
