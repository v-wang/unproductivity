pjs.config({ 
    // options: 'stdout', 'file' (set in config.logFile) or 'none'
    log: 'stdout',
    // options: 'json' or 'csv'
    format: 'json',
    // options: 'stdout' or 'file' (set in config.outFile)
    writer: 'stdout',
    outFile: 'scrape_output.json'
});

pjs.addSuite({
    // single URL or array
    url: 'http://en.wikipedia.org/wiki/List_of_towns_in_Vermont',
    // single function or array, evaluated in the client
    scraper: function() {
        return $('h1#firstHeading').text();
    }
});