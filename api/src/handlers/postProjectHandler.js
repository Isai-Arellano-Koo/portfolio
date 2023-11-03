const postProject = require("../controllers/postProject")

const postProjectHandler = async (req, res) => {
    try {
        const projectCreated = await postProject(req)
        res.status(200).json(projectCreated)
    } catch (error) {
        res.status(400).json({error: error.message, message: 'Ocurrio un error al intentar agregar un proyecto'})
    }
}

module.exports = postProjectHandler