const express = require('express');
const router = express.Router();
const collectionsCtrl = require('../../controllers/collections');

/*------------------------------ Public Routes ------------------------------*/

router.get('/', collectionsCtrl.index);

/*----------------------------- Protected Routes ----------------------------*/

// Process the token for only the routes below
router.use(require('../../config/auth'));
router.post('/', checkAuth, collectionsCtrl.create);
router.get('/:id', checkAuth, collectionsCtrl.show);
router.put('/:id', checkAuth, collectionsCtrl.update);
router.delete('/:id', checkAuth, collectionsCtrl.delete);

/*----------------------------- Helper Functions ----------------------------*/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
