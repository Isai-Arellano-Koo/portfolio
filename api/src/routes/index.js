const { Router } = require('express');
const projectsRouter = require('./projectsRouter');

const router = Router();

router.use('/projects', projectsRouter)

module.exports = router