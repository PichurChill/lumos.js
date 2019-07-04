describe('Date API:', function () {
    // dateFormat
    describe('#dateFormat()', function () {
        it(`lumos.dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss')`, function () {
            let date = new Date('2000-01-01 12:34:56')
            expect(lumos.dateFormat(date, 'yyyy-MM-dd hh:mm:ss')).to.be.equal('2000-01-01 12:34:56')
        })
    })
})