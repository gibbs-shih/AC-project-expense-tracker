const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000
const db = require('./config/mongoose')
const routes = require('./routes/index')
const methodOverride = require('method-override')
const session = require('express-session')
const usePassport = require('./config/passport')
const passport = require('./config/passport')
const flash = require('connect-flash')

const app = express()
app.engine("hbs", exphbs({ 
  defaultLayout: "main", 
  extname: ".hbs",
  helpers: {
    //compare whether two values are equal or not.
    eq: function (value1, value2) {
      return value1 === value2
    }
  }
}))

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

app.set("view engine", "hbs")

app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

passport(app)
app.use(flash())
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg')  
  res.locals.warning_msg = req.flash('warning_msg')  
  res.locals.err_msg = req.flash('err_msg')
  next()
})
app.use(routes)

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})
