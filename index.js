var Twitter = require('twitter');
var fs = require('fs');

var key, secret, tokenKey, tokenSecret
var data = fs.readFile('keys.txt', "utf8", function (err, data){
   if(err)
      throw err;
   var arr = data.split('\r\n');
   key = arr[0];
   secret = arr[1];
   tokenKey = arr[2];
   tokenSecret = arr[3];
   var client = new Twitter({
      consumer_key: key,
      consumer_secret: secret,
      access_token_key: tokenKey,
      access_token_secret: tokenSecret
   });
   

   var params = {screen_name: 'nodejs'};
   client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        console.log(tweets);
      }else 
      {
         console.log('error');
      }
   })


 
});