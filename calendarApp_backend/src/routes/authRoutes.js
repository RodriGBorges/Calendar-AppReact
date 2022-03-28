const { Router } = require('express');
const router = Router();

const { userCreate, userLogin } = require('../controllers/authController');
const registerValidator = require('../validations/registerValidator');
const fieldsValidator = require('../middlewares/fieldsValidator');
const authValidator = require('../validations/authValidator');

/* /api/auth */
router
    .post('/', authValidator, fieldsValidator, userLogin)
    .post('/new', registerValidator, fieldsValidator, userCreate)

module.exports = router;
