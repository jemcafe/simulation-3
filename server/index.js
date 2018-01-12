const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
require('dotenv').config();

app = express();

app.use( bodyParser.json() );
// app.use( session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
// }));
massive( process.env.CONNECTION_STRING ).then( db => app.set('db', db) ).catch( err => console.log('error', err) );





const port = process.env.SERVER_PORT || 3040;
app.listen( port, () => console.log( `Listening on port: ${ port }`) );