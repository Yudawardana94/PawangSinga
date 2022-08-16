if (process.env.NODE_ENV === "development" || !process.env.NODE_ENV) {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const route = require("./routes");
// const errHandler = require('./middleware/errhandler')

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

// insert db connection here
const dbConnect =
  process.env.NODE_ENV === "prod"
    ? process.env.DB_SERVER //PROD
    : process.env.DB_SERVER; // DEV
mongoose.connect(
  dbConnect,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log(err), console.log("Connection Error. ");
    else console.log("Success connect to mongoose. ");
  }
);

// API method using rest API
app.use("/r", route);

// API method using GraphQL
// app.use('/g')

//API method error handler
// app.use('/', errHandler)

app.listen(port, () => {
  console.log(`Connection to port: ${port} successfully coonected !!!`);
});
