const db = require('./../../model/index')
const Op = require('sequelize').Op
const DataLoader = require('dataloader')

module.exports = user_id => new DataLoader(keys => {
    return new Promise(async (res, rej) => {
        try{
            const result = await db.ImageStorage.findAll({ where: { userId: user_id, id: { [Op.in]: keys } } })

            res(result)
        }catch(err){
            rej(err)
        }
    })

})