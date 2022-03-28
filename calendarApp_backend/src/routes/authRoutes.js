const { Router } = require('express');
const router = Router();

const { userCreate, userLogin } = require('../controllers/authController');
const registerValidator = require('../validations/registerValidator');
const fieldsValidator = require('../middlewares/fieldsValidator');

/* /api/auth */
router
    .post('/', userLogin)
    .post('/new', registerValidator, fieldsValidator, userCreate)

module.exports = router;
