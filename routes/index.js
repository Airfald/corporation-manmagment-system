const userRole = require('./user-role')
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
