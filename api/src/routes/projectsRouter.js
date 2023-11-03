const {Router} = require('express');
const getProjectsHandler = require('../handlers/getProjectsHandler');
const postProjectHandler = require('../handlers/postProjectHandler');

const projectsRouter = Router();

projectsRouter.get('/', getProjectsHandler)
projectsRouter.post('/', postProjectHandler)

module.exports = projectsRouter