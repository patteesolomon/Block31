// import the pets array from data.js
import {pets , find, findByName, findByOwner } from "./data.js";

// init express app
import path from 'path';
import express from 'express';
const app = express();


// set the pprt

const PORT = 8080;

// set up the middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file
    res.sendFile(__dirname, './public/index.html'); 
    res.sendFile(__dirname, './public/script.js');
});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// // get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response
    res.json(pets);
});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
    const owner = req.body.owner;

    // find the pet in the pets array
    const petf = findByOwner(pets, owner);

    // send the pet as a response
    res.json(petf);
});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request
    const name = req.body.name;

    // find the pet in the pets array
    const pete = findByName(pets, name);

    // send the pet as a response
    res.json(pete);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

export default app;