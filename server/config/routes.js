console.log('routes')
var users = require('../controllers/users.js');
module.exports = function(app){


	app.post('/createUser', users.createUser)
	app.get('/get_user', users.getUser)
	app.post('/add_wish', users.addWish)
	app.get('/get_wish', users.getWish)
	app.get('/getOneWish/:id', users.getOneWish)

}



