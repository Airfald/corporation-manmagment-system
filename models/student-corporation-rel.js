/*
 * @Author: 欧贺福
 * @Date: 2018-03-23 10:52:38
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-27 10:58:20
 */
const Sequelize = require('sequelize');
const utils = require('../utils/common')

const studentCorporationRelModel = utils.defineModel('student_corporation_rel', {
  studentId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  corporationId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
})

module.exports = studentCorporationRelModel
