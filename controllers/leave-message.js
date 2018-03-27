/*
 * @Author: 欧贺福
 * @Date: 2018-03-13 20:40:39
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-27 09:44:01
 */
const RESPONSE_STATUS = require('../config/status')
const leaveMessageModel = require('../models/leave-message')
/**
 * 新建一个留言
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function create (req, res, next) {
  let data = req.body
  leaveMessageModel.create({
    studentId: data.studentId,
    corporationId: data.corporationId,
    content: data.content
  }).then(leaveMessage => {
    res.json({
      errCode: 0,
      errMsg: RESPONSE_STATUS[0],
      value: leaveMessage
    })
  })
}
/**
 * 删除一留言
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function deleteLeaveMessage (req, res, next) {
  let leaveMessageId = req.query.id
  leaveMessageModel.findOne({
    where: { id: leaveMessageId }
  }).then(leaveMessage => {
    if (leaveMessage !== null) {
      leaveMessageModel.destroy({
        where: { id: leaveMessageId }
      }).then(data => {
        res.json({
          errCode: 0,
          errMsg: RESPONSE_STATUS[0],
          value: leaveMessage
        })
      })
    } else {
      res.json({
        errCode: 1,
        errMsg: RESPONSE_STATUS[1],
        value: leaveMessage
      })
    }
  })
}
/**
 * 更留言信息
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
function update (req, res, next) {
  let data = req.body
  let leaveMessageId = req.body.id
  let filedObj = {}
  for (let key in data) {
    if (key !== 'id') {
      filedObj[key] = data[key]
    }
  }
  leaveMessageModel.update(filedObj, {
    where: { id: leaveMessageId }
  }).then(leaveMessage => {
    res.json({
      errCode: 0,
      errMsg: RESPONSE_STATUS[0],
      value: leaveMessage
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
  let leaveMessageId = req.query.id
  leaveMessageModel.findOne({
    where: { id: leaveMessageId }
  }).then(leaveMessage => {
    if (leaveMessage !== null) {
      res.json({
        errCode: 0,
        errMsg: RESPONSE_STATUS[0],
        value: leaveMessage
      })
    } else {
      res.json({
        errCode: 1,
        errMsg: RESPONSE_STATUS[1],
        value: leaveMessage
      })
    }
  })
}

module.exports = {
  create,
  deleteLeaveMessage,
  update,
  view
}
