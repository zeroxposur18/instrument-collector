const express = require('express');
const router = express.Router();
const instrumentsCtrl = require('../../controllers/instruments');

/*------------------------------ Public Routes ------------------------------*/

router.get('/', checkAuth, instrumentsCtrl.index);

/*----------------------------- Protected Routes ----------------------------*/

// Process the token for only the routes below
router.use(require('../../config/auth'));
router.post('/', checkAuth, instrumentsCtrl.create);

/*----------------------------- Helper Functions ----------------------------*/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
