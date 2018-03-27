/*
 * @Author: 欧贺福
 * @Date: 2018-03-13 20:40:39
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-27 17:29:00
 */
const jwt = require('jsonwebtoken')
const RESPONSE_STATUS = require('../config/status')
const studentInfoModel = require('../models/student-info')
/**
 * 用户登录 post
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function login (req, res, next) {
  let studentName = req.body.name
  let studentNumber = req.body.number
  let studentPassword = req.body.password
  studentInfoModel.findOne({
    where: { number: studentNumber }
  }).then(student => {
    if (student === null) {
      res.json({
        errCode: 1,
        errMsg: RESPONSE_STATUS[1]
      })
    }
    if (student.password !== studentPassword) {
      res.json({
        errCode: 2,
        errMsg: RESPONSE_STATUS[2]
      })
    }
    res.json({
      errCode: 0,
      errMsg: RESPONSE_STATUS[0],
      value: student,
      accessToken: jwt.sign({ number: studentNumber },
        'secret', {
          expiresIn: 60 * 60 * 24            // token过期时间: 24小时
      })
    })
  })
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
      })
    }
    if (admin.password !== adminPassword) {
      res.json({
        errCode: 2,
        errMsg: RESPONSE_STATUS[2]
      })
    }
    res.json({
      errCode: 0,
      errMsg: RESPONSE_STATUS[errCode],
      value: admin
    })
  })
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
/**
 * 获取学生列表
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function studentList (req, res, next) {
  let pageSize = Number(req.query.pageSize)
  let pageNum = Number(req.query.pageNum)
  let hasNextPage = true
  let hasPreviousPage = true

  studentInfoModel.findAndCountAll({
    // where: '',                       //为空，获取全部，也可以自己添加条件
    offset: (pageNum - 1) * pageSize,   //开始的数据索引，比如当page=2 时offset=10 ，而pagesize我们定义为10，则现在为索引为10，也就是从第11条开始返回数据条目
    limit: pageSize                     //每页限制返回的数据条数
  }).then(data => {
    if (pageNum <= 1 || pageNum > Math.ceil(data.count / pageSize)) {
      hasPreviousPage = false
    }
    if (pageNum * pageSize > data.count) {
      hasNextPage = false
    }

    res.json({
      errCode: 0,
      errMsg: RESPONSE_STATUS[0],
      value: {
        hasPreviousPage: hasPreviousPage,
        hasNextPage:　hasNextPage,
        total: data.count,
        list: data.rows
      }
    })
  })
}

module.exports = {
  login,
  adminLogin,
  createUser,
  deleteUser,
  updatedUser,
  viewUser,
  studentList
}
