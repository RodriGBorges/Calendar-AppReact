const { check } = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage('El nombre no puede estar vacío.'),
    check('email')
        .notEmpty().withMessage('El email no puede estar vacío.').bail()
        .isEmail().withMessage('Debe ser un email válido.'),
    check('password')
        .notEmpty().withMessage('La contraseña no puede estar vacía').bail()
        .isLength({min: 6}).withMessage('La contraseña debe tener como mínimo 6 caracteres.')

]