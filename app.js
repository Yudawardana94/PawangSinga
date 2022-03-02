if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const route = require('./routes')
// const errHandler = require('./middleware/errhandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

// insert db connection here
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
}, (err) => {
  if (err) console.log(err), console.log('Connection Error. ')
  else console.log('Success connect to mongoose. ')
})

app.use('/', route)
// app.use('/', errHandler)

app.listen(port, () => {
    console.log(`Connection to port: ${port} successfully coonected !!!`)
})