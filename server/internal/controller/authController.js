const bcrypt = require('bcryptjs');

const User = require('../model/userModel');

module.exports.login = function (req, res) {
    res.status(200).json({
        login: 'from controller',
    })
}

module.exports.register = async function (req, res) {
    const candidate = await User.findOne({where: { email: req.body.email }});

    if (candidate) {
        res.status(409).json({
            message: 'Email is already in use',
        });
    } else {
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password;

        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: bcrypt.hashSync(password, salt),
            email: req.body.email,
        });

        try {
            await user.save();
            res.status(201).json({
                message: 'User has been created',
                user: User,
            })
        } catch(err) {
            console.log("Error occured while registration user: ", err);
            res.status(409).json({
                message: 'Error to create user',
            });
        }
    }
}