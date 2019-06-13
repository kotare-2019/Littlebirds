const express = require('express')

const db = require('../db')

const router = express.Router()

// router.get('/', (req, res) => {
//   db.getUsers()
//     .then(users => {
//       res.render('index', {users: users})
//     })
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/profile/:id', (req, res) => {
  db.getBirdProfile(req.params.id)
    .then(profile => {
      res.send(profile)
    })
})
module.exports = router
