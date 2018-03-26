/*
 * @Author: 欧贺福
 * @Date: 2018-03-13 20:40:39
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-26 20:49:08
 */
const RESPONSE_STATUS = require('../config/status')
const departmentModel = require('../models/department')
/**
 * 新建一个部门
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function create (req, res, next) {
  let data = req.body
  departmentModel.create({
    corporationId: data.corporationId,
    name: data.name,
    description: data.description
  }).then(department => {
    res.json({
      errCode: 0,
      errMsg: RESPONSE_STATUS[0],
      value: department
    })
  })
}
/**
 * 删除一部门
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function deleteDepartment (req, res, next) {
  let departmentId = req.query.id
  departmentModel.findOne({
    where: { id: departmentId }
  }).then(department => {
    if (department !== null) {
      departmentModel.destroy({
        where: { id: departmentId }
      }).then(data => {
        res.json({
          errCode: 0,
          errMsg: RESPONSE_STATUS[0],
          value: department
        })
      })
    } else {
      res.json({
        errCode: 1,
        errMsg: RESPONSE_STATUS[1],
        value: department
      })
    }
  })
}
/**
 * 更部门信息
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function update (req, res, next) {
  let data = req.body
  let departmentId = req.body.id
  let filedObj = {}
  for (let key in data) {
    if (key !== 'id') {
      filedObj[key] = data[key]
    }
  }
  departmentModel.update(filedObj, {
    where: { id: departmentId }
  }).then(department => {
    res.json({
      errCode: 0,
      errMsg: RESPONSE_STATUS[0],
      value: department
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
  let departmentId = req.query.id
  departmentModel.findOne({
    where: { id: departmentId }
  }).then(department => {
    if (department !== null) {
      res.json({
        errCode: 0,
        errMsg: RESPONSE_STATUS[0],
        value: department
      })
    } else {
      res.json({
        errCode: 1,
        errMsg: RESPONSE_STATUS[1],
        value: department
      })
    }
  })
}

module.exports = {
  create,
  deleteDepartment,
  update,
  view
}
