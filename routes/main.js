const router = require('express').Router();

// initial route
router.get('/', (req, res) => {
    const context = {};
    if (process.env.NODE_ENV === 'production') context['env'] = 'Heroku';
    else if (process.env.NODE_ENV === 'development') context['env'] = 'Docker';
    else context['env'] = 'Local';
    context['active'] = 'Summary';
    res.render('index.ejs', context);
});

router.get('/budget', (req, res) => {
    const context = {
        active: 'Budget'
    };
    res.render('budget.ejs', context);
});

router.get('/transactions', (req, res) => {
    const context = {};
    context['active'] = 'Transactions';
    res.render('transactions.ejs', context);
});



module.exports = router;