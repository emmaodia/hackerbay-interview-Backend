/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
const express = require('express');

const router = express.Router();
const LOGIN = require('../controllers/loginController');
const PATCH = require('../controllers/patchController');
const THUMBNAIL = require('../controllers/thumbnailController');


const auth = require('../middleware/auth');

router.post('/login', LOGIN);

router.get('/patch', auth, PATCH);

router.get('/thumbnail', auth, THUMBNAIL);

module.exports = router;
