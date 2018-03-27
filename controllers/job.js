/*
 * @Author: 欧贺福
 * @Date: 2018-03-13 20:40:39
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-27 09:37:13
 */
const RESPONSE_STATUS = require('../config/status')
const jobModel = require('../models/job')
/**
 * 新建一个职位
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function create (req, res, next) {
  let data = req.body
  jobModel.create({
    departmentId: data.departmentId,
    name: data.name,
    description: data.description
  }).then(job => {
    res.json({
      errCode: 0,
      errMsg: RESPONSE_STATUS[0],
      value: job
    })
  })
}
/**
 * 删除一职位
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function deleteJob (req, res, next) {
  let jobId = req.query.id
  jobModel.findOne({
    where: { id: jobId }
  }).then(job => {
    if (job !== null) {
      jobModel.destroy({
        where: { id: jobId }
      }).then(data => {
        res.json({
          errCode: 0,
          errMsg: RESPONSE_STATUS[0],
          value: job
        })
      })
    } else {
      res.json({
        errCode: 1,
        errMsg: RESPONSE_STATUS[1],
        value: job
      })
    }
  })
}
/**
 * 更职位信息
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function update (req, res, next) {
  let data = req.body
  let jobId = req.body.id
  let filedObj = {}
  for (let key in data) {
    if (key !== 'id') {
      filedObj[key] = data[key]
    }
  }
  jobModel.update(filedObj, {
    where: { id: jobId }
  }).then(job => {
    res.json({
      errCode: 0,
      errMsg: RESPONSE_STATUS[0],
      value: job
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
  let jobId = req.query.id
  jobModel.findOne({
    where: { id: jobId }
  }).then(job => {
    if (job !== null) {
      res.json({
        errCode: 0,
        errMsg: RESPONSE_STATUS[0],
        value: job
      })
    } else {
      res.json({
        errCode: 1,
        errMsg: RESPONSE_STATUS[1],
        value: job
      })
    }
  })
}

module.exports = {
  create,
  deleteJob,
  update,
  view
}
