import passport from 'passport'
import { Strategy as localStrategy } from 'passport-local'
import Admin from '../models/Admin.js'

passport.use(
    new localStrategy(async(username, password, done) => {
        try {
            // Match Email's User
            const user = await Admin.findOne({ username });

            if (!user) {
                return done(null, false, { message: "Not User found." });
            } else {
                // Match Password's User
                const match = await user.matchPassword(password);
                if (match) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: "Incorrect Password." });
                }
            }
        } catch (e) {
            console.log(e)
        }
    })
)

passport.serializeUser((user, done) => {
    done(null, user._id)
})
passport.deserializeUser((id, done) => {
    Admin.findById(id, (err, admin) => done(err, admin));
})