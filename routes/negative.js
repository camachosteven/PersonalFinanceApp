const router = require('express').Router();

router.get('/bills', (req, res) => {
    const context = {};
    context['active'] = 'Bills';
    res.render('bills.ejs', context);
});

router.get('/make-payments', (req, res) => {
    const context = {};
    context['active'] = 'Make Payments';
    res.render('make-payments.ejs', context);
});

module.exports = router;
