import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
const fileUpload = require('express-fileupload');


const app = express();

// Middelware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static('uploads'));
app.use(bodyParser.json());
app.use(fileUpload({
    createParentPath: true
}));
app.use('/api', routes);

export default app;

console.log('Executing Server: app.js ...');