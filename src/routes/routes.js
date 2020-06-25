import TimeController from '../controllers/time'
import { attachControllers } from '@decorators/express'
import errorHandler from '../middlewares/error'

class CustomRoutes {
  constructor (app) {
    this.app = app
  }
  createRoutes () {
    attachControllers(this.app, [
      TimeController,
    ])
    this.app.use(errorHandler())
  }
}

export default CustomRoutes