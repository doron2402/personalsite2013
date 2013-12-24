
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.contactForm = function(req, res){
	if (req.body){
		var fullname = req.body.fullname,
			phone = req.body.phone,
			email = req.body.email,
			message = req.body.message,
			checkbox = req.body['checkbox-agree'];

		res.json('Success!');
	}else
		res.json('fail!');
};