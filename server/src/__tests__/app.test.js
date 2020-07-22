const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../app')
const { assert } = require('chai')

// Configure chai
chai.use(chaiHttp)

const baseUrl = '/'

describe('App', () => {
    describe(`GET ${baseUrl}`, () => {
        // Test app loads
        it('should get a response status of 200', done => {
            chai.request(app)
                .get(baseUrl)
                .end((err, resp) => {
                    assert.equal(resp.status, 200)
                    done()
                })
        })
        it('should get a string of text', done => {
            chai.request(app)
                .get(baseUrl)
                .end((err, resp) => {
                    assert.isString(resp.text)
                    done()
                })
        })
    })
})