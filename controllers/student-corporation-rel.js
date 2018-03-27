/*
 * @Author: 欧贺福
 * @Date: 2018-03-13 20:40:39
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-27 11:02:17
 */
const RESPONSE_STATUS = require('../config/status')
const studentCorporationRelModel = require('../models/student-corporation-rel')
/**
 * 新建一个学生社团关联表
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function create (req, res, next) {
  let data = req.body
  studentCorporationRelModel.create({
    studentId: data.studentId,
    corporationId: data.corporationId
  }).then(studentCorporationRel => {
    res.json({
      errCode: 0,
      errMsg: RESPONSE_STATUS[0],
      value: studentCorporationRel
    })
  })
}
/**
 * 删除一学生社团关联表
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function deleteStudentCorporationRel (req, res, next) {
  let studentCorporationRelId = req.query.id
  studentCorporationRelModel.findOne({
    where: { id: studentCorporationRelId }
  }).then(studentCorporationRel => {
    if (studentCorporationRel !== null) {
      studentCorporationRelModel.destroy({
        where: { id: studentCorporationRelId }
      }).then(data => {
        res.json({
          errCode: 0,
          errMsg: RESPONSE_STATUS[0],
          value: studentCorporationRel
        })
      })
    } else {
      res.json({
        errCode: 1,
        errMsg: RESPONSE_STATUS[1],
        value: studentCorporationRel
      })
    }
  })
}
/**
 * 更学生社团关联表信息
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function update (req, res, next) {
  let data = req.body
  let studentCorporationRelId = req.body.id
  let filedObj = {}
  for (let key in data) {
    if (key !== 'id') {
      filedObj[key] = data[key]
    }
  }
  studentCorporationRelModel.update(filedObj, {
    where: { id: studentCorporationRelId }
  }).then(studentCorporationRel => {
    res.json({
      errCode: 0,
      errMsg: RESPONSE_STATUS[0],
      value: studentCorporationRel
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
  let studentCorporationRelId = req.query.id
  studentCorporationRelModel.findOne({
    where: { id: studentCorporationRelId }
  }).then(studentCorporationRel => {
    if (studentCorporationRel !== null) {
      res.json({
        errCode: 0,
        errMsg: RESPONSE_STATUS[0],
        value: studentCorporationRel
      })
    } else {
      res.json({
        errCode: 1,
        errMsg: RESPONSE_STATUS[1],
        value: studentCorporationRel
      })
    }
  })
}

module.exports = {
  create,
  deleteStudentCorporationRel,
  update,
  view
}
