const jwt = require('jsonwebtoken')
const jwtConfig = require('../config/jwtConfig')
const RESPONSE_STATUS = require('../config/status')

function verifyToken (req, res, next) {
  let token = null
  let reg = new RegExp('"',"g");
  token = req.headers['accessToken'] || req.headers['accesstoken']
  token = token.replace(reg, "");
  // token = token.slice(1, token.length - 1)
  console.log('token' + token)
  console.log('---------------------------')
  if (!token) {
    res.json({
      errCode:5,
      errMsg: RESPONSE_STATUS[5]
    })
  } else {
    jwt.verify(token, jwtConfig.secret, (err, decoded) => {
      if (err) {
        console.log(err)
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
