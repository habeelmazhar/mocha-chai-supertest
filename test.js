var chai = require('chai');
var request = require('supertest-session');

var expect = chai.expect;

request = request('http://localhost:3000');

var app = null;

beforeEach(function () {
    app = request;
});

// describe('Owner controller', () => {
//     it('should log in', (done) => {
//         app.post('/owner/login')
//             .send({ email: 'admin@admin.com', password: '123123' })
//             .set('Accept', 'application/json')
//             .end((err, res) => {
//                 expect(res.body.status).to.be.a.string('success');
//                 done();
//             })
//     })

//     // it('should create admin', (done) => {
//     //     app.post('/owner/admin')
//     //         .send({ email: 'test@admin.com', password: '123123' })
//     //         .set('Accept', 'application/json')
//     //         .end((err, res) => {
//     //             expect(res.body.status).to.be.a.string('success');
//     //             done();
//     //         })
//     // })
// });


describe('Admin controller', () => {
    it('should log in', (done) => {
        app.post('/admin/login')
            .send({ email: 'test@admin.com', password: '123123' })
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.body.status).to.be.a.string('success');
                done();
            })
    })

    it('should create facilitator', (done) => {
        app.post('/admin/facilitator')
            .send({ email: 'test@facilitator.com', password: '123123' })
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.body.email).to.be.a.string('test@facilitator.com');
                done();
            })
    })
});