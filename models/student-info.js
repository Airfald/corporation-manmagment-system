const Sequelize = require('sequelize');
const utils = require('../utils/common')

const studentInfoModel = utils.defineModel('student_info', {
  grade: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  department: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  class: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  number: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  sex: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  telphone: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  isAdmin: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  corporationId: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
})

module.exports = studentInfoModel;
