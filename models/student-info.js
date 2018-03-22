const Sequelize = require('sequelize');
const db = require('../db');
const utils = require('../utils/common')

// const studentInfo = db.define('student_info', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//     allowNull: false
//   },
//   grade: {
//     type: Sequelize.STRING,
//     allowNull: true,
//   },
//   department: {
//     type: Sequelize.STRING,
//     allowNull: true,
//   },
//   class: {
//     type: Sequelize.STRING,
//     allowNull: true,
//   },
//   number: {
//     type: Sequelize.INTEGER,
//     allowNull: true,
//   },
//   name: {
//     type: Sequelize.STRING,
//     allowNull: true,
//   },
//   password: {
//     type: Sequelize.STRING,
//     allowNull: true,
//   },
//   age: {
//     type: Sequelize.INTEGER,
//     allowNull: true
//   },
//   sex: {
//     type: Sequelize.STRING,
//     allowNull: true,
//   },
//   email: {
//     type: Sequelize.STRING,
//     allowNull: true,
//   },
//   telphone: {
//     type: Sequelize.STRING,
//     allowNull: true,
//   },
//   createdAt: {
//     field: 'created_at',
//     type: Sequelize.DATE,
//     allowNull: true,
//   },
//   updatedAt: {
//     field: 'updated_at',
//     type: Sequelize.DATE,
//     allowNull: true,
//   }
// }, {
//   freezeTableName: true,      // 默认为false, 会自动改变表名称从而报错不存在改表
//   timestamps: false           // 默认为true自动生成createdAt, updatedAt字段
// });

const studentInfo = utils.defineModel('student_info', {
    grade: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    department: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    class: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    number: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: true,
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
    }
})

module.exports = studentInfo;
