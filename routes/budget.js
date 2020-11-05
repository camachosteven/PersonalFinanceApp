const router = require('express').Router();

// initial route
router.get('/', (req, res) => {
    res.render('index.ejs');
});

module.exports = router;