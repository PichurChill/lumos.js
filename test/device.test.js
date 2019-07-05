describe('Device API:', function () {
    // getBrowser
    describe('#getBrowser()', function () {
        it(`lumos.getBrowser()`, function () {
            expect(lumos.getBrowser().name).to.be.equal('chrome')
        })
    })

    // getOS
    describe('#getOS()', function () {
        it(`lumos.getOS()`, function () {    
            expect(lumos.getOS().name).to.have.oneOf(['ios', 'android', 'windowsPhone', 'macOSX', 'linux', 'windows'])
        })
    })
})