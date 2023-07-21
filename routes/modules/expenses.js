const express = require('express')
const router = express.Router()

const Record =require('../../models/record')
const Category = require('../../models/category')
const User = require('../../models/user')

// filter
router.get('/filter', async (req, res) => {
  try {
    const filter = req.query.category
    let records = {}
    let recordList = []
    if (filter === "所有類別") {
      const categories = await Category.find().lean()
      records = await Record.find().lean()
      recordList = records.map(record => ({
        ...record,
        icon: categories.find(category =>
          String(category._id) === String(record.categoryId)
        )?.icon
      }))
    } else {
      const categoryInfo = await Category.findOne({ name: filter }).lean()
      records = await Record.find({ categoryId: categoryInfo._id }).lean()
      console.log('records',records)
      recordList = records.map(record => ({
        ...record,
        icon: categoryInfo.icon
      }))
    }
    let totalAmount = 0
    records.forEach(record => totalAmount += Number(record.amount))
    res.render('index', {recordList, totalAmount, filter})
  } catch (error) {
    console.log(error)
  }
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
router.get('/:id/edit', async (req, res) => {
  try {
    const recordId = req.params.id
    const record = await Record.findOne({_id: recordId}).lean()
    const category = await Category.findOne({_id: record.categoryId}).lean()
    res.render("edit", {record, category})
  } catch (error) {
    console.log(error)
  } 
})

router.put('/:id', async (req, res) => {
  try {
    const { name, date, category, amount } = req.body
    const categoryInfo = await Category.findOne({ name: category }).lean()
    await Record.findByIdAndUpdate(req.params.id, {
      name: name,
      date: date,
      categoryId: categoryInfo._id,
      amount: amount
    })
    res.redirect('/')
  } catch (error) {
    console.log(error)
  }
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