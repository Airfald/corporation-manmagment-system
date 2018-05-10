/*
 * @Author: 欧贺福
 * @Date: 2018-03-13 20:40:39
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-05-10 21:09:47
 */
const RESPONSE_STATUS = require('../config/status')
const activityModel = require('../models/activity')
const studentActivityModel = require('../models/student-activity-rel')
const utils = require('../utils/common')
/**
 * 新建一个活动信息
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function create (req, res, next) {
  let data = req.body
  activityModel.create({
    name: data.name,
    address: data.address,
    description: data.description,
    time: data.time,
    chargeName: data.chargeName,
    chargeTelphone: data.chargeTelphone,
    corporation: data.corporation
  }).then(activity => {
    res.json({
      errCode: 0,
      errMsg: RESPONSE_STATUS[0],
      value: activity
    })
  })
}
/**
 * 删除一活动信息
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function deleteActivity (req, res, next) {
  let activityId = req.query.id
  activityModel.findOne({
    where: { id: activityId }
  }).then(activity => {
    if (activity !== null) {
      activityModel.destroy({
        where: { id: activityId }
      }).then(data => {
        res.json({
          errCode: 0,
          errMsg: RESPONSE_STATUS[0],
          value: activity
        })
      })
    } else {
      res.json({
        errCode: 1,
        errMsg: RESPONSE_STATUS[1],
        value: activity
      })
    }
  })
}
/**
 * 更活动信息信息
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function update (req, res, next) {
  let data = req.body
  let activityId = req.body.id
  let filedObj = {}
  for (let key in data) {
    if (key !== 'id') {
      filedObj[key] = data[key]
    }
  }
  activityModel.update(filedObj, {
    where: { id: activityId }
  }).then(activity => {
    res.json({
      errCode: 0,
      errMsg: RESPONSE_STATUS[0],
      value: activity
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
  let activityId = req.query.id
  activityModel.findOne({
    where: { id: activityId }
  }).then(activity => {
    if (activity !== null) {
      res.json({
        errCode: 0,
        errMsg: RESPONSE_STATUS[0],
        value: activity
      })
    } else {
      res.json({
        errCode: 1,
        errMsg: RESPONSE_STATUS[1],
        value: activity
      })
    }
  })
}

/**
 * 获取活动列表
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function activityList (req, res, next) {
  let pageSize = req.query.pageSize
  let pageNum = req.query.pageNum
  utils.getModelList(pageSize, pageNum, activityModel, {}).then(value => {
    res.json({
      errCode: 0,
      errMsg: RESPONSE_STATUS[0],
      value: value
    })
  })
}

// 参加活动
function joinActivity (req, res, next) {
  let data = req.body
  studentActivityModel.findOne({
    where: {
      studentId: data.studentId,
      activityId: data.activityId
    }
  }).then(joinData => {
    if (joinData === null) {
      studentActivityModel.create({
        studentId: data.studentId,
        activityId: data.activityId
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
        errMsg: '您已报名此活动，请勿重复操作！',
        value: joinData
      })
    }
  })
}

module.exports = {
  create,
  deleteActivity,
  update,
  view,
  activityList,
  joinActivity
}
