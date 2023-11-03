const { Router } = require('express');
const perfilRouter = require('./perfilRouter');

const router = Router();

router.use('/perfil', perfilRouter)

module.exports = router