const errorHandler = () => {
  return (err, req, res, next) => {
    if (err) {
      return res.status(500).json({ error: err })
    }
  }
}
module.exports =  errorHandler
