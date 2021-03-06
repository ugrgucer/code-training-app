const db = require('./../../model/index')
const Op = require('sequelize').Op
const DataLoader = require('dataloader')

module.exports = user_id => new DataLoader(keys => {
    return new Promise(async (res, rej) => {
        try{
            const result = await db.UserDocument.findAll({ where: { documentId: { [Op.in]: keys }, userId: user_id } })

            const resultArray = []

            keys.forEach(x => {
                resultArray.push(result.length ? result.find(y => y.documentId === x) : null)
            })

            res(resultArray)
        }catch(err){
            rej(err)
        }
    })

})