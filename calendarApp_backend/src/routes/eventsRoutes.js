const { Router } = require('express');
const router = Router();

const { all, create, update, remove } = require('../controllers/eventController');
const fieldValidator = require('../middlewares/fieldValidator');
const jwtValidator = require('../middlewares/jwtValidator');
const eventValidator = require('../validations/eventValidator');

// Validacion a todas las rutas //
router.use(jwtValidator)

// /api/events //
router
    .get('/', all)
    .post('/', eventValidator, fieldValidator, create)
    .put('/:id', update)
    .delete('/:id', remove)



module.exports = router