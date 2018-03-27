/*
 * @Author: 欧贺福
 * @Date: 2018-03-23 10:51:48
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-27 14:25:12
 */
const Sequelize = require('sequelize')
const utils = require('../utils/common')

const activityModel = utils.defineModel('activity', {
  adminId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  time: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  chargeName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  chargeTelphone: {
    type: Sequelize.STRING,
    allowNull: true,
  }
})

module.exports = activityModel
