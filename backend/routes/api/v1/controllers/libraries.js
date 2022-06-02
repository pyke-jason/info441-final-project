import express from 'express';
var router = express.Router();

router.get('/', async function (req, res, next) {
    try {
        let info = await req.models.Library.findOne({ isbn: req.query.name });
        if (info) {
            res.json(info);
        }
        else {
            // library not set, just send empty data
            res.json({});
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
            await req.models.Library.deleteOne({ name: req.body.name });
            const newLibraryInfo = new req.models.Library({
                name: req.body.name,
                street: req.body.street,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip,
                tribal_affiliation: req.body.tribal_affiliation,
                government_affiliation: req.body.government_affiliation
            });

            await newLibraryInfo.save();

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