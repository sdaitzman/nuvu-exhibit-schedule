#!/usr/bin/env node
var express = require('express')
var app = express()
var _ = require('lodash')
var exhibits = require('./data/exhibits.json')

_.forEach(exhibits, (e) => {
  e.students = e.students.toUpperCase()
  e.title = e.title.toUpperCase()
  $(document).ready(function(){
      $("div").click(function(){
})

app.set('view engine', 'jade')
app.use(express.static('www'))

app.get('/', (req, res) => {
  res.render('index', {
    'title': 'NuVu Exhibit Schedule',
    'exhibits': exhibits
  })
})

var appPort = 3000
if (app.get('env') === 'production') appPort = 80

console.log(appPort)
app.listen(appPort, () => {
  console.log('NuVu Exhibit Schedule is listening')
  console.log('NuVu Exhibit Schedule is watching')

})
