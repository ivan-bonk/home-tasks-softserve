const express = require('express');
const router = express.Router();
const Fans = require('../models/Fans');

router.get('/', async (req, res) => {
    try {
        const fans = await Fans.find();
        return res.json(fans);
    } catch (err) {
        return res.status(404).json({
            message: err
        });
    }
})

router.delete('/:id', async (req, res) => {
	try {
		const fan = await Fans.findByIdAndDelete(req.params.id);
		return res.json(fan);
	} catch (err) {
		return res.status(404).json({ massage: err });
	}
});
  
router.post('/', async (req, res) => {
	const fan = new Fans({
		userName: req.body.userName,
		post: req.body.post,
	});

	try {
		const savedFan = await fan.save();
		return res.json(savedFan);
	} catch (err) {
		return res.status(404).json({ message: err });
	}
});

module.exports = router;