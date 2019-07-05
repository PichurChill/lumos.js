describe('Strign API:', function () {
    describe('#strReplace()', function () {
        it(`lumos.strReplace()`, function () {
            let str = '13211111123'
            expect(lumos.strReplace(str, 3, 6, '******')).to.be.equal('132******23')
        })
    })
})