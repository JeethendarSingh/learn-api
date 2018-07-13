const expect = require('chai').expect
const sinon = require('sinon');

const StubClass = require('../../demo_classes/stub_class')
const Percentage = require('../../demo_classes/percentage')


describe('StubClass', ()=>{
    it('#calculateHike adds 8 percentage', ()=>{
        const subClass = new StubClass();
        const replacementMethod = () => 8
        const stub = sinon.stub(Percentage, "hikePercentage").callsFake(replacementMethod)

        // var stub = sinon.stub()
       // stub(Percentage, 'hikePercentage').callsFake(replacementMethod)
        var new_hike = subClass.calculateHike(4,1000000)
        expect(new_hike).to.equal(1080000) 
        Percentage.hikePercentage.restore();
    })
    it('#calculateHike adds 12 percentage', ()=>{
        const subClass = new StubClass();
        const replacementMethod = () => 12
        const stub = sinon.stub(Percentage, "hikePercentage").callsFake(replacementMethod)

        // var stub = sinon.stub()
       // stub(Percentage, 'hikePercentage').callsFake(replacementMethod)
        var new_hike = subClass.calculateHike(4,1000000)
        expect(new_hike).to.equal(1120000) 

        Percentage.hikePercentage.restore();
    })
    it('#calculateHike adds 4 percentage', ()=>{
        const subClass = new StubClass();
        const replacementMethod = () => 4
        const stub = sinon.stub(Percentage, "hikePercentage").callsFake(replacementMethod)

        // var stub = sinon.stub()
       // stub(Percentage, 'hikePercentage').callsFake(replacementMethod)
        var new_hike = subClass.calculateHike(4,1000000)
        expect(new_hike).to.equal(1040000) 

        Percentage.hikePercentage.restore();
    })
    it('#calculateHike adds 0 percentage', ()=>{
        const subClass = new StubClass();
        const replacementMethod = () => 0
        const stub = sinon.stub(Percentage, "hikePercentage").callsFake(replacementMethod)

        // var stub = sinon.stub()
       // stub(Percentage, 'hikePercentage').callsFake(replacementMethod)
        var new_hike = subClass.calculateHike(4,1000000)
        expect(new_hike).to.equal(1000000) 

        Percentage.hikePercentage.restore();
    })
    
})