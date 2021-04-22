var gameTitle = function(game){}
 
gameTitle.prototype = {
  	create: function(){
		var back = this.game.add.image(0,0,'title');
		var playButton = this.game.add.button(940,820,'play',this.playTheGame,this);
		playButton.scale.setTo(1, 1);
		playButton.anchor.setTo(0.5,0.5);
		platforms = game.add.group();
		player = game.add.group();
		
		platforms.enableBody = true;
		var titleground = platforms.create(0, game.world.height -480, 'titleground');
		titleground.body.immovable = true;
		
		title_sound = game.add.audio('title-sound');
		title_sound.addMarker('title-sound', 0, 15, 1, true);
		title_sound.play('title-sound');
		
		tween = game.add.tween(playButton.scale).to( { x: 1.5, y: 1.5 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
		
		player1 = player.create(game.world.width- 200, game.world.height - 1080, 'dude');
		player1.scale.setTo(1, 1);
		game.physics.arcade.enable(player1);
		player1.body.gravity.x = game.rnd.integerInRange(-50, 50);
		player1.body.gravity.y = 100 + Math.random() * 100;
		player1.body.bounce.setTo(0.9, 0.9);
		player1.body.collideWorldBounds=true;
		
		player2 = player.create(game.world.width- 500, game.world.height - 1080, 'dude1');
		player2.scale.setTo(1, 1);
		game.physics.arcade.enable(player2);
		player2.body.gravity.x = game.rnd.integerInRange(-50, 50);
		player2.body.gravity.y = 100 + Math.random() * 100;
		player2.body.bounce.setTo(0.9, 0.9);
		player2.body.collideWorldBounds=true;
		
		player3 = player.create(game.world.width- 800, game.world.height-1080, 'dude2');
		player3.scale.setTo(1, 1);
		game.physics.arcade.enable(player3);
		player3.body.gravity.x = game.rnd.integerInRange(-50, 50);
		player3.body.gravity.y = 100 + Math.random() * 100;
		player3.body.bounce.setTo(0.9, 0.9);
		player3.body.collideWorldBounds=true;
		
		player4 = player.create(game.world.width- 1200, game.world.height - 1080, 'dude3');
		player4.scale.setTo(1, 1);
		game.physics.arcade.enable(player4);
		player4.body.gravity.x = game.rnd.integerInRange(-50, 50);
		player4.body.gravity.y = 100 + Math.random() * 100;
		player4.body.bounce.setTo(0.9, 0.9);
		player4.body.collideWorldBounds=true;
		
		player5 = player.create(game.world.width- 1600, game.world.height - 1080, 'dude4');
		player5.scale.setTo(1, 1);
		game.physics.arcade.enable(player5);
		player5.body.gravity.x = game.rnd.integerInRange(-50, 50);
		player5.body.gravity.y = 100 + Math.random() * 100;
		player5.body.bounce.setTo(0.9, 0.9);
		player5.body.collideWorldBounds=true;
        
        
        
		
		
		
	},
	playTheGame: function(){
		
		this.game.state.start("Menu");
	},
	
	update: function(){
		game.physics.arcade.collide(player, platforms);
		game.physics.arcade.collide(player, player);
	}
};