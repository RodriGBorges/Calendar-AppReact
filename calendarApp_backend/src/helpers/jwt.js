require('dotenv').config();
const jwt = require('jsonwebtoken');

//vamos a generar un token key para el logeo
const JWTGenerator = (uid, name) => {
    
    return new Promise((resolve, reject) => {

        const payload = {
            uid,
            name
        }

        jwt.sign(payload, process.env.SECRET_JWT, {
            expiresIn: '2 hours'
        }, (error, token) => {
            if(error) {
                console.log(error);
                return reject('No se pudo generar el token');
            }
            return resolve(token)
        }
        )
    })
}

module.exports = JWTGenerator;