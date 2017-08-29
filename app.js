const express = require('express');
const app = express();
const mustache = require('mustache-express');
const MongoClient = mongodb.MongoClient
const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/cards'
mongoose.Promise = require('bluebird');
mongoose.connect(mongoURL);
