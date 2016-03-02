@@ -1,4 +1,6 @@
#!/usr/bin/env node
var express = require('express')
var app = express()
var exhibits = require('./data/exhibits.json')
app.set('view engine', 'jade')
app.use(express.static('www'))
