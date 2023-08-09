const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../model/userModel');

module.exports.login = async function (req, res) {
    const candidate = await User.findOne({where: { email: req.body.email }});

    if (candidate === null) {
        res.status(404).json({
            message: 'User not found',
        });
    } else {
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password);
        if (!passwordResult) {
            res.status(401).json({
                message: "Passwords doesn't match",
            });
        } else {
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate.id,
            },
                process.env.JWT,
                {
                    expiresIn: 60 * 60 * 24 * 7,
                }
            );
            res.status(200).json({
                token: `Bearer ${token}`,
            });
        }
    }
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