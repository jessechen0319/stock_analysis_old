var http = require('http');
var fs = require('fs');
args = require('minimist')(process.argv.slice(2));
var options = {};
(function(){
  if(args.s == null){
    return;
  }

  console.log("[path:]"+"http://d.10jqka.com.cn/v2/line/hs_"+args.s+"/01/last.js");

  if(args.h != null && args.p !=null){
    var options = {
      host: 'web-proxy.rose.hp.com',
      port: 8080,
      path: "http://d.10jqka.com.cn/v2/line/hs_"+args.s+"/01/last.js"
    };
  } else {
    var options = {
      host: 'd.10jqka.com.cn',
      port: 80,
      path: "/v2/line/hs_"+args.s+"/01/last.js"
    };
  }


  function analysisInfo(information){

  }


   http.get({
      host: 'web-proxy.rose.hp.com',
      port: 8080,
      path: "http://d.10jqka.com.cn/v2/line/hs_"+args.s+"/01/last.js"
    }, function(response) {
    var body = "";
    response.on("data", function(data) {
        body += data;
    });
    response.on("end", function() {
        console.log(body);
        analysisInfo();
    });
  });
})();
