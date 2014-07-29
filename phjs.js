var webPage = require('webpage');
var page = webPage.create();

page.open('http://m.bing.com', function(status) {

  var title = page.evaluate(function() {
    return document.title;
  });

  console.log(title);
  phantom.exit();

});