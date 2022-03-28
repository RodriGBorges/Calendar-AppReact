const { check } = require('express-validator');
const moment = require('moment');
//Configuramos la fecha en Español
moment.locale('es');

module.exports = [
    check('title')
        .notEmpty().withMessage('El título no puede estar vacío.'),
    check('start')
        .notEmpty().withMessage('La fecha de inicio no puede estar vacía.').bail()
        .isDate().withMessage('La fecha de inicio es inválida.').bail()
        .custom( (value, { req }) => {

            if(moment(value).diff(moment(), 'days') < 0) {
                return false
            } else {
                return true
            }
        }).withMessage('La fecha debe ser igual o posterior a la actual'),
    check('end')
    .notEmpty().withMessage('La fecha de fin no puede estar vacía.').bail()
    .isDate().withMessage('La fecha de fin es inválida.').bail()
    .custom( (value, { req }) => {

        if(moment(value) < moment(req.body.start)) {
            return false
        } else {
            return true
        }
    }).withMessage('La fecha debe ser igual o posterior a la fecha de inicio del evento.'),
]