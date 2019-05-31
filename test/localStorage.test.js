describe('LocalStorage API:', function () {
    describe('#getLocalstorage()', function () {
        before(function () {
            lumos.setLocalStorage('test', 'value')
        })
        it(`lumos.getLocalStorage('test')`, function () {
            expect(lumos.getLocalStorage('test')).to.be.equal('value')
        })
        it(`lumos.getLocalStorage('empty')`, function () {
            expect(lumos.getLocalStorage('empty')).to.be.equal('')
        })
        after(function () {
            lumos.removeLocalStorage('test')
        })
    })

    describe('#setLocalStorage()', function () {
        it(`lumos.setLocalStorage('test', 'value')`, function () {
            lumos.setLocalStorage('test', 'value') 
            expect(lumos.getLocalStorage('test')).to.be.equal('value')
        })
        after(function () {
            lumos.removeLocalStorage('test')
        })
    })

    // 测试过期时间
    describe('#setLocalStorage() expire days', function () {
        it(`lumos.setLocalStorage('test', 'value')`, function (done) {
            lumos.setLocalStorage('test', 'value', 0.00001) // expire in 0.86s
            setTimeout(() => {
                expect(lumos.getLocalStorage('test')).to.be.equal('')
                done()
            }, 1000);
        })
        after(function () {
            lumos.removeLocalStorage('test')
        })
    })

    describe('#removeLocalStorage()', function () {
        before(function () {
            lumos.setLocalStorage('test', 'value')
        })
        it(`lumos.removeLocalStorage('test')`, function () {
            lumos.removeLocalStorage('test')
            expect(lumos.getLocalStorage('test')).to.not.equal('value')
        })
        after(function () {
            lumos.removeLocalStorage('test')
        })
    })
})