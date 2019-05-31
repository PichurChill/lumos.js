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

app.listen(3333, () => console.log('Example app listening on port 3333!'))