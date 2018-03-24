/*
 * @Author: 欧贺福
 * @Date: 2018-03-23 10:51:48
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-24 10:28:14
 */
const Sequelize = require('sequelize');
const utils = require('../utils/common')

const adminModel = utils.defineModel('admin', {
  student_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  activity_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  corporation_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
  }
})

module.exports = adminModel
