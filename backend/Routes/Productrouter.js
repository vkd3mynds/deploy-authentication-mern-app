const ensureAuthenticated = require('../Middleware/Auth')
const router = require('express').Router();


router.get('/',ensureAuthenticated,(req,res)=>{
    console.log('--logged in users --', req.user)
    res.status(200).json([
        {
            name: "mobile",
            price: 10000
        },
        {
            name: "tv",
            price: 20000
        },
    ])
});
module.exports = router;