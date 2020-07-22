const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../app')
const { assert } = require('chai')

// Configure chai
chai.use(chaiHttp)

const baseUrl = '/v1/quotes'

describe('Quotes Data', () => {
    describe(`GET ${baseUrl}`, () => {
        // Test to get all quotes
        it('should have response status of 200', done => {
            chai.request(app)
                .get(baseUrl)
                .end((err, resp) => {
                    assert.equal(resp.status, 200)
                    done()
                })
        })
        it('should get all quotes', done => {
            chai.request(app)
                .get(baseUrl)
                .end((err, resp) => {
                    assert.isObject(resp.body)
                    assert.isArray(resp.body.quotes)
                    done()
                })
        })
        it('should get all quotes as strings', done => {
            chai.request(app)
                .get(baseUrl)
                .end((err, resp) => {
                    resp.body.quotes.map(obj => {
                        assert.isString(obj.quote)
                    })
                    done()
                })
        })
        it('should get all quote authors as strings', done => {
            chai.request(app)
                .get(baseUrl)
                .end((err, resp) => {
                    resp.body.quotes.map(obj => {
                        assert.isString(obj.author)
                    })
                    done()
                })
        })
    })

    const randomUrl = `${baseUrl}/random`
    describe(`GET ${randomUrl}`, () => {
        // Test to get a random quote
        it('should get a random quote', done => {
            chai.request(app)
                .get(randomUrl)
                .end((err, resp) => {
                    assert.isObject(resp.body)
                    done()
                })
        })
        it('should get a random quote and contain a quote string', done => {
            chai.request(app)
                .get(randomUrl)
                .end((err, resp) => {
                    assert.isString(resp.body.quote)
                    done()
                })
        })
        it('should get a random quote and contain an author string', done => {
            chai.request(app)
                .get(randomUrl)
                .end((err, resp) => {
                    assert.isString(resp.body.author)
                    done()
                })
        })
        it('should get a random quote and contain an id integer', done => {
            chai.request(app)
                .get(randomUrl)
                .end((err, resp) => {
                    assert.isNumber(resp.body.id)
                    done()
                })
        })
    })

    const singleUrl = `${baseUrl}/5`
    describe(`GET ${singleUrl}`, () => {
        // Test to get a single quote with an id of 5
        it('should get a quote with an id of 5', done => {
            chai.request(app)
                .get(singleUrl)
                .end((err, resp) => {
                    assert.isObject(resp.body)
                    done()
                })
        })
        it('should get a single quote and contain a quote string', done => {
            chai.request(app)
                .get(randomUrl)
                .end((err, resp) => {
                    assert.isString(resp.body.quote)
                    done()
                })
        })
        it('should get a single quote and contain an author string', done => {
            chai.request(app)
                .get(randomUrl)
                .end((err, resp) => {
                    assert.isString(resp.body.author)
                    done()
                })
        })
        it('should get a single quote and contain an id integer', done => {
            chai.request(app)
                .get(randomUrl)
                .end((err, resp) => {
                    assert.isNumber(resp.body.id)
                    done()
                })
        })
    })
})