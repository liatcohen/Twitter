const mongoose = require('mongoose')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = mongoose.model('User')

const configurePassport = () => {
	passport.serializeUser((user, done) => {
		done(null, user)
	})

	passport.deserializeUser((user, done) => {
		done(null, user)
	})

	passport.use(new LocalStrategy({
		usernameField: 'user[email]',
		passwordField: 'user[password]',
	}, (email, password, done) => {
		User.findOne({email})
			.then((user) => {
				if (!user || !user.validatePassword(password)) {
					return done(null, false, {errors: {'email or password': 'is invalid'}})
				}

				return done(null, user)
			}).catch(done)
	}))
}

module.exports = configurePassport
