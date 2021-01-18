const express = require('express');
const router = express.Router();
const News = require('../models/News');

router.get('/', async (req, res) => {
    try {
      const news = await News.find();
      return res.json(news);
    } catch (err) {
      return res.status(404).json({
        message: err
      });
    }
})


router.delete('/:id', async (req, res) => {
	try {
		const news = await News.findByIdAndDelete(req.params.id);
		return res.json(news);
	} catch (err) {
		return res.status(404).json({ massage: err });
	}
});
  
router.post('/', async (req, res) => {
	const news = new News({
    img: req.body.img,
		title: req.body.title,
		text: req.body.text,
	});

	try {
		const savedNew = await news.save();
		return res.json(savedNew);
	} catch (err) {
		return res.status(404).json({ message: err });
	}
});

module.exports = router;