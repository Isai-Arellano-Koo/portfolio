const {Router} = require('express')

const perfilRouter = Router();

perfilRouter.get('/', (req, res) => res.status(200).json({hola: 'Hola mundo'}))

module.exports = perfilRouter