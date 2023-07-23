const bcrypt = require('bcryptjs')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const db = require('../../config/mongoose')

const Category = require('../category.js')
const User = require('../user.js')
const Record = require("../record")

const seedUserList = require('../seeds/seedData/users.json')
const seedRecordList = require('../seeds/seedData/records.json')

db.once("open", async () => {
  try {
    console.log('Generating User and Record Seeders...')
    for (let i = 0; i < seedUserList.length; i++) {
      const seedUser = seedUserList[i]
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(seedUser.password, salt)
      const user = await User.create({
        name: seedUser.name,
        email: seedUser.email,
        password: hash
      })
      for (let index of seedUser.item) {
        const record = seedRecordList[index]
        record.userId = user._id
        const category = await Category.findOne({ name: record.category })
        record.categoryId = category._id
        await Record.create(record)
      }
    }
    console.log('User and Record Seeders Generated!!!')
    process.exit()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
})