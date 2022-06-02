import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/myidentity', function (req, res, next) {
    let session = req.session
    if (session.isAuthenticated) {
        res.json({
            status: "loggedin",
            userInfo: {
                name: session.account.name,
                username: session.account.username
            }
        });
    } else {
        res.send({ status: "loggedout" })
    }

});

router.get('/', async function (req, res, next) {
    try {
        if (req.query.username) {
            let info = await req.models.User.findOne({ username: req.query.username });
            if (info) {
                res.json({ bio: info.bio, favorite_website: info.favorite_website });
            }
            else {
                // user hasn't set their info so just send empty data
                res.json({});
            }
        }
        else {
            res.status(500).json({ status: "error", error: "missing username" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", error });
    }
});

router.post('/', async function (req, res, next) {
    try {
        let session = req.session;
        if (session.isAuthenticated) {
            await req.models.User.deleteOne({ username: session.account.username });
            const newUserInfo = new req.models.User({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                street: req.body.street,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip,
                languages: req.body.languages,
                admin_library: req.body.admin_library
            })

            await newUserInfo.save();

            res.json({ status: 'success' });
        }
        else {
            res.status(401).json({
                status: "error",
                error: "not logged in"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 'error', error })
    }
});

export default router;