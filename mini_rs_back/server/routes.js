import express from 'express';

// Controller imports

import UserController from './controllers/userController';
const routes = express();

routes.post('/User/login', UserController.postLogin)
routes.post('/User/update', UserController.postUpdate)
    // routes.post('/User/user', UserController.postUser)


export default routes;

console.log('Executing Server: routes.js ...');