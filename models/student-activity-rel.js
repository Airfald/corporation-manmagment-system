/*
 * @Author: 欧贺福
 * @Date: 2018-03-23 10:52:38
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-27 10:15:39
 */
const Sequelize = require('sequelize');
const utils = require('../utils/common')

const studentActivityRelModel = utils.defineModel('student_activity_rel', {
  studentId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  activityId: {
    type: Sequelize.INTEGER,
    allowNull:true,
  }
})

module.exports = studentActivityRelModel
