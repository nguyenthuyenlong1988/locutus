XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var gopher_parsedir = require('/Users/kvz/code/phpjs/src/php/net-gopher/gopher_parsedir.js')

describe('php.net-gopher.gopher_parsedir.js', function () {
  it('should pass example 1', function (done) {
    var entry = gopher_parsedir('0All about my gopher site.\t/allabout.txt\tgopher.example.com\t70\u000d\u000a');
    entry.title;
    var expected = 'All about my gopher site.'
var entry = gopher_parsedir('0All about my gopher site.\t/allabout.txt\tgopher.example.com\t70\u000d\u000a');
    var result = entry.title;
    expect(result).to.deep.equal(expected)
    done()
  })
})