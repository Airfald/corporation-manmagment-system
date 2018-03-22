/**
 * @Author: 欧贺福
 * @Date: 2018-03-22 16:25:19
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-22 19:12:46
 * /
/**
 * 自己封装一层通过此函数自动加上id, created_at, update_at等字段
 * @param {any} model
 */
const Sequelize = require('sequelize');
const db = require('../db');

function defineModel (modelName, modelObject) {
  modelObject.id = {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  }
  modelObject.createdAt = {
    type: Sequelize.DATE,
    allowNull: true,
  }
  modelObject.updatedAt = {
    type: Sequelize.DATE,
    allowNull: true,
  }
  for (let key in modelObject) {
    if (splitWord(key)) {
      modelObject[key]['field'] = splitWord(key)
    }
    console.log(modelObject[key])
  }
  // 创建一个模型
  let model = db.define(modelName, modelObject, {
    freezeTableName: true,      // 默认为false, 会自动改变表名称从而报错不存在改表
    timestamps: false           // 默认为true自动生成createdAt, updatedAt字段
  })
  return model
}
/**
 * 通过大写字母进行分割，然后通过传进去的字符分割
 * @param {any} string
 * @returns
 */
function splitWord (string) {
  let resultString = ''
  let letterArr = []
  let count = 0
  letterArr[count] = ''
  for (let i = 0; length = string.length,i < length; i++) {
    let letter = string.charAt(i) + ''
    if ('A' <= letter && letter <= 'Z' && i !== 0) {
      letterArr[++count] = letter
    } else {
      letterArr[count] += letter
    }
  }

  for (let i = 0; i < letterArr.length; i++) {
    letterArr[i] = letterArr[i].toLowerCase()
  }
  if (letterArr.length <= 1) {
    return null
  }
  resultString = letterArr.join('_')
  return resultString
}

module.exports = {
  defineModel
}
