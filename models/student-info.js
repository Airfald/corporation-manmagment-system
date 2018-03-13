const Sequelize = require('sequelize');
const db = require('../db');

const studentInfo = db.define('student_info', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  password: {
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
  sex: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  department: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  class: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  isAdmin: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  test: {
    type: Sequelize.STRING,
    allowNull: true
  }
}, {
  // createdAt: 'create_time',
  // updatedAt: 'update_time',
  // tableName: 'student_info'
  freezeTableName: true,      // 默认为false, 会自动改变表名称从而报错不存在改表
  timestamps: false           // 默认为true自动生成createdAt, updatedAt字段
});

module.exports = studentInfo;
