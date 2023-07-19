const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000
const db = require('./config/mongoose')
const routes = require('./routes/index')
const methodOverride = require('method-override')

const app = express()
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs"}))
app.set("view engine", "hbs")

app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
app.use(routes)

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})
