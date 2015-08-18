var board = new Array();
var score = 0;

$(document).ready(function(){
	init();
	var startGame = $('#startGame');
	startGame.on('click',function(){
		newGame();
	});
});

function newGame(){
	//初始化
	init();
	//随机初始化两个格子
	createNum();
	createNum();
}

function init(){
	for(var i = 0;i < 4;i++){
		for(var j = 0;j < 4; j++){
			var gridCell = $('#grid-cell-' + i +'-'+j);
			gridCell.css('top',getTop(i,j));
			gridCell.css('left',getLeft(i,j));
		}
	}

	for(var i = 0; i < 4; i++){
		board[i] = new Array();
		for(var j = 0 ;j < 4;j++){
			board[i][j] = 0;
		}
	}
	//console.log(board);
	updateBoardView();
}

function updateBoardView(){
	//console.log('1');
	$('.number-cell').remove();
	for(var i = 0;i < 4;i++){
		for(var j = 0; j < 4;j++){
			//console.log('1');
			$('#gridBox').append('<div class="number-cell" id="number-cell-'+ i +'-'+j+'"></div>');
			var thisNumCell = $('number-cell-' + i +'-'+j);

			if(board[i][j] == 0){
				thisNumCell.css('width','0px');
				thisNumCell.css('height','0px');
				thisNumCell.css('top','50px');
				thisNumCell.css('left','50px');

			}else{
				thisNumCell.css('width','100px');
				thisNumCell.css('height','100px');
				thisNumCell.css('top',getTop(i,j));
				thisNumCell.css('left',getLeft(i,j));
				thisNumCell.css('background-color',getNumBgColor(board[i][j]));
				thisNumCell.css('color',getNumColor(board[i][j]));
				thisNumCell.text(board[i][j]);
			}
		}
	}
}

function createNum(){
	//console.log('1');
	if(noSpace(board)){ return false;}

	//位置
	var randomX = parseInt(Math.floor(Math.random()*4));
	var randomY = parseInt(Math.floor(Math.random()*4));

	while(true){
		if(board[randomX][randomY] == 0){
			break
		}else{
			randomX = parseInt(Math.floor(Math.random()*4));
			randomY = parseInt(Math.floor(Math.random()*4));
		}
	}
	//数字
	var randomNum = Math.random() < 0.5?2:4;
	//显示
	board[randomX][randomY] = randomNum;
	showNum(randomX,randomY,randomNum);
}