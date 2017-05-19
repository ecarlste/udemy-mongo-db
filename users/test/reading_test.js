const assert = require('assert')
const User = require('../src/user')
const beforeEach = require('mocha').beforeEach
const describe = require('mocha').describe
const it = require('mocha').it

describe('Reading users out of the database', () => {
  let joe

  beforeEach((done) => {
    joe = new User({ name: 'Joe' })
    joe.save()
      .then(() => done())
  })

  it('finds all users with a name of joe', (done) => {
    User.find({ name: 'Joe' })
      .then((users) => {
        assert(users[0]._id.toString() === joe._id.toString())
        done()
      })
  })
})
