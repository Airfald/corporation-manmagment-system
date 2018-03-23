/*
 * @Author: 欧贺福
 * @Date: 2018-03-23 10:52:38
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-23 15:16:48
 */
const utils = require('../utils/common')

const jobModel = utils.defineModel('job', {
  student_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  corporation_id: {
    type: Sequelize.INTEGER,
    allowNull:true,
  },
  content: {
    type: Sequelize.STRING,
    allowNull:true,
  }
})

module.exports = jobModel
