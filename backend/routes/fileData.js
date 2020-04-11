const express               = require('express');
const router                = express.Router();
const fileController    = require('../controllers/fileController');

router.post('/',fileController.processFile);
router.get('/',fileController.getFile);

module.exports =router;