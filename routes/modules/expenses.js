const express = require('express')
const router = express.Router()

const Record =require('../../models/record')
const Category = require('../../models/category')
const User = require('../../models/user')

// filter
router.get('/filter', (req, res) => {

})


// create
router.get('/create', (req, res) => {
  res.render("new")
})

router.post('/', async (req, res) => {
  try {
    const {name, date, category, amount} = req.body
    const categoryInfo = await Category.findOne({name: category}).lean()
    const categoryId = categoryInfo._id
    const user = await User.find().lean() //test
    const testUserId = user[0]._id  //test
    await Record.create({ name, date, amount, userId: testUserId, categoryId})
    res.redirect("/")
  } catch (error) {
    console.log(error)
  }
})

// edit
router.get('/:id/edit', (req, res) => {
  res.render("edit")
})

router.put('/:id', (req, res) => {

})

// delete
router.delete('/:id', async (req, res) => {
  try {
    const recordId = req.params.id
    await Record.findOne({ _id: recordId }).remove()
    res.redirect('/')
  } catch (error) {
    console.log(error)
  }
})

module.exports = router