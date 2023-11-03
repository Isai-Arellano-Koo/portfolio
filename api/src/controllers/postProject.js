const { Projects } = require('../db')

const postProject = async (req) => {
    const {name, image, description, urlDeploy, urlGitHub} = req.body
    if(!name || !image || !description) {
        return {message: 'Faltan datos OBLIGATORIOS'}
    }
    const projectFind = await Projects.findOne({where: {name}})
    if(projectFind) {
        return {message: 'Ya existe el proyecto con ese nombre', projectFind}
    }
    const project = await Projects.create({name, image, description, urlDeploy, urlGitHub})

    return {message: 'Proyecto creado correctamente', project}
}

module.exports = postProject