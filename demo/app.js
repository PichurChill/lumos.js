const express = require('express')
const app = express()
const ejs = require('ejs')



app.set('view engine', 'ejs')
app.use(express.static("./public"));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/cookie', (req, res) => {
    res.render('cookie', { title: 'cookie' });
})

app.get('/data', (req, res) => {
    res.render('data', { title: 'data' });
})

app.get('/localStorage', (req, res) => {
    res.render('localStorage', { title: 'localStorage' });
})

app.get('/device', (req, res) => {
    res.render('device', { title: 'device' });
})

app.get('/object', (req, res) => {
    res.render('object', { title: 'object' });
})

app.get('/dom', (req, res) => {
    res.render('dom', { title: 'dom' });
})

app.get('/string', (req, res) => {
    res.render('string', { title: 'string' });
})

app.get('/url', (req, res) => {
    res.render('url', { title: 'url' });
})

app.get('/date', (req, res) => {
    res.render('date', { title: 'date' });
})

app.get('/function', (req, res) => {
    res.render('function', { title: 'function' });
})

app.listen(3333, () => console.log('Example app listening on port 3333!'))