function gcd (a, b) {
  console.log('gcd');
            return (b == 0) ? a : gcd (b, a%b);
        }
        var w = screen.width;
        var h = screen.height;
        var r = gcd (w, h)
      console.log('gcd',gcd);
var express = require('express')
var app = express()
console.log(r);
