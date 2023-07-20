if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const db = require('../../config/mongoose')

const Category = require('../category.js')
const User = require('../user.js')
const Record = require("../record")

const SEED_USERS = [
  {
    name: '廣治',
  },
  {
    name: '小新',
  }
]