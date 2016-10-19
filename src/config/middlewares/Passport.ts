import express = require('express');
import passport = require('passport');
import passportFacebook = require('passport-facebook');
import {Constants} from "../Constants";
import {UserBusiness} from "../../app/business/UserBusiness";

export class Passport {

    static get config() {
        let app = express();
        let facebookStrategy = passportFacebook.Strategy;
        app.use(passport.initialize());
        app.use(passport.session());

        passport.use(new facebookStrategy({
                clientID: Constants.FACEBOOK_APP_ID,
                clientSecret: Constants.FACEBOOK_APP_SECRET,
                callbackURL: Constants.FACEBOOK_CALLBACK_URL,
            },

            (accessToken, refreshToken, profile, cb) => {
                let userBusiness = new UserBusiness();
                userBusiness.findOrCreateFBUser(profile.id, {
                        facebookId: profile.id,
                        facebookToken: accessToken,
                        facebookName: profile.username

                    }, (err, result) => {
                        if (err)
                            return cb(err);
                        if (result)
                            return cb(null, result);
                    }
                )
            }));

        passport.serializeUser(function (user, done) {
            done(null, user._id);
        });

        passport.deserializeUser((_id, done) => {
            let userBusiness = new UserBusiness();
            console.log('deserializeUser  ' + _id);
            userBusiness.findByID(_id, (err, result) => {
                done(err, result);
            });
        });

        return app;
    }

    static checkAuth(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.isAuthenticated())
            next();
        else {
            res.status(401);
            res.send('unauthorized');
        }
    }

    static configAuthRoutes(app: express.Application) {
        app.get('/auth/facebook', passport.authenticate('facebook'));
        app.get('/auth/facebook/callback',
            passport.authenticate('facebook', {failureRedirect: '/'}),
            function (req, res) {
                res.status(200);
                res.redirect('/');
            });
    }
}