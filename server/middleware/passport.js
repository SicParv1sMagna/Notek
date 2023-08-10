const User = require('../internal/model/userModel');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT,
}

module.exports = passport => {
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
            try {
                const user = await User.findByPk(payload.id, {
                    attributes: ['email', 'id']
                });
    
                if (user) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            } catch(error) {
                console.error("Error occured in passport.js: ", error);
            }
        })
    )
}
