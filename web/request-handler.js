var path = require('path');
var fs = require('fs');
module.exports.datadir = path.join(__dirname, "../data/sites.txt"); // tests will need to override this.


module.exports.handleRequest =  function (req, res) {

  console.log(exports.datadir);

  fs.readFile(exports.datadir, function (err, data) {
    // return data.toString().split("\n");
    if ( err ){
      console.log("ERROR");
      return;
    }
    var sites = data.toString().split("\n");

    fs.readFile(path.join(__dirname, "../data/sites/" + sites[0]), function (err, data) {
      if(err){
        console.log("ERROR 2");
        return;
      }
      res["Content-Type"] = "text/html";
      res.write(data.toString());
      res.end();
    });
  });
};
