const express = require('express');
const {loginUser, registerUsers} = require('../controllers/userControllers');
const cors = require('cors');
const router = express.Router();

router.use(cors());
router.use(express.json());


router.route('/auth').post(loginUser);
router.route('/userRegister').post(registerUsers);

module.exports = router;
