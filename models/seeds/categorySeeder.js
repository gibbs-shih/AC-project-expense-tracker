if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const db = require('../../config/mongoose')

const Category = require('../category.js')

const categoryList = [
  { name: "家居物業" },
  { name: "交通出行" },
  { name: "休閒娛樂" },
  { name: "餐飲食品" },
  { name: "其他" },
]

db.once("open", async() => {
  try {
    console.log('Generating Category Seeders...')
    await Category.insertMany(categoryList)
    console.log('Category Seeders Generated!!!')
    process.exit()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
})


