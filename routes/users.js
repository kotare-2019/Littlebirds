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
      res.render('profile', profile)
    })
})

router.get('/add', (req, res) => {
  res.render('add')
})

router.post('/add', (req, res) => {
  console.log(req.body)
  // const bird = {
  //   bird_name: req.body.bird_name,
  //   Family_breed: req.body.Family_breed,
  //   image: req.body.image,
  //   Meaning: req.body.Meaning,
  // }

  db.addBird(bird)
    .then(bird => {
      console.log(bird);
      res.redirect('/profile/${bird[0]}')
    })
})

module.exports = router
