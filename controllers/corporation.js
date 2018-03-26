/*
 * @Author: 欧贺福
 * @Date: 2018-03-13 20:40:39
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-26 20:01:35
 */
var RESPONSE_STATUS = require('../config/status')
var corporationModel = require('../models/corporation')
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

module.exports = {
  create,
  deleteCorporation,
  update,
  view
}
