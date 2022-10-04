describe('myFirstTestCase', () => {

    it.only('firstTestCase', () => {
        expect(true).to.equal(true)
    })

    it('secondTestCase', () => {
        expect(true).to.equal(false)
    })
    it('ThirdTestCase', () => {
        expect(true).equal(true)
    })
});