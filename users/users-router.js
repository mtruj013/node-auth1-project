const express = require('express');

const router = express.Router();
const Users = require('./users-model.js');

function restricted(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
    } else {
        res.status(401).json({ you: "cannot pass!" });
    }
}

router.use(restricted);

router.get('/', (re, res) => {
    Users.find()
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
})


module.exports = router;