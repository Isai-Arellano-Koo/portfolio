const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('projects', {
        id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    urlDeploy: {
        type: DataTypes.STRING,
        allowNull: true
    },
    urlGitHub: {
        type: DataTypes.STRING,
        allowNull: true
    },

    }, {timestamps: false})
}