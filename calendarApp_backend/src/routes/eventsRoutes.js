const { Router } = require('express');
const router = Router();

const { all, create, update, remove } = require('../controllers/eventController');

// /api/events //
router
    .get('/', all)
    .post('/', create)
    .put('/:id', update)
    .delete('/:id', remove)



module.exports = router