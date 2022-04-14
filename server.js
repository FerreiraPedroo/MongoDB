require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const getRouter = require("./Router/GetRouter");
const putRouter = require("./Router/PutRouter");
const postRouter = require("./Router/PostRouter");
const deleteRouter = require("./Router/DeleteRouter");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors({
  "origin": "*",
  "methods": "GET, POST, PUT, DELETE",
  "credentials": true
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(getRouter);
app.use(putRouter);
app.use(postRouter);
app.use(deleteRouter);

app.use((err, req, res, next) => {
  console.log(`# Erro > method: ${req.method} > ${req.url} > body: '${JSON.stringify(req.body).substr(0,120)}' | 'msg resp: '${JSON.stringify(err)}'`);
  res.status(500).send(err);
});

(async () => {
  const optionsMongoDB = {
    serverSelectionTimeoutMS: 2000,
    heartbeatFrequencyMS: 5000
  };

  try {
    await mongoose.connect(process.env.MONGODB_URL, optionsMongoDB);
    console.log(`# MongodbDB conected... host:'${mongoose.connections[0].host}' | port:'${mongoose.connections[0].port}' | db name:'${mongoose.connections[0].name}'`);
  } catch (error) {
    console.log("#");
    console.log("# Não foi possivel estabelecer conexão com o MongodbDB ...");
  }
})()

app.listen(port, () => {
  console.log(`#### SERVIDOR ON at Port: ${port}`);
  console.log("#");
});
