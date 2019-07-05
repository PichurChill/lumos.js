describe('Object API:', function () {
    // isEmpty
    describe('#deepClone()', function () {
        it(`lumos.deepClone(null)`, function () {
            let data = null
            expect(lumos.deepClone(data)).to.deep.equal(data)
        })
        it(`lumos.deepClone('pichurchill')`, function () {
            let data = 'pichurchill'
            expect(lumos.deepClone(data)).to.deep.equal(data)
        })

        it(`lumos.deepClone(new Date())`, function () {
            let data = new Date()
            expect(lumos.deepClone(data)).to.deep.equal(data)
        })

        it(`lumos.deepCloneArray)`, function () {
            let data = [1, 1, {a: 1}]
            expect(lumos.deepClone(data)).to.deep.equal(data)
        })

        it(`lumos.deepClone(object)`, function () {
            let data = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3],
                    third: null,
                    fourth: undefined,
                    fifth: NaN,
                    sixth: '',
                    seventh: () => {}
                }
            }
            expect(lumos.deepClone(data)).to.deep.equal(data)
        })

        it(`object === lumos.deepClone(object) should return false`, function () {
            let data = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3],
                    third: null,
                    fourth: undefined,
                    fifth: NaN,
                    sixth: '',
                    seventh: () => { }
                }
            }
            expect(lumos.deepClone(data)).to.not.equal(data)
        })
    })
})