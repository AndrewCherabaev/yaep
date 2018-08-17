module.exports = function(program){
	program
		.command('show:true')
		.description('show "true" in console')
		.action(function(cmd, options){
			console.log(true);
		})
		/*.on('--help', function(){
			console.log('It shows "true" in console')
		})*/;
}