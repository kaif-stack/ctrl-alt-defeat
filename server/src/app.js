require("dotenv").config();
const express = require("express");
const bodyparser=require("body-parser");
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors());
require("./db/conn");
app.use(bodyparser.json({limit: '50mb'}));
app.use(bodyparser.urlencoded({limit: '50mb', extended: true}));
const port = process.env.PORT || 5000;


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

require("./models/Business");

app.use(require("./routes/businessRoutes"));

app.listen(port, '0.0.0.0', ()=>{
    console.log(`listening on port ${port}`);
});