const express = require('express')
const router = express.Router()

const Category = require('../../models/category')
const Record = require('../../models/record')

router.get('/', async (req, res) => {
  const filter = "所有類別"
  const categories = await Category.find().lean()
  const records = await Record.find().lean().sort({ date: "asc" })
  let totalAmount = 0
  records.forEach(record => totalAmount += Number(record.amount))
  const recordList = records.map(record => ({
    ...record,
    icon: categories.find(category => 
      String(category._id) === String(record.categoryId)
      )?.icon
    }))
  res.render('index', { recordList, totalAmount, filter })
  })

module.exports = router