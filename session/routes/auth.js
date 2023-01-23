const express = require('express');

const router = express.Router();

router.use('/login', (req, res) => {
  res.send('You are LoggedIn Here');
});

router.use('/logout', (req, res) => {
    res.send('Logeed Out Sucessfully');
  });


module.exports = router;