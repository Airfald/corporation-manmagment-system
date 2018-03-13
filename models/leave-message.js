/*
 * 社团留言系统
 * @Author: 欧贺福
 * @Date: 2018-03-13 21:58:46
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-13 22:02:16
 */
const Sequelize = require('sequelize');
const db = require('../db');

const leaveMessage = db.define('leave-message', {
  student_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  student_name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  }
}, {
  freezeTableName: true,      // 默认为false, 会自动改变表名称从而报错不存在改表
  timestamps: false           // 默认为true自动生成createdAt, updatedAt字段
});

module.exports = leaveMessage;
