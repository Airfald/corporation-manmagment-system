/*
 * 活动信息
 * @Author: 欧贺福
 * @Date: 2018-03-13 20:40:39
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-14 13:49:48
 */
var activityModel = require('../models/activity')

// 保存和修改活动信息
function saveActivity (req, res, next) {
}

function deleteActivity (req, res, next) {

}

function viewActivity (req, res, next) {
  activityModel.findOne({
    where: { 'activityId': 1 }
  }).then(activityDetail => {
    res.json({
      errCode: 0,
      errMsg: '操作成功',
      activityDetail: activityDetail
    });
  })
}

module.exports = {
  saveActivity,
  deleteActivity,
  viewActivity
}
