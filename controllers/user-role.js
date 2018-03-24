/*
 * @Author: 欧贺福
 * @Date: 2018-03-13 20:40:39
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-24 14:42:37
 */
var RESPONSE_STATUS = require('../config/status')
var studentInfoModel = require('../models/student-info')
/**
 * 用户登录 post
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function login (req, res, next) {
  var studentName = req.body.name
  var studentNumber = req.body.number
  var studentPassword = req.body.password
  studentInfoModel.findOne({
    where: { number: studentNumber }
  }).then(student => {
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
      errCode: 0,
      errMsg: RESPONSE_STATUS[0],
      value: student
    });
  });
}

/**
 * 管理员登录 post
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function adminLogin (req, res, next) {
  var adminName = req.body.name
  var adminNumber = req.body.number
  var adminPassword = req.body.password
  adminInfoModel.findOne({
    where: { number: adminNumber }
  }).then(admin => {
    if (admin === null) {
      res.json({
        errCode: 1,
        errMsg: RESPONSE_STATUS[1]
      });
    }
    if (admin.password !== adminPassword) {
      res.json({
        errCode: 2,
        errMsg: RESPONSE_STATUS[2]
      });
    }
    res.json({
      errCode: 0,
      errMsg: RESPONSE_STATUS[errCode],
      value: admin
    });
  });
}
/**
 * 创建一个用户 post
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function createUser (req, res, next) {
  let data = req.body
  studentInfoModel.findOne({
    where: { number: data.number }
  }).then(student => {
    if (student === null) {
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
          errMsg: RESPONSE_STATUS[0],
          value: student
        })
      })
    } else {
      res.json({
        errCode: 3,
        errMsg: RESPONSE_STATUS[3]
      })
    }
  })
}
/**
 * 删除客户 get
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function deleteUser (req, res, next) {
  let studentId = req.query.id
  studentInfoModel.findOne({
    where: { id: studentId }
  }).then(student => {
    if (student !== null) {
      studentInfoModel.destroy({
        where: { id: studentId }
      }).then(data => {
        res.json({
          errCode: 0,
          errMsg: RESPONSE_STATUS[0]
        })
      })
    } else {
      res.json({
        errCode: 1,
        errMsg: RESPONSE_STATUS[1]
      })
    }
  })
}
/**
 * 更新用户数据 post
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function updatedUser (req, res, next) {
  let data = req.body
  let studentId = req.body.id
  let filedObj = {}
  for (let key in data) {
    if (key !== 'id') {
      filedObj[key] = data[key]
    }
  }
  studentInfoModel.update(filedObj, {
    where: { id: studentId }
  }).then(student => {
    res.json({
      errCode: 0,
      errMsg: RESPONSE_STATUS[0],
      value: student
    })
  })
}
/**
 * 查看用户信息
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function viewUser (req, res, next) {
  let studentId = req.query.id
  studentInfoModel.findOne({
    where: { id: studentId }
  }).then(student => {
    if (student === null) {
      res.json({
        errCode: 1,
        errMsg: RESPONSE_STATUS[1]
      })
    } else {
      res.json({
        errCode: 0,
        errMsg: RESPONSE_STATUS[0],
        value: student
      })
    }
  })
}

module.exports = {
  login,
  adminLogin,
  createUser,
  deleteUser,
  updatedUser,
  viewUser
}
