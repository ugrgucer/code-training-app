
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../lib/db.constructor')
const UserModel = require('./user.model')

class ImageStorage extends Model {}

ImageStorage.init({
    response: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    uid: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    url: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    modelName: 'image_storage',
    sequelize
})

ImageStorage.belongsTo(UserModel, {
    onDelete: 'cascade',
    hooks: true
})

module.exports = ImageStorage