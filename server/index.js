import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

//Setup of the body parser so that we can send our requests for e.g: image and imageUrl
app.use(bodyParser.json({ 
    limit: "40mb",
    extennded: true
}));

app.use(bodyParser.urlencoded({
    limit: "40mb",
    extennded: true
}));

