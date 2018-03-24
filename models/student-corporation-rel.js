/*
 * @Author: 欧贺福
 * @Date: 2018-03-23 10:52:38
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-24 10:27:23
 */
const Sequelize = require('sequelize');
const utils = require('../utils/common')

const studentCorporationRelModel = utils.defineModel('student_corporation_rel', {
  student_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  corporation_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
})

module.exports = studentCorporationRelModel
