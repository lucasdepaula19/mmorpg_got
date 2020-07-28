module.exports = function(application){
	application.get('/cadastro', function(req, res){
		//res.send('Bem vindo a sua app NodeJS!');
		application.app.controllers.cadastro.cadastro(application, req, res);
	});

	application.post('/cadastrar', function(req, res){
		//res.send('Bem vindo a sua app NodeJS!');
		application.app.controllers.cadastro.cadastrar(application, req, res);
	});
}