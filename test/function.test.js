describe('Function API:', function () {
    // debounce
    describe('#debounce()', function () {
        const debounce = lumos.debounce
        it(`lumos.debounce(30,function(){return true})`, function (done) {
            let num = 0
            let interval = null
            let debounced = debounce(30, function () {
                num++
                return true
            })
            interval = setInterval(function () {
                debounced()
            }, 20)

            setTimeout(function () {
                clearInterval(interval)
            }, 21)

            setTimeout(() => {
                expect(num).to.be.equal(1)
                done() 
            }, 60); // 50 will fail
        })

        it(`lumos.debounce(500,true,function(){return true})`, function (done) {
            let num = 0
            let interval = null
            let debounced = debounce(500, true, function () {
                num++
                return true
            })
            interval = setInterval(function () {
                debounced()
            }, 20)
            setTimeout(function () {
                clearInterval(interval)
            }, 21)  // 19 will fail 

            setTimeout(() => {
                expect(num).to.be.equal(1)
                done()
            }, 60);
        })
    })

    // throttle
    describe('#throttle()', function () {
        const throttle = lumos.throttle

        it(`lumos.throttle(200, function(){return true})`, function (done) {
            let num = 0
            let interval = null
            let throttled = throttle(200, function () {
                num++
                return true
            })
            interval = setInterval(function () {
                throttled()
            }, 20)
            setTimeout(function () {
                expect(num).to.be.equal(5)
                done()
                clearInterval(interval)
            }, 1005) // 805 will equal 4 (Math.floor(805 / 200)
        })

        it(`lumos.throttle(200, true, function(){return true})`, function (done) {
            let num = 0
            let interval = null
            let throttled = throttle(200, true, function () {
                num++
                return true
            })
            interval = setInterval(function () {
                throttled()
            }, 20)
            setTimeout(function () {
                expect(num).to.be.equal(Math.floor(805 / 200))
                done()
                clearInterval(interval)
            }, 805)
        })
    });


})