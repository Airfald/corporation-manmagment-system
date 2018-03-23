/*
 * @Author: 欧贺福
 * @Date: 2018-03-13 20:40:39
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-23 10:22:40
 */
var RESPONSE_STATUS = require('../config/status')
var studentInfoModel = require('../models/student-info')

function login (req, res, next) {
  var studentName = req.body.name
  var studentPassword = req.body.password
  var errCode = 0
  studentInfoModel.findOne({
    where: { name: studentName }
  }).then(student => {
    console.log(studentPassword)
    if (student === null) {
      res.json({
        errCode: 1,
        errMsg: RESPONSE_STATUS[1]
      });
    }
    if (student.password !== studentPassword) {
      res.json({
        errCode: 2,
        errMsg: RESPONSE_STATUS[2]
      });
    }
    res.json({
      errCode: errCode,
      errMsg: RESPONSE_STATUS[errCode],
      value: student
    });
  });
}

function adminLogin (req, res, next) {
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

function createUser (req, res, next) {
  let data = req.body
  studentInfoModel.create({
    name: data.name,
    password: data.password,
    grade: data.grade,
    department: data.department,
    class: data.class,
    number: data.number,
    name: data.name,
    password: data.password,
    age: data.age || null,
    sex: data.sex || null,
    email: data.email || null,
    telphone: data.telphone || null
  }).then(student => {
    res.json({
      errCode: 0,
      errMsg: '操作成功',
      value: student
    })
  })
}

module.exports = {
  login,
  adminLogin,
  createUser
}
