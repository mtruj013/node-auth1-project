const bcryptjs = require("bcryptjs");

const router = require('express').Router()

const Users = require('../users/users-model.js')

router.post('/register', (req, res) => {

    if(isValid(req.body)){
        const user = req.body;

        const rounds = process.env.BCRYPT_ROUNDS || 8;

        //hashes the pw
        const hashPw = bcryptjs.hashSync(user.password, rounds)

        user.password = hashPw;

        //saves user data
        Users.add(user)
        .then( user => {
            res.status(201)
            .json({ data: user});
        })
        .catch(err => {
            console.log(err)
            res.status(500)
            .json({message: "Unable to register user"})
        })
    } else {
        res.status(400)
        .json({message: "Please provide a usernmae and password"})
    }


})

//middleware (business logic)
function isValid(user) {
    return Boolean(user.username && user.password && typeof user.password === "string");
}

module.exports = router;