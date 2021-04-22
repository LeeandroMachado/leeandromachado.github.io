var game, height, width, score, scoreText, life, heart = [], number, count, result, limitScore, passou, fase, calc;

//Gera numero aleatorio
function getRandomInt(min, max) {
	if(result>0){
		return Math.floor(Math.random() * ((max+1) - min) + min);
	}else{
		return Math.floor(Math.random() * ((max-1) - min) + min);
	}
}

//Gera numeros que caem em até 30% do valor do resultado
function generateNumber(){
	number = game.add.text(parseInt((Math.random() * game.width)), 50, getRandomInt(result - result*0.05,result + result*0.05+1).toString(), {font: "60px cartwheelregular", fill: "#fff"});
	number.stroke = '#de8403';
	number.strokeThickness = 4;
	number.padding.set(-0, -14.5);
	game.physics.arcade.enable([ number ]);
	number.body.collideWorldBounds = false;
	number.enableBody = true;
	number.body.gravity.y = 300;
	number.body.bounce.y = 0.1 + Math.random() * 0.2;
	numbers.add(number);

	number.alpha = 1;
	fade = game.add.tween(number).to( { alpha: 0 }, 7000, Phaser.Easing.Linear.None, true, 0, 0, false);
	
	fade.onComplete.add(function(number, fade) { number.kill(); }, this);			
}

//Gera calculo aleatório
function generateCalc(calculo){
	var operators = [];
	operators[0] = " + ";
	operators[1] = " - ";
	operators[2] = " * ";
	operators[3] = " / ";
	
	var x  = parseInt((Math.random() * 20));
	var y = parseInt((Math.random() * 20))
	var operator = operators[calculo];
	if(operator == operators[2]){
		x  = parseInt((Math.random() * 10));
		y = parseInt((Math.random() * 10))
		count  = game.add.text(game.width - 1040, 10, x.toString() + " x " + y.toString(), {font: "62px cartwheelregular", fill: "#fff"});
	}else if(operator == operators[3]){
		count  = game.add.text(game.width - 1040, 10, x.toString() + " ÷ " + y.toString(), {font: "62px cartwheelregular", fill: "#fff"});
	}else{
		count  = game.add.text(game.width - 1040, 10, x.toString() + operator + y.toString(), {font: "62px cartwheelregular", fill: "#fff"});
	}
	
	count.stroke = '#de8403';
	count.strokeThickness = 4;
	if(operator == operators[0]){
		result = (+x) + (+y);
	}else if(operator == operators[1]){
		result = (+x) - (+y);
	}else if(operator == operators[2]){
		result = (+x) * (+y);
	}else{
		if(x<y || x%y != 0 || y==0 || (x/y)%1!=0){
			count.kill();
			generateCalc(calc);
		}else{
			result = (+x) / (+y);
		}
	}
	return result;
}

//Checa Encostar
function checkOverlap(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

}

function addScore(){

}

//Coleta numero		
function collectNum (player, number) {
	number.kill();
	if(parseInt(number.text) == result ){
		get_sound.play('getting-correct');
		count.kill();
		generateCalc(calc);
		score += 10;
		scoreText.text = 'SCORE: ' + score;
	}else{
		get_sound_incorrect.play('getting-incorrect');
		heart[life].kill();
		life = life - 1;
		count.kill();
		generateCalc(calc);
		gameOver();
	}
}

//Passa fase
function finish(){
	if(passou == true){
		background_sound.stop();
		win_sound.play('win');
		if(localStorage.getItem(fase + "-hscore") == ''){
			localStorage.setItem(fase + "-hscore", score);
		}else if(localStorage.getItem(fase + "-hscore") < score){
			localStorage.setItem(fase + "-hscore", score);
		}
		player.kill();
		finished = game.add.image(this.game.width*0.34, this.game.height*0.2, 'finish');
		stars = game.add.sprite(this.game.width*0.42, this.game.height*0.35, 'stars');
		high = game.add.text(this.game.width*0.425, this.game.height*0.5,'High Score: ' + localStorage.getItem(fase + "-hscore"),{font: "40px cartwheelregular", fill: "#fff"});
		high.stroke = '#de8403';
		high.strokeThickness = 4;
		botao_restart = game.add.button(this.game.width*0.478, this.game.height*0.6, 'restart', restart);
		botao_exit = game.add.button(this.game.width*0.53, this.game.height*0.6, 'exit', quit);
		botao_lvl = game.add.button(this.game.width*0.425, this.game.height*0.6, 'lvl', backMenu);
		
		if(localStorage.getItem(fase + "-hscore") >= limitScore*2 && localStorage.getItem(fase + "-hscore")<maxScore){
			stars.animations.add('addStar', [0, 1, 2], 3, false);
			console.log(2);
			if(localStorage.getItem(fase+"-stars") < 3 || localStorage.getItem(fase+"-stars") == ""){
				localStorage.setItem(fase + "-stars", 2);
			}
		}else if(localStorage.getItem(fase + "-hscore") >= maxScore){
			stars.animations.add('addStar', [0, 1, 2, 3], 3, false);
			console.log(3);
			if(localStorage.getItem(fase + "-stars") == "" || localStorage.getItem(fase + "-stars") <= 3){
				localStorage.setItem(fase + "-stars", 3);
			}
			
		}else if(localStorage.getItem(fase + "-hscore") < limitScore*2){
			stars.animations.add('addStar', [0, 1], 3, false);
			
			if(localStorage.getItem(fase + "-stars") == null || localStorage.getItem(fase + "-stars") == 1){
				console.log(1);
				localStorage.setItem(fase + "-stars", 1);
			}
		}
		
		stars.animations.play('addStar');
		

	}
}

//Função pausar jogo
function pause(){
	game.paused = true;
}

function unpause(event){
	game.paused = false;
}

function gameOver(){
	if(life==-1){
		background_sound.stop();
		gameover_sound.play('gameover-sound');
		player.kill();
		game_Over = game.add.image(this.game.width - 1140, 250, 'gameover');
		game_Over.scale.setTo(1.3, 1.3);
		botao_reiniciar = game.add.button(830, 400, 'reiniciar', restart);
		botao_reiniciar.scale.setTo(1.3, 1.3);
		botao_escolher = game.add.button(830, 500, 'escolher', backMenu);
		botao_escolher.scale.setTo(1.3, 1.3);
		botao_quitar = game.add.button(830, 600, 'quit', quit);
		botao_quitar.scale.setTo(1.3, 1.3);
	}
}

function restart(){
	game.state.restart(true, false);
}

function backMenu(){
	game.state.start('Menu');
}

function quit(){
	game.state.start('GameTitle');
}