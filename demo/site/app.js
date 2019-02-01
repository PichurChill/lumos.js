const express = require('express')
const app = express()
const ejs = require('ejs')
// const lumos = require('../../src/data/isEmpty')
const lumos = {a: function(){}}


app.set('view engine', 'ejs')

app.locals.lumos = lumos;

app.get('/', (req, res) => res.send('Hello World'))
app.get('/cookie', (req, res) => {
    res.render('cookie', { title: 'Cookie'}); 
})

app.listen(3333, () => console.log('Example app listening on port 3333!'))