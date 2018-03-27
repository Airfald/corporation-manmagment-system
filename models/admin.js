/*
 * @Author: 欧贺福
 * @Date: 2018-03-23 10:51:48
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-27 14:02:18
 */
const Sequelize = require('sequelize')
const utils = require('../utils/common')

const adminModel = utils.defineModel('admin', {
  studentId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  activityId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  corporationId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  }
})

module.exports = adminModel
