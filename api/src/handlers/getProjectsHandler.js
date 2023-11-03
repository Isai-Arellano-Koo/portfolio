const getProjects = require('../controllers/getProjects')

const getProjectsHandler = async(req, res) => {
    try {
        const projects = await getProjects()
        res.status(200).json(projects)
    } catch (error) {
        res.status(400).json({error: error.message, message: 'Ocurrio un error al intentar obtener los proyectos'})
    }
}

module.exports = getProjectsHandler