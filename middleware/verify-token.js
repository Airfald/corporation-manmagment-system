const jwt = require('jsonwebtoken')
const jwtConfig = require('../config/jwtConfig')
const RESPONSE_STATUS = require('../config/status')

function verifyToken (req, res, next) {
  let token = null
  token = req.headers['accessToken'] || req.headers['accesstoken']
  if (!token) {
    res.json({
      errCode:5,
      errMsg: RESPONSE_STATUS[5]
    })
  } else {
    jwt.verify(token, jwtConfig.secret, (err, decoded) => {
      if (err) {
        if (err.message === 'jwt expired') {
          res.json({
            code: '6',
            message: RESPONSE_STATUS['6']
          })
        } else {
          res.json({
            code: '7',
            message: RESPONSE_STATUS['7'],
          })
        }
      } else {
        req.studentNumber = decoded.studentNumber
        next()
      }
    })
  }
}

module.exports = verifyToken
