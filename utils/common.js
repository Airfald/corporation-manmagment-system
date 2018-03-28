/**
 * @Author: 欧贺福
 * @Date: 2018-03-22 16:25:19
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-28 09:24:14
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
  // return string.replace(/{[A-Z]}/, '_$1').toLowerCase()

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

async function getModelList (pageSize, pageNum, modelObject, options) {
  let hasNextPage = true
  let hasPreviousPage = true
  let total = 0
  let list = null
  pageSize = Number(pageSize)
  pageNum = Number(pageNum)
  options = Object.assign(options, {
    offset: (pageNum - 1) * pageSize,   //开始的数据索引，比如当page=2 时offset=10 ，而pagesize我们定义为10，则现在为索引为10，也就是从第11条开始返回数据条目
    limit: pageSize                     //每页限制返回的数据条数
  })

  let data = await modelObject.findAndCountAll(options)
  if (pageNum <= 1 || pageNum > Math.ceil(data.count / pageSize)) {
    hasPreviousPage = false
  }
  if (pageNum * pageSize > data.count) {
    hasNextPage = false
  }
  total = data.count
  list = data.rows

  return {
    hasPreviousPage: hasPreviousPage,
    hasNextPage:　hasNextPage,
    total: total,
    list: list
  }
}

module.exports = {
  defineModel,
  splitWord,
  getModelList
}
