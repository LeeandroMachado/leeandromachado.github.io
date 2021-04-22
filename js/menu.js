var menu = function(game){

}
 
menu.prototype = {
  	create: function(){
		var menuback = this.game.add.image(0,0, 'menuback');
		menuback.scale.setTo(1.5, 1.5);
		var menu = this.game.add.image(650,250, 'menu');
		var closemenu = this.game.add.button(1190,310, 'closemenu', this.exit, this);
		var btn1 = this.game.add.button(720,390, 'btn1', this.play, this);
		var btn2 = this.game.add.button(845,390, 'btn2', this.play2, this);
		var btn3 = this.game.add.button(972,390, 'btn3', this.play3, this);
		var btn4 = this.game.add.button(1098,390, 'btn4', this.play4, this);
		
		stars_1 = game.add.sprite(this.game.width*0.377, this.game.height*0.433, 'stars_menu');
		stars_1.scale.setTo(0.25, 0.25);
		
		if(localStorage.getItem("1-stars") == 1){
			stars_1.frame = 1;
		}else if(localStorage.getItem("1-stars") == 2){
			stars_1.frame = 2;
		}else if(localStorage.getItem("1-stars") == 3){
			stars_1.frame = 3;
		}else{
			stars_1.frame = 0;
		}
		
		stars_2 = game.add.sprite(this.game.width*0.442, this.game.height*0.433, 'stars_menu');
		stars_2.scale.setTo(0.25, 0.25);
		
		if(localStorage.getItem("2-stars") == 1){
			stars_2.frame = 1;
		}else if(localStorage.getItem("2-stars") == 2){
			stars_2.frame = 2;
		}else if(localStorage.getItem("2-stars") == 3){
			stars_2.frame = 3;
		}else{
			stars_2.frame = 0;
		}
		
		stars_3 = game.add.sprite(this.game.width*0.508, this.game.height*0.433, 'stars_menu');
		stars_3.scale.setTo(0.25, 0.25);
		
		if(localStorage.getItem("3-stars") == 1){
			stars_3.frame = 1;
		}else if(localStorage.getItem("3-stars") == 2){
			stars_3.frame = 2;
		}else if(localStorage.getItem("3-stars") == 3){
			stars_3.frame = 3;
		}else{
			stars_3.frame = 0;
		}
		
		stars_4 = game.add.sprite(this.game.width*0.573, this.game.height*0.433, 'stars_menu');
		stars_4.scale.setTo(0.25, 0.25);
		
		if(localStorage.getItem("4-stars") == 1){
			stars_4.frame = 1;
		}else if(localStorage.getItem("4-stars") == 2){
			stars_4.frame = 2;
		}else if(localStorage.getItem("4-stars") == 3){
			stars_4.frame = 3;
		}else{
			stars_4.frame = 0;
		}
	},
	play: function(){
		title_sound.stop();
		this.game.state.start("Fase1");
	},
	play2: function(){
		title_sound.stop();
		this.game.state.start("Fase2");
	},
	play3: function(){
		title_sound.stop();
		this.game.state.start("Fase3");
	},
	play4: function(){
		title_sound.stop();
		this.game.state.start("Fase4");
	},
	exit: function(){
		title_sound.stop();
		this.game.state.start("GameTitle");
	}
}