const { check } = require('express-validator');

module.exports = [
    check('email')
        .notEmpty().withMessage('El email no puede estar vacío.').bail()
        .isEmail().withMessage('Debe ser un email válido.'),
    check('password')
        .notEmpty().withMessage('La contraseña no puede estar vacía')

]