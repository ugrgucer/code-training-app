const { Model, DataTypes } = require('sequelize')
const sequelize = require('../lib/db.constructor')
const ImageStorageModel = require('./imageStorage.model')
const UserModel = require('./user.model')

class Educator extends Model {}

Educator.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            len: ['3', '50']
        },
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            len: ['0', '1000']
        }
    },
    profilePicture: {
        type: DataTypes.INTEGER,
        field: 'image_id',
        references: {
            model: ImageStorageModel,
            key: 'id'
        }
    },
    lastLoginDate: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'last_login_date'
    }
}, {
    modelName: 'educators',
    sequelize
})

Educator.belongsTo(UserModel, {
    onDelete: 'cascade',
    hooks: true
})

module.exports = Educator