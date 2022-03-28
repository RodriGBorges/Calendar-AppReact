const { Router } = require('express');
const router = Router();

const { userCreate, userLogin } = require('../controllers/authController');
const registerValidator = require('../validations/registerValidator');
const fieldValidator = require('../middlewares/fieldValidator');
const authValidator = require('../validations/authValidator');

/* /api/auth */
router
    .post('/', authValidator, fieldValidator, userLogin)
    .post('/new', registerValidator, fieldValidator, userCreate)

module.exports = router;
