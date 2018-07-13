var chai = require('chai');
var sinon = require('sinon');
chai.use(require('sinon-chai'));
var expect = chai.expect;
const testMe = require('../../demo_classes/spy_demo')


describe('testMe function', ()=>{
    it('#testMe', ()=>{
        let callBackSpy = sinon.spy();
        testMe(callBackSpy)
        expect(callBackSpy).to.have.been.calledOnce
    })
})