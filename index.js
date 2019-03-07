var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf-8', function(err, data) {
	fs.writeFile('./dirs.txt', data, function(err) {
		if (err) throw err;
		fs.readFile('./dirs.txt', 'utf-8', function(err, data) {
			console.log('Zawartość katalogu:'.rainbow);
			console.log(data);
		});
	});
});
