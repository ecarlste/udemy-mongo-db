const assert = require('assert')
const User = require('../src/user')
const it = require('mocha').it
const describe = require('mocha').describe

describe('Virtual types', () => {
  it('postCount returns number of posts', (done) => {
    const joe = new User({
      name: 'Joe',
      posts: [{title: 'PostTitle'}]
    })

    joe.save()
      .then(() => User.findOne({name: 'Joe'}))
      .then(() => {
        assert(joe.postCount === 1)
        done()
      })
  })
})
