/*
 * @Author: 欧贺福
 * @Date: 2018-03-13 20:40:39
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-28 17:38:06
 */
const RESPONSE_STATUS = require('../config/status')
const adminModel = require('../models/admin')
const utils = require('../utils/common')
/**
 * 新建一个学生职位关联表
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function create (req, res, next) {
  let data = req.body
  adminModel.create({
    studentId: data.studentId,
    activityId: data.activityId,
    corporationId: data.corporationId
  }).then(admin => {
    res.json({
      errCode: 0,
      errMsg: RESPONSE_STATUS[0],
      value: admin
    })
  })
}
/**
 * 删除一学生职位关联表
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function deleteAdmin (req, res, next) {
  let adminId = req.query.id
  adminModel.findOne({
    where: { id: adminId }
  }).then(admin => {
    if (admin !== null) {
      adminModel.destroy({
        where: { id: adminId }
      }).then(data => {
        res.json({
          errCode: 0,
          errMsg: RESPONSE_STATUS[0],
          value: admin
        })
      })
    } else {
      res.json({
        errCode: 1,
        errMsg: RESPONSE_STATUS[1],
        value: admin
      })
    }
  })
}
/**
 * 更学生职位关联表信息
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function update (req, res, next) {
  let data = req.body
  let adminId = req.body.id
  let filedObj = {}
  for (let key in data) {
    if (key !== 'id') {
      filedObj[key] = data[key]
    }
  }
  adminModel.update(filedObj, {
    where: { id: adminId }
  }).then(admin => {
    res.json({
      errCode: 0,
      errMsg: RESPONSE_STATUS[0],
      value: admin
    })
  })
}
/**
 * 查看详情
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function view (req, res, next) {
  let adminId = req.query.id
  adminModel.findOne({
    where: { id: adminId }
  }).then(admin => {
    if (admin !== null) {
      res.json({
        errCode: 0,
        errMsg: RESPONSE_STATUS[0],
        value: admin
      })
    } else {
      res.json({
        errCode: 1,
        errMsg: RESPONSE_STATUS[1],
        value: admin
      })
    }
  })
}
/**
 * 获取管理员列表
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function adminList (req, res, next) {
  let pageSize = req.query.pageSize
  let pageNum = req.query.pageNum
  utils.getModelList(pageSize, pageNum, adminModel, {}).then(value => {
    res.json({
      errCode: 0,
      errMsg: RESPONSE_STATUS[0],
      value: value
    })
  })
}

module.exports = {
  create,
  deleteAdmin,
  update,
  view,
  adminList
}
