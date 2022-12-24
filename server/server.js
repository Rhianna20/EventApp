const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 5000;
const connectDB = require('./config/db')
const router = require('./routes/event')

// Connect Database
connectDB();

// Cors
app.use(cors({ origin: true, credentials: true}))

// Init Middleware
app.use(express.json({ extended: false}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));

// Use Routes
app.use('/', router)


// Port connection
app.listen(port, () => console.log(`Server running on port ${port}`))