const { Projects } = require('../db')

const getProjects = async () => {
    const projects = await Projects.findAll()

    if(projects) {
        return projects
    } else {
        return []
    }
}

module.exports = getProjects