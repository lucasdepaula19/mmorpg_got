module.exports = function(application){
	application.get('/jogo', function(req, res){
		//res.send('Bem vindo a sua app NodeJS!');
		application.app.controllers.jogo.jogo(application, req, res);
	});
}