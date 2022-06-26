require('dotenv').config();
const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

const { v4: uuid } = require('uuid');

const Connection = require('./database/db');
const DefaultData = require('./default');
const Routes = require('./routes/route');

const PORT = process.env.PORT || 8000;

Connection();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);


app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
DefaultData();