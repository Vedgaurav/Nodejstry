const { response } = require('express');
const express = require('express');
const router = express.Router();

//@route    GET api/users/test
//@desc     Test users route
//@access   Public 
router.get('/test', (req, res) => res.json({msg: "User Works"}));

module.exports = router;