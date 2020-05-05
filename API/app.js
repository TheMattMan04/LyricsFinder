const express = require('express');
const cors = require('cors');
const request = require('request');
const mongoose = require('mongoose');
require('dotenv/config');

const LyricModel = require('./model/Lyric');

const app = express();
app.use(cors());

mongoose.connect(process.env.DB_CONNECTION)
    .then(() => {
        console.log('Connected to DB');
    })
    .catch((e) => {
        console.log('Connection error: ' + e);
    });

app.get('/api/lyrics', function(req, result) {
    let title = req.query.title;
    let lyric = new LyricModel();

    request('https://some-random-api.ml/lyrics?title='+title+'', function(err, res, body) {
        if(!err) {
           let parseBody = JSON.parse(body);
           
           lyric.title = parseBody.title;
           lyric.author = parseBody.author;
           lyric.lyrics = parseBody.lyrics;
           lyric.thumbnail = parseBody.thumbnail;
           lyric.links = parseBody.links;

           result.send(lyric);
        }
        else {
            result.send(err);
        }
    });
});

module.exports = app;
