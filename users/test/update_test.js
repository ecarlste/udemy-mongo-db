const assert = require('assert')
const User = require('../src/user')
const it = require('mocha').it
const describe = require('mocha').describe
const beforeEach = require('mocha').beforeEach

describe('Updating records', () => {
  let joe

  beforeEach((done) => {
    joe = new User({name: 'Joe'})
    joe.save()
      .then(() => done())
  })

  function assertName (operation, done) {
    operation
      .then(() => User.find({}))
      .then((users) => {
        assert(users.length === 1)
        assert(users[0].name === 'Alex')
        done()
      })
  }

  it('instance type using set n save', (done) => {
    joe.set('name', 'Alex')
    assertName(joe.save(), done)
  })
})
