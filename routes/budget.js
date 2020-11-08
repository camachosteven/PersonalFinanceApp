const router = require('express').Router();

// initial route
router.get('/', (req, res) => {
    const context = {};
    if (process.env.NODE_ENV === 'production') context['env'] = 'Heroku';
    else if (process.env.NODE_ENV === 'development') context['env'] = 'Docker';
    else context['env'] = 'Local';
    res.render('index.ejs', context);
});

module.exports = router;