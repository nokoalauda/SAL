var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var fs = require('fs');
	console.log('this!!!!!')
	fs.readdir('./public/images', function(err, files){
    	if (err) throw err;
    	var fileList = files.filter(function(file){
    		try{
        		return fs.statSync("./public/images/"+file).isFile(); //絞り込み
        	}catch{
        		return false;
        	}
    	});
    	console.log(fileList);
		var json_text = JSON.stringify(fileList);
		res.render('photo_list',{title : json_text});
	});
});

module.exports = router;