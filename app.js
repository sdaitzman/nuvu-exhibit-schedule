#!/usr/bin/env node
var express = require('express')
var app = express()
app.set('view engine', 'jade')

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Hello World'
  })
})

app.listen(3000, () => {
  console.log('NuVu Exhibit Schedule listening')
})
