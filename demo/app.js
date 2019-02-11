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

app.listen(3333, () => console.log('Example app listening on port 3333!'))