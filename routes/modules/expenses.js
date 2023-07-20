const express = require('express')
const router = express.Router()


// filter
router.get('/filter', (req, res) => {

})


// create
router.get('/create', (req, res) => {
  res.render("new")
})

router.post('/', (req, res) => {

})

// edit
router.get('/:id/edit', (req, res) => {
  res.render("edit")
})

router.put('/:id', (req, res) => {

})

// delete
router.delete('/:id', (req, res) => {

})

module.exports = router