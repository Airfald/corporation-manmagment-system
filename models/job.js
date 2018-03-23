/*
 * @Author: 欧贺福
 * @Date: 2018-03-23 10:52:38
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-23 15:12:21
 */
const utils = require('../utils/common')

const jobModel = utils.defineModel('job', {
  department_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull:false,
  }
})

module.exports = jobModel
