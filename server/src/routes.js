const HomeController = require('./controllers/HomeController')
const RegisterUserController = require('./controllers/RegisterUserController')

module.exports = (app) => {
  app.get('/', HomeController.home)

  app.post('/register', RegisterUserController.register)
}
