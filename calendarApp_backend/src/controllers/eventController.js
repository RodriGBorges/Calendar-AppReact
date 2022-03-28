const Event = require('../database/models/Event');

module.exports = {
    all: async (req, res) => {

        try {
            
            const events = await Event.find().populate('user', 'name');

            return res.status(200).json({
                ok: true,
                data: events
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
    create: async (req, res) => {

    },
    update: async (req, res) => {

    },
    remove: async (req, res) => {

    }
}