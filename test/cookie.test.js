describe('Cookie API:', function () {
    describe('#getCookie()', function () {
        before(function () {
            lumos.setCookie('test', 'value')
        })
        it(`lumos.getCookie('test')`, function () {
            expect(lumos.getCookie('test')).to.be.equal('value')
        })
        it(`lumos.getCookie('empty')`, function () {
            expect(lumos.getCookie('empty')).to.be.equal('')
        })
        after(function () {
            lumos.removeCookie('test')
        })
    })

    describe('#setCookie()', function () {
        it(`lumos.setCookie('test', 'value')`, function () {
            lumos.setCookie('test', 'value')
            expect(lumos.getCookie('test')).to.be.equal('value')
        })
        after(function () {
            lumos.removeCookie('test')
        })
    })

    describe('#removeCookie()', function () {
        before(function () {
            lumos.setCookie('test', 'value')
        })
        it(`lumos.removeCookie('test')`, function () {
            lumos.removeCookie('test')
            expect(lumos.getCookie('test')).to.not.equal('value')
        })
        after(function () {
            lumos.removeCookie('test')
        })
    })
})