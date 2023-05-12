import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'

import Cors from 'cors'
// const express = require('express');

// app config
const app = express();
const port = process.env.PORT || 8002

const connection_url = `mongodb+srv://userTwo:ShDZrRUbrHBJVkNO@cluster0.uiv1grr.mongodb.net/TINDER-CLONE?retryWrites=true&w=majority`;

// middlewares

app.use(express.json());
app.use(Cors());

// db config

mongoose.connect(connection_url, { })

// API endpoints
app.get("/", (req, res) => res.status(200).send("HELLO WORLD !!!"));

app.post('/tinder/cards', async (req, res) => {
    const dbCard = req.body;

    try{
        const data = await Cards.create(dbCard);
        return res.status(201).send(data);
    }catch(err){
        return res.status(500).send(err);
    }
});


app.get('/tinder/cards', async (req, res) => {
    try {
        const data = await Cards.find();
        return res.status(200).send(data);
    } catch (err) {
        return res.status(500).send(err);
    }
});

// listener

app.listen(port, () => console.log(`listening on localhost: ${port}`));