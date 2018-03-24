/*
 * @Author: 欧贺福
 * @Date: 2018-03-23 10:52:38
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-24 10:27:30
 */
const Sequelize = require('sequelize');
const utils = require('../utils/common')

const studentActivityRelModel = utils.defineModel('student_activity_rel', {
  student_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  activity_id: {
    type: Sequelize.INTEGER,
    allowNull:true,
  }
})

module.exports = studentActivityRelModel
