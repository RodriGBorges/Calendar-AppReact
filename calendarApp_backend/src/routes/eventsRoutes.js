const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { all, create, update, remove } = require('../controllers/eventController');
const fieldValidator = require('../middlewares/fieldValidator');
const jwtValidator = require('../middlewares/jwtValidator');
const eventValidator = require('../validations/eventValidator');
const updateValidator = require('../validations/updateValidator');

// Validacion a todas las rutas //
router.use(jwtValidator)

// /api/events //
router
    .get('/', all)
    .post('/', eventValidator, fieldValidator, create)
    .put('/:id', updateValidator, 
    check('id', 'Su id de MongoDB no es válido').isMongoId(),
    fieldValidator, 
    update)
    .delete('/:id',
    check('id', 'Su id de MongoDB no es válido').isMongoId(),
    fieldValidator,
    remove)



module.exports = router