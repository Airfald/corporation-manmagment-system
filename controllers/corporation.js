/*
 * @Author: 欧贺福
 * @Date: 2018-03-13 20:40:39
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-05-10 19:47:48
 */
const RESPONSE_STATUS = require('../config/status')
const corporationModel = require('../models/corporation')
const studentCorporationModel = require('../models/student-corporation-rel')
const utils = require('../utils/common')
/**
 * 新建一个社团
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function create (req, res, next) {
  let data = req.body
  corporationModel.create({
    name: data.name,
    description: data.description
  }).then(corporation => {
    res.json({
      errCode: 0,
      errMsg: RESPONSE_STATUS[0],
      value: corporation
    })
  })
}
/**
 * 删除一个社团
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function deleteCorporation (req, res, next) {
  let corporationId = req.query.id
  corporationModel.findOne({
    where: { id: corporationId }
  }).then(corporation => {
    if (corporation !== null) {
      corporationModel.destroy({
        where: { id: corporationId }
      }).then(data => {
        res.json({
          errCode: 0,
          errMsg: RESPONSE_STATUS[0],
          value: corporation
        })
      })
    } else {
      res.json({
        errCode: 1,
        errMsg: RESPONSE_STATUS[1],
        value: corporation
      })
    }
  })
}
/**
 * 更新社团信息
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function update (req, res, next) {
  let data = req.body
  let corporationId = req.body.id
  let filedObj = {}
  for (let key in data) {
    if (key !== 'id') {
      filedObj[key] = data[key]
    }
  }
  corporationModel.update(filedObj, {
    where: { id: corporationId }
  }).then(corporation => {
    res.json({
      errCode: 0,
      errMsg: RESPONSE_STATUS[0],
      value: corporation
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
  let corporationId = req.query.id
  corporationModel.findOne({
    where: { id: corporationId }
  }).then(corporation => {
    res.json({
      errCode: 0,
      errMsg: RESPONSE_STATUS[0],
      value: corporation
    })
  })
}
/**
 * 获取社团的列表
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function corporationList (req, res, next) {
  let pageSize = req.query.pageSize
  let pageNum = req.query.pageNum
  if (pageSize && pageNum) {
    utils.getModelList(pageSize, pageNum, corporationModel, {}).then(value => {
      res.json({
        errCode: 0,
        errMsg: RESPONSE_STATUS[0],
        value: value
      })
    })
  }
}

// 参加社团
function joinCorporation (req, res, next) {
  let data = req.body
  studentCorporationModel.findOne({
    where: {
      studentId: data.studentId,
      corporationId: data.corporationId
    }
  }).then(joinData => {
    if (joinData == null) {
      studentCorporationModel.create({
        studentId: data.studentId,
        corporationId: data.corporationId
      }).then(data => {
        res.json({
          errCode: 0,
          errMsg: RESPONSE_STATUS[0],
          value: joinData
        })
      })
    } else {
      res.json({
        errCode: 9,
        errMsg: '您已报名此社团，请勿重复操作！',
        value: joinData
      })
    }
  })
}

module.exports = {
  create,
  deleteCorporation,
  update,
  view,
  corporationList,
  joinCorporation
}
