describe('Url API:', function () {
    describe('#parseQueryString()', function () {
        it(`lumos.parseQueryString(url) deepEqual obj`, function () {
            let url = 'https://www.baidu.com/s?wd=%E5%93%88%E5%88%A9%E6%B3%A2%E7%89%B9'
            expect(lumos.parseQueryString(url)).to.deep.equal({
                wd: '哈利波特'
            })
        });

        it(`lumos.parseQueryString(url) deepEqual obj`, function () {
            let url = 'www.baidu.com?a=123&b=%26'
            expect(lumos.parseQueryString(url)).to.deep.equal({
                a: '123',
                b: '&'
            })
        }); 

        it(`lumos.parseQueryString('') deepEqual {}`, function () {
            let url = ''
            expect(lumos.parseQueryString(url)).to.deep.equal({})
        }); 
    });

    describe('#stringfyQueryString()', function () {
        it(`lumos.stringfyQueryString(obj) === url`, function () {
            let data = {
                wd: '哈利波特'
            }
            expect(lumos.stringfyQueryString(data)).to.be.equal('wd=%E5%93%88%E5%88%A9%E6%B3%A2%E7%89%B9')
        });
    });
})