const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../app')
const { expect, assert } = require('chai')

// Configure chai
chai.use(chaiHttp)
chai.should()

const dataURL = '/v1/data'

describe('User Data', () => {
    describe(`GET ${dataURL}`, () => {
        // Test to get all user data
        it('should have response status of 200', done => {
            chai.request(app)
                .get(dataURL)
                .end((err, resp) => {
                    assert.equal(resp.status, 200)
                    done()
                })
        })
        it('should get all user data', done => {
            chai.request(app)
                .get(dataURL)
                .end((err, resp) => {
                    assert.isArray(resp.body, 'Expected resp.body to be an array')
                    done()
                })
        })
        it('should get user data tab names', done => {
            chai.request(app)
                .get(dataURL)
                .end((err, resp) => {
                    resp.body.map(obj => {
                        assert.include(['home', 'about', 'projects', 'more'], obj.name)
                    })
                    done()
                })
        })
        it('should get user data tab text values', done => {
            chai.request(app)
                .get(dataURL)
                .end((err, resp) => {
                    resp.body.map(obj => {
                        obj.value.map(text => {
                            assert.isString(text)
                            assert.notInclude(text, '\r')
                            assert.notInclude(text, '\n')
                        })
                    })
                    done()
                })
        })
    })
})