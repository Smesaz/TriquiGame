const express = require('express');
const router = express.Router();
const {postRecord} = require('../controllers');


router.post('/', async(req,res) => {
    try {
        const {winner, loser, date} = req.body;
        let result = await postRecord(winner, loser, date);
        res.status(201).json({msg: result});
    } catch (error) {

        console.error(err.stack);
		res.status(500).json({
			msg: 'There was an error...',
			error: err.message
		});
    }
});

module.exports = router;