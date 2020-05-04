/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
const express = require('express');

const router = express.Router();
const PATCH = require('../controllers/patchController');
const LOGIN = require('../controllers/loginController');
const THUMBNAIL = require('../controllers/thumbnailController');


const auth = require('../middleware/auth');

router.post('/login', LOGIN);

router.patch('/patch', auth, PATCH);

router.get('/thumbnail', auth, THUMBNAIL);

module.exports = router;
