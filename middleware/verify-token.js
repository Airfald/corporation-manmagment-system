const jwt = require('jsonwebtoken')
var RESPONSE_STATUS = require('../config/status')

function verifyToken (req, res, next) {
  let token = null
  token = req.headers['accessToken']

  if (!token) {
    res.json({
      errCode:5,
      errMsg: RESPONSE_STATUS[5]
    })
  }

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
          message: RESPONSE_STATUS['7']
        })
      }
    } else {
      req.username = decoded.username
      next()
    }
  })
}

module.exports = verifyToken
