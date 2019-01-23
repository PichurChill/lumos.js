describe('Cookie API:', function () {
    describe('#getCookie()', function () {
        before(function () {
            lumos.setCookie('test', 'getTestValue')
        })
        it(`outils.getCookie('test') should return 'getTestValue'`, function () {
            expect(lumos.getCookie('test')).to.be.equal('getTestValue')
        })
        it(`outils.getCookie('empty') should return ''`, function () {
            expect(lumos.getCookie('empty')).to.be.equal('')
        })
        after(function () {
            lumos.removeCookie('test')
        })
    })
})