/*
 * @Author: 欧贺福
 * @Date: 2018-03-13 20:40:39
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-14 14:45:24
 */
var leaveMessageModel = require('../models/leave-message')

// 保存和修改留言
function leaveMessageSave (req, res, next) {
      res.json({
        errCode: 0,
        errMsg: '添加成功',
        value: req.body
      });
      console.log('-----------------req------------------')
      console.log(req)
  // leaveMessageModel
  //   .create({
  //     studentId: 14420123,
  //     studentName: "欧贺福",
  //     description: "社团管理系统越来愈好了2",
  //     createdAt: Date.now(),
  //     updatedAt: Date.now()
  //   })
  //   .then(result => {
  //     res.json({
  //       errCode: 0,
  //       errMsg: '添加成功',
  //       value: result
  //     });
  //   })
}

function leaveMessageDelete (req, res, next) {

}

function leaveMessageView (req, res, next) {
  leaveMessageModel
    .findAndCount()
    .then(messageList => {
      res.json({
        errCode: 0,
        errMsg: '操作成功',
        value: messageList
      });
    })
}

module.exports = {
  leaveMessageSave,
  leaveMessageDelete,
  leaveMessageView
}
