const express = require('express');
const path = require('path');
var session = require('express-session');
var MemoryStore = require('memorystore')(session);
const token = require('./token');
const list = require('./list');



// ignore request for FavIcon. so there is no error in browser
const ignoreFavicon = (req, res, next) => {
    if (req.originalUrl.includes('favicon.ico')) {
        res.status(204).end();
    }
    next();
};

// fn to create express server
const create = async () => {
   
    // server
    const app = express();

    // configure nonFeature
    app.use(ignoreFavicon);

    // root route - serve static file
    app.get('/', (req, res) => {
    
      // console.log(t);
        res.sendFile(path.join(__dirname, '../public/client.html'));
    });
     
    app.get('/login', async (req, res) => {
        var t= await token.getToken(); 
        
        
        
        
        //console.log(t);
         res.sendFile(path.join(__dirname, '../public/client.html'));
     });

     app.get('/list', async (req, res) => {
        var l= await list.getList();
        console.log(l);
         res.sendFile(path.join(__dirname, '../public/client.html'));
     });

    // Error handler
    /* eslint-disable no-unused-vars */
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });
    return app;
};

module.exports = {
    create
};
