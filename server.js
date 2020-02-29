const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bannerRoutes = express.Router();
const PORT = 4000;

let Banner = require('./src/models/banner.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/on9comics', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

//Gets all banner json data
bannerRoutes.route('/').get(function(req, res) {
    Banner.find(function(err, banners) {
        if (err) {
            console.log(err);
        } else {
            res.json(banners);
        }
    });
});

//Gets banner id
bannerRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Banner.findById(id, function(err, banner){
        res.json(banner);
    })
});

//Banner update
bannerRoutes.route('/update/:id').post(function(req, res) {
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
bannerRoutes.route('/add').post(function(req,res){
    let banner = new Banner(req.body);
    banner.save()
        .then(banner => {
            res.status(200).json({'banner': 'banner added successfully'});
        })
        .catch(err =>{
            res.status(400).send('adding new banner failed');
        });
});

app.use('/on9comics', bannerRoutes);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});