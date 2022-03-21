const express = require('express');
const router = express.Router();
const {getRecords} = require('../controllers');

router.get('/', async(req,res) => {
    try {
        let result = await getRecords();
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