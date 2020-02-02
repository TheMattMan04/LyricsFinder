const express = require('express');
const request = require('request');

const LyricModel = require('./model/Lyric');

var app = express();

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

app.listen(3000, () => {
    console.log('App listening...');
});