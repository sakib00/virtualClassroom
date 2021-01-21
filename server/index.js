//Import Express
let express = require('express')

//Start App
let app = express();

//Import body parser
let bodyParser = require('body-parser');

//Import mongoose
let mongoose = require('mongoose');

//Assign port
var port = process.env.PORT || 8080;

require('dotenv').config();
const cors = require('cors');

app.use(cors());

//connect to mongoose
const dbPath = process.env.ATLAS_URI;
const options = { useNewUrlParser: true, useUnifiedTopology: true }
const mongo = mongoose.connect(dbPath, options);

mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})




//Welcome message
app.get('/', (req, res) => res.send('Welcome to Express'));


//Configure bodyparser to handle the post requests
app.use(bodyParser.urlencoded({
    extended: true
}));



app.use(bodyParser.json());


//Import routes
let apiRoutes = require("./routes")

//Launch app to the specified port
app.listen(port, function () {
    console.log("Server running on Port: " + port);
})

//Use API routes in the App
app.use('/api', apiRoutes)





