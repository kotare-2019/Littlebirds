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
  db.getBirds()
    .then(birds => {
      console.log(birds[0])
      res.render('index', { birds })
    })

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
  const bird = {
    bird_name: req.body.name,
    Family_breed: req.body.family,
    image: req.body.image,
    Meaning: req.body.bio,
  }
  const location = {
    Location: req.body.location
  }

  db.addBird(bird, location)
    .then(bird => {
      db.addLocation(location)
      console.log(bird);
      res.redirect('/')
    })
})

module.exports = router
