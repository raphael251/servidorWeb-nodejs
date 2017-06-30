var fs = require('fs');

module.exports = function(fileName, successFn, errorFn){
	fs.readFile(fileName, function (err, data){
		if (err) {
			errorFn(err);		
		}
		else {
			successFn(data);		
		}
	});
};