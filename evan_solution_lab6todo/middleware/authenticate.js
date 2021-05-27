const jwt = require('jsonwebtoken')
const User = require('../models/User')

const authenticate = (req, res, next) => {
  const authorization = req.header('Authorization') || ''
  const [type, token] = authorization.split(' ')

  try {
    if (type === 'Bearer' && jwt.verify(token, 'CHANGEME!')) {
      const payload = jwt.decode(token, 'CHANGEME!')

      User.findOne({ _id: payload._id }, (err, userDoc) => {
        if (err) return res.status(500).send({errorMsg: 'something went wrong'})
        req.user = userDoc
        return next()
      })
    } else {
      return res.status(401).send({ errorMsg: 'Unauthorized' })
    }
  } catch (err) {
    return res.status(401).send({ errorMsg: 'Unauthorized' })
  }
}

module.exports = authenticate
