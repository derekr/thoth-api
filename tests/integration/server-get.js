var test = require('tap').test;
var request = require('request');

var thothIndex = require('../fixtures/mock-thoth-index')('server');

test('/server resource', function (t) {
  var url = [
    'http://localhost:3001/api/',
    'server/demo-host/',
    'core/collection1/',
    'port/8900/',
    'start/NOW-1HOUR/',
    'end/NOW/',
    'list/slowqueries/1'
  ].join('');

  request(url, function (err, res, body) {
    if (err) {
      t.fail(err);
      thothIndex.close();
      return t.end();
    }

    var payload = JSON.parse(body);

    t.equal(res.statusCode, 200, 'return ok');
    t.ok(typeof payload.response, 'flatten thoth-index response');
    thothIndex.close();
    t.end();
  });
});
