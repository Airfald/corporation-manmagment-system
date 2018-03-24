/*
 * @Author: 欧贺福
 * @Date: 2018-03-23 10:52:38
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-24 10:27:14
 */
const Sequelize = require('sequelize');
const utils = require('../utils/common')

const studentCorporationRelModel = utils.defineModel('student_job_rel', {
  corporation_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  department_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  student_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  job_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
})

module.exports = studentCorporationRelModel
