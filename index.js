require('dotenv').config();

const express = require('express');
const cors = require('cors');
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

app.listen(port, () => {
  console.log(`#### SERVIDOR ON at Port: ${port}`);
  console.log("#");
});
