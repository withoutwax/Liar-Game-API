const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Data = require('./data');

require('dotenv').config();

const API_PORT = process.env.PORT || 3000;
const app = express();
const router = express.Router();

app.use(cors());

// Initializing MongoDB Database
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

let db = mongoose.connection;
db.once('open', () => console.log("Connected to the database"));
// console.log(db);
// Checks if the database connection is successful / unsuccessful
db.on('error', console.error.bind(console, "MongoDB connection error:"));
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET
router.get('/getData', (req, res) => {
    Data.find((err, data) => {
        if (err) return res.json({ success: false, error: err }); 
        return res.json({ success: true, data: data })
    });
});

// Append /api for out http requests
app.use('/api', router);

app.listen(API_PORT, () => {
    console.log(`THE SERVER IS LISTENING ON PORT ${API_PORT}`);
});