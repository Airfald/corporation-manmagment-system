/*
 * @Author: 欧贺福
 * @Date: 2018-03-28 16:15:18
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-28 16:42:13
 */
const activity = require('./activity')
const corporation = require('./corporation')
const studentInfo = require('./student-info')
const studentCorporationRel = require('./student-corporation-rel')

// 建立模型关系 n -> n
corporation.belongsToMany(studentInfo, { through: studentCorporationRel })
studentInfo.belongsToMany(corporation, { through: studentCorporationRel })

// 同步模型到数据库中
sequelize.sync();

module.exports = {
  corporation,
  studentInfo
}
