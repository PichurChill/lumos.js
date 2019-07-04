describe('LocalStorage API:', function () {
    // getLocalstorage
    describe('#getLocalstorage()', function () {
        before(function () {
            lumos.setLocalStorage('testKey', 'testValue')
        })
        it(`lumos.getLocalStorage('testKey')`, function () {
            expect(lumos.getLocalStorage('testKey')).to.be.equal('testValue')
        })
        it(`lumos.getLocalStorage('emptyKey')`, function () {
            expect(lumos.getLocalStorage('emptyKey')).to.be.equal('')
        })
        after(function () {
            lumos.removeLocalStorage('testKey')
        })
    })

    describe('#setLocalStorage()', function () {
        it(`lumos.setLocalStorage('testKey', 'testValue')`, function () {
            lumos.setLocalStorage('testKey', 'testValue') 
            expect(lumos.getLocalStorage('testKey')).to.be.equal('testValue')
        })
        after(function () {
            lumos.removeLocalStorage('testKey')
        })
    })

    // 测试过期时间
    describe('#setLocalStorage() expire days', function () {
        it(`lumos.setLocalStorage('testKey', 'testValue')`, function (done) {
            lumos.setLocalStorage('testKey', 'testValue', 0.00001) // expire in 0.86s
            setTimeout(() => {
                expect(lumos.getLocalStorage('testKey')).to.be.equal('')
                done()
            }, 1000);
        })
        after(function () {
            lumos.removeLocalStorage('testKey')
        })
    })

    describe('#removeLocalStorage()', function () {
        before(function () {
            lumos.setLocalStorage('testKey', 'testValue')
        })
        it(`lumos.removeLocalStorage('testKey')`, function () {
            lumos.removeLocalStorage('testKey')
            expect(lumos.getLocalStorage('testKey')).to.not.equal('testValue')
        })
        after(function () {
            lumos.removeLocalStorage('testKey')
        })
    })
})