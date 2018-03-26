const userRoleRouter = require('./user-role')
const activityRouter = require('./activity')
const announcementRouter = require('./announcement')
const leaveMessage = require('./leave-message')
const corporation = require('./corporation')
const department = require('./department')

module.exports = {
  userRoleRouter,
  announcementRouter,
  activityRouter,
  leaveMessage,
  corporation,
  department
}
