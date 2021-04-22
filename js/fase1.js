var fase1 = function(game){
	
}
 
fase1.prototype = {
	init: function(){
		score = 0;
		life = 2;
		maxScore = 30;
		limitScore = 10;
		passou = false;
		fase = 1;
		calc = 0;
	},
  	create: function(){
		console.log(life);
		//Física do game
		game.physics.startSystem(Phaser.Physics.ARCADE);
					
		game.add.sprite(0, 0, 'sky');
					
		//Criando porta
		door = game.add.sprite(1700, game.world.height-200, 'door');
					
		//Criando botão de pause
		botao_pausar = game.add.button(15,15, 'button1', pause);
		botao_pausar.frame = 1;
		game.input.onDown.add(unpause, self);
					
		//Grupos de componentes
		platforms = game.add.group();
		lifes = game.add.group();
		misc = game.add.group();
		numbers = game.add.group();
					
		//Adicionando score
		scoreText = game.add.text(this.game.width - 290, 5, 'SCORE: 0', {font: "30px cartwheelregular", fill: "#fff"});
		scoreText.stroke = '#de8403';
		scoreText.strokeThickness = 4;
		if(localStorage.getItem('1-hscore') != null){
			hscoreText = game.add.text(this.game.width - 290, 35, 'HIGHSCORE: ' + localStorage.getItem('1-hscore'), {font: "30px cartwheelregular", fill: "#fff"});
		}else{
			hscoreText = game.add.text(this.game.width - 290, 35, 'HIGHSCORE: 0', {font: "30px cartwheelregular", fill: "#fff"});
		}
		hscoreText.stroke = '#de8403';
		hscoreText.strokeThickness = 4;
		
		openScore = game.add.text(this.game.width - 190, 895, limitScore, {font: "35px cartwheelregular", fill: "#fff"});
		openScore.stroke = '#de8403';
		openScore.strokeThickness = 4;

					
		//sons
		jump_sound = game.add.audio('jump');
		jump_sound.addMarker('jumping', 0, 2);
					
		get_sound = game.add.audio('get-sound');
		get_sound.addMarker('getting-correct', 0 ,1);
					
		background_sound = game.add.audio('background');
		background_sound.addMarker('background', 0, 40, 1, true);
					
		get_sound_incorrect = game.add.audio('getSound-incorrect');
		get_sound_incorrect.addMarker('getting-incorrect', 0, 0.3);
		
		win_sound = game.add.audio('win');
		win_sound.addMarker('win', 0, 2);
					
		fall_sound = game.add.audio('fall');
		fall_sound.addMarker('falling', 0, 0.5);
					
		gameover_sound = game.add.audio('gameover-sound');
		gameover_sound.addMarker('gameover-sound', 1, 4);
					
		//Habilitando corpo dos componentes
		platforms.enableBody = true;
		numbers.enableBody = true;
				
		//Criando o chão
		var ground = platforms.create(0, game.world.height -80, 'ground');
		ground.body.immovable = true;
		ground = platforms.create(1000, game.world.height -80, 'ground');
		ground.body.immovable = true;
					
		//Criando Plataformas
		var ledge = platforms.create(600, 650, 'ledge');
		ledge.body.immovable = true;
		ledge = platforms.create(250, 850, 'ledge');
		ledge.body.immovable = true;
		ledge = platforms.create(250, 450, 'ledge');
		ledge.body.immovable = true;
					
		//Animação porta
		door.animations.add('open', [1], 30, true);
					
		//Outros Objetos
		bush = misc.create(1400, game.world.height-145, 'bush');
		board = misc.create(1540, game.world.height-139, 'board');
					
		//Criando Player
		player = game.add.sprite(32, game.world.height - 500, 'dude');
		player.scale.setTo(1, 1);
		game.physics.arcade.enable(player);
		player.body.gravity.y = 300;
					
		//Animações do Player
		player.animations.add('left', [0, 11, 10], 30, true);
		player.animations.add('right', [0, 1, 2], 30, true);
		player.animations.add('jump-left', [4], 30, true);
		player.animations.add('jump-right', [4], 30, true);
		

		
		//Criando vidas
		heart[0] = lifes.create(1635, 70, 'heart');
		heart[1] = lifes.create(1695, 70, 'heart');
		heart[2] = lifes.create(1755,70, 'heart');
				
		//Gera numero a cada 2 segundos
		game.time.events.loop(Phaser.Timer.SECOND*2, generateNumber, this);
					
		//Musica de background
		background_sound.play('background');
					
		//Gera novo calculo
		generateCalc(calc);
			
		game.physics.arcade.enable(door);
	},
	
	update: function(){
		//Colisões
		game.physics.arcade.collide(player, platforms);
		game.physics.arcade.collide(numbers, platforms);
		game.physics.arcade.collide(numbers, numbers);
				
		//Encostar
		game.physics.arcade.overlap(player, numbers, collectNum, null, this);
		game.physics.arcade.overlap(player, door, finish, null, this);
						
		//Detecta teclado
		cursors = game.input.keyboard.createCursorKeys();
								
		//Deixa player sem movimento
		player.body.velocity.x = 0;
					
		if(score == limitScore){
			passou = true;
			door.animations.play('open');
			openScore.kill();
		}
								
		//Queda do player
		if(player.body.position.y >= game.height){
			fall_sound.play('falling');
			player.kill();
			heart[life].kill();
			life = life - 1;
			player.reset(32, game.world.height - 500);
			count.kill();
			generateCalc(calc);
			console.log(life);
			gameOver();
		}
					
			//Movimentos usando o teclado
			if (cursors.left.isDown){
				//  Move to the left
				player.body.velocity.x = -300;
				player.scale.x = 1;
				player.animations.play('right');
			}
			else if (cursors.right.isDown){
				//  Move to the right
				player.body.velocity.x = 300;
				player.animations.play('right');
			}
			else{
				player.frame = 0;
			}
					
			//Pulo para a direita
			if(!player.body.touching.down && cursors.right.isDown){
				player.animations.play('jump-right');	
			}
					
			//Pulo para a esquerda
			if(!player.body.touching.down && cursors.left.isDown){
				player.animations.play('jump-left');
			}

			//Pulo
			if (cursors.up.isDown && player.body.touching.down){
				jump_sound.play('jumping');
				player.body.velocity.y = -350;
			}
	}
}