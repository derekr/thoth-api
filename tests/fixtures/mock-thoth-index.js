var http = require('http');
var sendJson = require('send-data/json');

module.exports = function (resource) {
  var indexResponse = require('./' + resource + '-response.json');

  return http.createServer(function (req, res) {
    sendJson(req, res, indexResponse);
  }).listen(process.env.MOCK_THOTH || 3002);
};
