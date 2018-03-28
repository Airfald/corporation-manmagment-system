/*
 * @Author: 欧贺福
 * @Date: 2018-03-13 20:40:39
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-28 18:07:48
 */
const RESPONSE_STATUS = require('../config/status')
const studentActivityRelModel = require('../models/student-activity-rel')
const utils = require('../utils/common')
/**
 * 新建一个学生活动关联表
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function create (req, res, next) {
  let data = req.body
  studentActivityRelModel.create({
    studentId: data.studentId,
    activityId: data.activityId
  }).then(studentActivityRel => {
    res.json({
      errCode: 0,
      errMsg: RESPONSE_STATUS[0],
      value: studentActivityRel
    })
  })
}
/**
 * 删除一学生活动关联表
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function deleteStudentActivityRel (req, res, next) {
  let studentActivityRelId = req.query.id
  studentActivityRelModel.findOne({
    where: { id: studentActivityRelId }
  }).then(studentActivityRel => {
    if (studentActivityRel !== null) {
      studentActivityRelModel.destroy({
        where: { id: studentActivityRelId }
      }).then(data => {
        res.json({
          errCode: 0,
          errMsg: RESPONSE_STATUS[0],
          value: studentActivityRel
        })
      })
    } else {
      res.json({
        errCode: 1,
        errMsg: RESPONSE_STATUS[1],
        value: studentActivityRel
      })
    }
  })
}
/**
 * 更学生活动关联表信息
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function update (req, res, next) {
  let data = req.body
  let studentActivityRelId = req.body.id
  let filedObj = {}
  for (let key in data) {
    if (key !== 'id') {
      filedObj[key] = data[key]
    }
  }
  studentActivityRelModel.update(filedObj, {
    where: { id: studentActivityRelId }
  }).then(studentActivityRel => {
    res.json({
      errCode: 0,
      errMsg: RESPONSE_STATUS[0],
      value: studentActivityRel
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
  let studentActivityRelId = req.query.id
  studentActivityRelModel.findOne({
    where: { id: studentActivityRelId }
  }).then(studentActivityRel => {
    if (studentActivityRel !== null) {
      res.json({
        errCode: 0,
        errMsg: RESPONSE_STATUS[0],
        value: studentActivityRel
      })
    } else {
      res.json({
        errCode: 1,
        errMsg: RESPONSE_STATUS[1],
        value: studentActivityRel
      })
    }
  })
}

/**
 * 获取学生活动的列表
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function studentActivityRelList (req, res, next) {
  let pageSize = req.query.pageSize
  let pageNum = req.query.pageNum
  utils.getModelList(pageSize, pageNum, studentActivityRelModel, {}).then(value => {
    res.json({
      errCode: 0,
      errMsg: RESPONSE_STATUS[0],
      value: value
    })
  })
}

module.exports = {
  create,
  deleteStudentActivityRel,
  update,
  view,
  studentActivityRelList
}
