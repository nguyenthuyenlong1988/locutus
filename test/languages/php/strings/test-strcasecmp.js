XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var strcasecmp = require('/Users/kvz/code/phpjs/src/php/strings/strcasecmp.js')

describe('php.strings.strcasecmp.js', function () {
  it('should pass example 1', function (done) {
    strcasecmp('Hello', 'hello');
    var expected = 0
    var result = strcasecmp('Hello', 'hello');
    expect(result).to.deep.equal(expected)
    done()
  })
})