/*
 * @Author: 欧贺福
 * @Date: 2018-03-28 15:55:04
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-03-28 16:15:04
 */
const userRole = require('./user-role')
const admin = require('./admin')
const activity = require('./activity')
const announcement = require('./announcement')
const corporation = require('./corporation')
const department = require('./department')
const job = require('./job')
const leaveMessage = require('./leave-message')
const studentActivityRel = require('./student-activity-rel')
const studentCorporationRel = require('./student-corporation-rel')
const studentJobRel = require('./student-job-rel')

module.exports = {
  userRole,
  admin,
  announcement,
  activity,
  corporation,
  department,
  job,
  leaveMessage,
  studentActivityRel,
  studentCorporationRel,
  studentJobRel
}
