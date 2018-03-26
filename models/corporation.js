/*
 * @Author: 欧贺福
 * @Date: 2018-03-23 10:52:38
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-26 18:23:28
 */
const Sequelize = require('sequelize')
const utils = require('../utils/common')

const corporationModel = utils.defineModel('corporation', {
  name: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull:false,
  }
})

module.exports = corporationModel
