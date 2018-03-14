/*
 * @Author: 欧贺福
 * @Date: 2018-03-13 20:40:39
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-14 10:39:09
 */
var studentInfoModel = require('../models/student-info')

function login (req, res, next) {
  studentInfoModel.findAll({
    where: {'name': '欧贺福'},
    attributes: ['id', 'name']
  }).then(student => {
    res.json({
      errCode: 0,
      errMsg: '操作成功',
      list: student
    });
  });
}

function adminLogin (req, res, next) {
  studentInfoModel.findAll({
    where: {'name': '欧贺福'}
  }).then(student => {
    res.json({
      errCode: 0,
      errMsg: '操作成功',
      list: student
    });
  });
}

module.exports = {
  login,
  adminLogin
}
