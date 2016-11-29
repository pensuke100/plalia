const express = require('express');
const rootCtrl = require('../controllers/root');
const helloCtrl = require('../controllers/hello');

const router = express.Router();

router.route('/')
  .get(rootCtrl.index);

router.route('/hello')
  .post(helloCtrl.index);

module.exports = router;
