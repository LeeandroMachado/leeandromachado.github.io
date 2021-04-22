var boot = function(game){
	console.log("%cStarting my awesome game", "color:white; background:red");
};
  
boot.prototype = {
	preload: function(){
          this.game.load.image("loading","img/loading.png"); 
	},
  	create: function(){
		this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
		this.scale.maxWidth = this.game.width;
		this.scale.maxHeight = this.game.height;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.scale.setScreenSize= true;
		this.game.state.start("Preload");
	}
}