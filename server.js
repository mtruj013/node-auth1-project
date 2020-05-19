const express = require('express')
const helmet = require('helmet')
const session = require('express-session')

const usersRouter = require('./users/users-router.js')
const authRouter = require('./auth/auth-router.js')

const server = express();

//session config goes here
const sessionConfig = {
    cookie: {
        maxAge : 1000 * 60 * 60,//one hour in milliseconds
        secure: process.env.SECURE_COOKIE || false,
        httpOnly: true ,
    },
    resave: false, 
    saveUninitialized: process.env.USER_ALLOWED_COOKIES || true,
    name:"cookie monster",
    secret: process.env.COOKIE_SECRET || "issa secret",
}

server.use(session(sessionConfig));

server.use(helmet());
server.use(express.json());

server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);

server.get("/", (req, res) => {
    res.json({ api: "up" });
});

module.exports = server;