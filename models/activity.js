const Sequelize = require('sequelize');
const db = require('../db');

const activity = db.define('activity', {
  activityId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  corporationId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  department: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  activityName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  time: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  contactName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  contactPhone: {
    type: Sequelize.STRING,
    allowNull: true,
  },
}, {
  freezeTableName: true,      // 默认为false, 会自动改变表名称从而报错不存在改表
  timestamps: true           // 默认为true自动生成createdAt, updatedAt字段
});

module.exports = activity;
