var express = require('express');
var router = express.Router();
var Redis = require('ioredis');

var cluster = new Redis.Cluster([{
  port: 6379,
  host: '10.55.240.1'
}, {
  port: 6379,
  host: '10.55.240.2'
}, {
  port: 6379,
  host: '10.55.240.3'
}]);

/* GET users listing. */
router.get('/', function(req, res, next) {
  cluster.get('user').then(function (result) {
  res.send(result);
});
  
});

router.post('/', function(req, res){
  const username = req.body.username;
  cluster.set('user', username);

  cluster.get('user').then(function (result) {
  console.log(username);
});

res.send('ok');

});

module.exports = router;
