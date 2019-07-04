describe('Data API:', function () {
    // isEmpty
    describe('#isEmpty()', function () {
        it(`lumos.isEmpty('')`, function () {
            expect(lumos.isEmpty('')).to.be.equal(true)
        })
        it(`lumos.getLocalStorage(null)`, function () {
            expect(lumos.isEmpty(null)).to.be.equal(true)
        })
        it(`lumos.getLocalStorage(undefined)`, function () {
            expect(lumos.isEmpty(undefined)).to.be.equal(true)
        })
        it(`lumos.getLocalStorage(0)`, function () {
            expect(lumos.isEmpty(0)).to.be.equal(false)
        })
    })
})