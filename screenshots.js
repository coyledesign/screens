var page = require("webpage").create();
var args = require('system').args;
var fs = require('fs');

var cookies = [];
//Check if cookies file exists, if so then load it.
fs.exists('./cookies.json', function(exists) {
  if (exists) {
    var cookies = require('./cookies.json');
  } 
});


for (var i = 0; i < cookies.length; i++) {
	var cookie = phantom.addCookie(cookies[i]);
};

//Set Viewport size
page.viewportSize = {
  width: 1024,
  height: 768
};

if(args.length < 3) {
	//@todo insert usage info
	console.log('Not enough arguments');
	phantom.exit(1);
}


var hash = args[2];
var basePath = args[1];

var path = basePath + hash;
var safeHash = hash.split('.').join('-');

page.open(path, function() {
  setTimeout(getScreenShot(safeHash), 100);
  phantom.exit();
});

function getScreenShot(safeHash) {
	page.render('images/screen-' + safeHash + '.png');
}