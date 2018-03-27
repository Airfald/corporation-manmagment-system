/*
 * @Author: 欧贺福
 * @Date: 2018-03-23 10:52:38
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-27 13:46:45
 */
const Sequelize = require('sequelize');
const utils = require('../utils/common')

const studentCorporationRelModel = utils.defineModel('student_job_rel', {
  corporationId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  departmentId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  studentId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  jobId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
})

module.exports = studentCorporationRelModel
