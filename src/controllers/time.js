import { Controller, Get } from '@decorators/express'
import * as timeZone from '../models/timeZones.json'
import _ from 'lodash'

@Controller ('/api/time')
class TimeController {
  constructor() {
    //constructor
  }
  @Get('/all-time-zones')
  async getAllTimeZones (req, res, next) {
    try {
      return res.status(200).json(timeZone)
    } catch (e) {
      return next(e)
    }
  }

  @Get('/time-zones/:name')
  async getTimeZonesByName (req, res, next) {
    try {
      const name = req.params.name,
          timeZonesByName = _.filter(timeZone, (t) => {
            const timeZonesFounds = _.filter(t.utc, (f) => {
              return f && f.indexOf(name) > -1
            })
            if (timeZonesFounds && timeZonesFounds.length) {
              return t
            }
          })
      return res.status(200).json(timeZonesByName)
    } catch (e) {
      return next(e)
    }
  }

}

export default TimeController