/*
 * 返回状态码与消息
 *
 * @Author: Junkai Chen
 * @Date: 2017-11-06 10:45:20
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-13 20:39:03
 */

const RESPONSE_STATUS = {
  '0000': '请求成功',
  '0001': '用户不存在',
  '0002': '用户名为空',
  '0003': '用户已存在',
  '0004': '密码为空',
  '0005': '密码错误',
  '0006': 'token不能为空',
  '0007': 'token校验失败',
  '0008': 'token已失效',
  '0009': '字段值不能为空',
  '0010': 'url不合格式',
  '0011': '该仓库没有任何tags',
  '0100': '该接口无效'
};

module.exports = RESPONSE_STATUS;
