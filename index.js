const express = require('express')
const app = express()
const mongoose = require('mongoose')
const axios = require('axios')
const cors = require('cors');
const shortnerRouter = require('./Routes/shortnerRoute')
app.use(express.json())
app.use(cors());


mongoose.connect("mongodb+srv://rohith:Rohith1418@url-short.44wem.mongodb.net/short-url")
.then(() => {
   app.listen(3060, () => {
            console.log("server is on 3060");
        });
    })
    .catch(( err) => {
        console.log(err.message);
    });

app.use('/url',shortnerRouter)
