if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const db = require('../../config/mongoose')

const Category = require('../category.js')
const categoryList = require('../seeds/seedData/categories.json')

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


