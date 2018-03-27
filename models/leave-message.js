/*
 * @Author: 欧贺福
 * @Date: 2018-03-23 10:52:38
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-27 09:56:54
 */
const Sequelize = require('sequelize')
const utils = require('../utils/common')

const leaveMessageModel = utils.defineModel('leave_message', {
  studentId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  corporationId: {
    type: Sequelize.INTEGER,
    allowNull:true,
  },
  content: {
    type: Sequelize.STRING,
    allowNull:true,
  }
})

module.exports = leaveMessageModel
