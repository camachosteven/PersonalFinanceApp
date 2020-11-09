const router = require('express').Router();

router.get('/income', (req, res) => {
    const context = {};
    context['active'] = 'Income';
    res.render('income.ejs', context);
});

router.get('/savings', (req, res) => {
    const context = {};
    context['active'] = 'Savings';
    res.render('savings.ejs', context);
});

router.get('/goals', (req, res) => {
    const context = {};
    context['active'] = 'Goals';
    res.render('goals.ejs', context);
});

module.exports = router;