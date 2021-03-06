const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { categories, animals, starwars } = require('./routes')
const PORT = process.env.PORT || 8097

let app = express()

app
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(categories)
  .use(animals)
  .use(starwars)
  // catch 404 and forward to error handler
  .use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
  })
  // final error handler
  .use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
      message: err.message,
      error: app.get('env') === 'development' ? err : {}
    })
  })

  .listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
