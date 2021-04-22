var preload = function(game){}
 
preload.prototype = {
	preload: function(){ 
        var loadingBar = this.add.sprite(120,35,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
		this.load.setPreloadSprite(loadingBar);
		game.load.image('sky', 'img/sky.jpg');
		game.load.image('bush', 'img/bush.png');
		game.load.image('ground', 'img/platform.png');
		game.load.image('ground2','img/platform2.png');
		game.load.image('ground2_1','img/platform2_1.png');
		game.load.image('ground3','img/platform3.png');
		game.load.image('ground4','img/platform4.png');
		game.load.image('ground4_1','img/platform4_1.png');
		game.load.image('back2', 'img/back2.png');
		game.load.image('back3','img/back3.png');
		game.load.image('back4','img/back4.png');
		game.load.image('ledge', 'img/ledge.png');
		game.load.image('ledge2','img/ledge2.png');
		game.load.image('ledge3','img/ledge3.png');
		game.load.image('ledge4','img/ledge4.png');
		game.load.image('lava','img/lava.png');
		game.load.image('agua','img/agua.png');
		game.load.image('areia','img/areia.png');
		game.load.image('title', 'img/title.png');
		game.load.image('play', 'img/play.png');
		game.load.image('titleground', 'img/titleGround.png');
		game.load.spritesheet('dude', 'img/dude.png', 73, 90, 12);
		game.load.spritesheet('dude1', 'img/p1_spritesheet.png', 73, 90, 12);
		game.load.spritesheet('dude2', 'img/p2_spritesheet.png', 73, 90, 12);
		game.load.spritesheet('dude3', 'img/alienBeige.png', 70, 90, 12);
		game.load.spritesheet('dude4', 'img/alienYellow.png', 70, 86, 12);
		game.load.spritesheet('door', 'img/door.png', 90, 120);
		game.load.spritesheet('door2', 'img/door2.png', 90, 120);
		game.load.spritesheet('door3', 'img/door3.png', 90, 120);
		game.load.spritesheet('door4', 'img/door4.png', 90, 120);
		game.load.image('button','img/button.png');
		game.load.image('button1','img/button1.png');
		game.load.image('button2','img/button2.png');
		game.load.image('button3','img/button3.png');
		game.load.image('menuback','img/menuback.png');
		game.load.image('menu','img/menu.png');
		game.load.image('closemenu','img/closemenu.png');
		game.load.image('btn1','img/btn1.png');
		game.load.image('btn2','img/btn2.png');
		game.load.image('btn3','img/btn3.png');
		game.load.image('btn4','img/btn4.png');
		
		game.load.image('reiniciar', 'img/reiniciar.png');
		game.load.image('restart', 'img/restart.png');
		game.load.image('lvl', 'img/lvl.png');
		game.load.image('exit', 'img/exit.png');
		game.load.image('escolher', 'img/escolher.png');
		game.load.image('quit', 'img/quit.png');
		game.load.image('gameover', 'img/gameover.png');
		game.load.image('finish', 'img/finish.png');
		game.load.spritesheet('stars', 'img/stars.png', 300, 101, 4);
		game.load.spritesheet('stars_menu', 'img/stars_menu.png', 300, 101, 4);
		game.load.image('board', 'img/board.png');
		game.load.image('heart', 'img/life.png');
		game.load.audio('fire','audio/fire.mp3');
		game.load.audio('water','audio/water.mp3');
		game.load.audio('background_4','audio/fase4.mp3');
		game.load.audio('background_3','audio/fase3.mp3');
		game.load.audio('background_2','audio/fase2.mp3');
		game.load.audio('jump', 'audio/jump.mp3');
		game.load.audio('get-sound', 'audio/get.mp3');
		game.load.audio('gameover-sound', 'audio/lose.mp3');
		game.load.audio('getSound-incorrect', 'audio/incorrect.mp3');
		game.load.audio('background', 'audio/background.mp3');
		game.load.audio('fall', 'audio/fall.mp3');
		game.load.audio('title-sound', 'audio/titlesound.mp3');
		game.load.audio('win', 'audio/win.mp3');
	},
  	create: function(){
		this.game.state.start("GameTitle");
	}
}