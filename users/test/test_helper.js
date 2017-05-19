
const mongoose = require('mongoose')
const before = require('mocha').before
const beforeEach = require('mocha').beforeEach

mongoose.Promise = global.Promise

before((done) => {
  mongoose.connect('mongodb://localhost/users_test')
  mongoose.connection
    .once('open', () => { done() })
    .on('error', (error) => {
      console.warn('Warning', error)
    })
})

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    done()
  })
})
