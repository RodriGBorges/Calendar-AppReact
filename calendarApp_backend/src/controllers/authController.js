const User = require('../database/models/User');
const bcryptjs = require('bcryptjs');
const JWTGenerator = require('../helpers/jwt');

module.exports = {
    userCreate: async (req, res) => {

        const { email, password } = req.body;

        try {

            let user = await User.findOne({
                email
            })

            if(user) {
                return res.status(400).json({
                    ok: false,
                    msg: 'El email ya se encuentra registrado.'
                })
            }

            //nuevo usuario
            user = new User(req.body);
            user.password = bcryptjs.hashSync(password, 10);

            // console.log(user);
            //guardamos datos del usuario
            await user.save();

            const token = await JWTGenerator(user.id, user.name);

            return res.status(201).json({
                ok: true,
                uid: user.id,
                name: user.namem,
                token
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                msg: 'Contacte con el administrador del sitio.',
                error
            })
        }

    },
    userLogin: async (req, res) => {

        const {email, password} = req.body;

        try {
            
            const user = await User.findOne({email});
            const validPassword = user && bcryptjs.compareSync(password, user.password);

            if(!user || !validPassword) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Credenciales inválidas.'
                })
            }

            // Genero el JWT
            const token = await JWTGenerator(user.id, user.name);

            return res.status(200).json({
                ok: true,
                uid: user.id,
                name: user.name,
                token
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                msg: 'Contacte con el administrador del sitio.',
                error
            })
        }
    },
    revalidateToken: async (req, res) => {

        try {
            
            const token = await JWTGenerator(req.id, req.name);

            return res.status(200).json({
                ok: true,
                token
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                msg: 'Contacte con el administrador del sitio.',
                error
            })
        }
    }
}