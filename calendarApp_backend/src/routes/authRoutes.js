const { Router } = require('express');
const router = Router();

const { userCreate } = require('../controllers/authController');
const registerValidator = require('../validations/registerValidator');
const fieldsValidator = require('../middlewares/fieldsValidator');

/* /api/auth */
router.post('/', registerValidator, fieldsValidator, userCreate);

module.exports = router;
