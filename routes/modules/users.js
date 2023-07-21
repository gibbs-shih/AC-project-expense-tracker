const express = require('express')
const router = express.Router()
const passport = require('passport')
const User = require('../../models/user')

router.get('/login', (req, res) => {
  res.render('login')
})
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login'
}))

router.get('/register', (req, res) => {
  res.render('register')
})
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body
    const user = await User.findOne({email}).lean()
    if (user) {
      console.log('User already exists.')
      res.render('register', {
        name,
        email,
        password,
        confirmPassword
      })
    } else {
      await User.create({
        name,
        email,
        password
      })
      res.redirect('/')
    } 
  } catch (error) {
    console.log(error)
  }
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/users/login')
})

module.exports = router