const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true
  }
})

module.exports = mongoose.model("Record", recordSchema)