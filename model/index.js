const User = require('./user.model')
const UserDetail = require('./userDetail.model')
const Educator = require('./educator.model')
const EducatorProfession = require('./educatorProfession.model')
const Course = require('./course.model')
const CourseSection = require('./courseSection.model')
const Token = require('./token.model')
const ImageStorage = require('./imageStorage.model')
const sequelize = require('./../lib/db.constructor')

module.exports = {
    User,
    UserDetail,
    Token,
    ImageStorage,
    Educator,
    EducatorProfession,
    Course,
    CourseSection,
    sequelize
}