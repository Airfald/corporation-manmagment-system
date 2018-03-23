/*
 * @Author: 欧贺福
 * @Date: 2018-03-23 10:52:38
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-23 15:00:13
 */
const utils = require('../utils/common')

const announcementModel = utils.defineModel('announcement', {
  corporation_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  content: {
    type: Sequelize.STRING,
    allowNull:false,
  }
})

module.exports = announcementModel