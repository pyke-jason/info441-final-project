import express from 'express';
import getBookCoverImageURL from '../utils/getBookCoverImageURL.js';

var router = express.Router();

router.get('/', async function (req, res, next) {
    try {
        let info = await req.models.Book.findOne({ isbn: req.query.isbn });
        if (info) {
            // TODO add getBookCover
            res.json({
                title: info.title,
                author: info.author,
                language: info.language,
                region: info.region,
                publish_date: info.publish_date,
                publisher: info.publisher,
                image_url: getBookCoverImageURL(req.query.isbn, 'L')
            });
        }
        else {
            // user hasn't set their info so just send empty data
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
            await req.models.Book.deleteOne({ isbn: req.body.isbn });
            const newBookInfo = new req.models.Book({
                isbn: req.body.isbn,
                title: req.body.title,
                author: req.body.author,
                language: req.body.language,
                region: req.body.region,
                publish_date: req.body.publish_date,
                publisher: req.body.publisher
            });

            await newBookInfo.save();

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