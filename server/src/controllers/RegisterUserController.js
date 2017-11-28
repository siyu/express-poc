const User = require('../models/User')

module.exports = {
  register (req, res) {
    var msg = `hello ${req.body.email}! Your user is registered!`
    console.log(msg)
    res.send({
      message: msg
    })
  }
}
