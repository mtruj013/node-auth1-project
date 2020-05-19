const express = require('express')
const helmet = require('helmet')
// const session = require('express-session')

const usersRouter = require('./users/users-router.js')
const authRouter = require('./auth/auth-router.js')

const server = express();

//session config goes here


server.use(helmet());
server.use(express.json());

server.use('/api/users', usersRouter);
server.use('./api/auth', authRouter);

server.get("/", (req, res) => {
    res.json({ api: "up" });
});

module.exports = server;