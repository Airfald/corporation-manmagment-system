/*
 * @Author: 欧贺福
 * @Date: 2018-03-23 10:52:38
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-24 10:27:51
 */
const Sequelize = require('sequelize');
const utils = require('../utils/common')

const departmentModel = utils.defineModel('department', {
  corporation_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull:false,
  }
})

module.exports = departmentModel
