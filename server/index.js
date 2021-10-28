//Import Express
let express = require('express');

//Start App
let app = express();

//Import mongoose
let mongoose = require('mongoose');

require('dotenv').config();
const cors = require('cors');

app.use(cors());

//connect to mongoose

const CONNECTION_URL =
  'mongodb://sakib00:ayon0168@cluster0-shard-00-00.gjozd.mongodb.net:27017,cluster0-shard-00-01.gjozd.mongodb.net:27017,cluster0-shard-00-02.gjozd.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-dozxyr-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = 8080;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server running on port: http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    console.log(error.message, 'error');
  });

//Welcome message
app.get('/', (req, res) => res.send('Welcome to Express'));

//Configure bodyparser to handle the post requests
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//Import routes
let apiRoutes = require('./routes/routes.js');

//Use API routes in the App
app.use('/api', apiRoutes);
