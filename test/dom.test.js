describe('Dom API:', function () {
    // getEleFullHeight
    describe('#getEleFullHeight()', function () {
        let el = document.createElement('div')
        el.style = "height: 10px;height:10px;background:red"
        before(function () {
            document.body.append(el)
        })
        it(`lumos.getEleFullHeight(el)`, function () {
            expect(lumos.getEleFullHeight(el)).to.be.equal(10)
        })
        after(function () {
            el.remove()
        })
    })

    // getScrollTop
    describe('#getScrollTop()', function () {
        let $body = document.body,
            bodyHeight = getComputedStyle($body).getPropertyValue('height'),
            length = 100
        before(function () {
            $body.style.height = '10000px'
            lumos.setScrollTop(window, length)
        })
        it(`lumos.getScrollTop(window)`, function () {
            expect(lumos.getScrollTop(window)).to.be.equal(length)
        })
        after(function () {
            lumos.setScrollTop(window, 0)
            $body.style.height = bodyHeight
        })
    })


    // scrollTo to 20
    describe('#scrollTo() to ..', function () {
        let $body = document.body,
            bodyHeight = getComputedStyle($body).getPropertyValue('height'),
            length = 100
        before(function () {
            $body.style.height = '10000px'
        })
        it(`lumos.scrollTo(window, 20, 100)`, function (done) {
            lumos.scrollTo(window, 20, 100)
            setTimeout(() => {
                expect(lumos.getScrollTop(window)).to.be.equal(20)
                done()
            }, 200)
        })
        after(function () {
            lumos.setScrollTop(window, 0)
            $body.style.height = bodyHeight
        })
    })

    // scrollTo from 20 to 30
    describe('#scrollTo() from.. to ..', function () {
        let $body = document.body,
            bodyHeight = getComputedStyle($body).getPropertyValue('height'),
            length = 100
        before(function () {
            $body.style.height = '10000px'
            lumos.setScrollTop(window, 1)
        })
        it(`lumos.scrollTo(window, 20, 30, 100)`, function (done) {
            lumos.scrollTo(window, 20, 30, 100)
            setTimeout(() => {
                expect(lumos.getScrollTop(window)).to.be.equal(30)
                done()
            }, 200)
        })
        after(function () {
            lumos.setScrollTop(window, 0)
            $body.style.height = bodyHeight
        })
    })

    // setScrollTop
    describe('setScrollTop()', function () {
        let $body = document.body,
            bodyHeight = getComputedStyle($body).getPropertyValue('height')
        before(function () {
            $body.style.height = '10000px'
            lumos.setScrollTop(window, 1)
        })
        it(`lumos.setScrollTop(window, 100)`, function (done) {
            lumos.setScrollTop(window, 100)
            setTimeout(() => {
                expect(lumos.getScrollTop(window)).to.be.equal(100)
                done()
            }, 100)
        })
        after(function () {
            lumos.setScrollTop(window, 0)
            $body.style.height = bodyHeight
        })
    })

})