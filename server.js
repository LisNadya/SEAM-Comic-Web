const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const on9comic = express.Router();
const PORT = 4000;

let Banner = require('./src/models/banner.model');
let Comic = require('./src/models/comic.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/on9comics', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
//Banner update//
//Gets all banner json data
on9comic.route('/banner').get(function(req, res) {
    Banner.find(function(err, banners) {
        if (err) {
            console.log(err);
        } else {
            res.json(banners);
        }
    });
});

//Gets banner id
on9comic.route('/banner/:id').get(function(req, res) {
    let id = req.params.id;
    Banner.findById(id, function(err, banner){
        res.json(banner);
    })
});

//Banner update
on9comic.route('/banner/update/:id').post(function(req, res) {
    Banner.findById(req.params.id, function(err, banner) {
        if (!banner)
            res.status(404).send("data is not found");
        else
            banner.file_path = req.body.file_path;
            // todo.todo_responsible = req.body.todo_responsible;
            // todo.todo_priority = req.body.todo_priority;
            // todo.todo_completed = req.body.todo_completed;

            banner.save().then(banner => {
                res.json('Banner updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

//Add banner
on9comic.route('/banner/add').post(function(req,res){
    let banner = new Banner(req.body);
    banner.save()
        .then(banner => {
            res.status(200).json({'banner': 'banner added successfully'});
        })
        .catch(err =>{
            res.status(400).send('adding new banner failed');
        });
});
/////
//Comic Update//
on9comic.route('/comic').get(function(req, res) {
    Comic.find(function(err, comics) {
        if (err) {
            console.log(err);
        } else {
            res.json(comics);
        }
    });
});
on9comic.route('/comic/add').post(function(req,res){
    let comic = new Comic(req.body);
    comic.save()
        .then(comic => {
            res.status(200).json({'comic': 'comic added successfully'});
        })
        .catch(err =>{
            res.status(400).send('adding new comic failed');
        });
});

on9comic.route('/comic/:id').get(function(req,res){
    let id = req.params.id;
    Comic.findById(id, function(err, comic){
        res.json(comic);
    })
});

on9comic.route('/comic/update/:id').post(function(req, res) {
    Comic.findById(req.params.id, function(err, comic) {
        if (!comic)
            res.status(404).send("data is not found");
        else
            comic.file_path = req.body.file_path;
            comic.title = req.body.title;
            comic.author = req.body.author;
            comic.genre = req.body.genre;
            comic.latestchapter = req.body.latestchapter;
            comic.summary = req.body.summary;

            comic.chapters = req.body.chapters;
            // for (let index = 0; index <req.body.chapters.length; index++) {
            //     const element = req.body.chapters[index];
            //     comic.chapters[index] = element;
            // }
            // req.body.chapters.forEach(element => {
            //     comic.chapters = element;
            // });
            // comic.chapters = req.body.chapters[0];

            // console.log(comic.chapters[0]);
            comic.save().then(comic => {
                res.json('Comic updated!');
            })
            .catch(err => {
                console.log(err);
                res.status(400).send("Update not possible");
            });
    });
});

//

app.use('/on9comics', on9comic);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});