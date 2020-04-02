const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    // Shows up on the page without any data
    res.send(`server is up and running`);
})

// exporting to be used in index.js
module.exports = router;
