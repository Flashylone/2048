function getTop(i,j){
	return 20 + 120*i;
}

function getLeft(i,j){
	return 20 + 120*j;
}

function getNumBgColor(number){
	switch(number){
		case 2: return 'rgb(255,208,199)';break;
		case 4: return 'rgb(255,208,199)';break;
		case 8: return 'rgb(255,208,199)';break;
		case 16: return 'rgb(255,208,199)';break;
		case 32: return 'rgb(255,208,199)';break;
		case 64: return 'rgb(255,143,122)';break;
		case 128: return 'rgb(255,143,122)';break;
		case 256: return 'rgb(255,143,122)';break;
		case 512: return 'rgb(255,143,122)';break;
		case 1024: return 'rgb(204,114,98)';break;
		case 2048: return 'rgb(204,114,98)';break;
		case 4096: return 'rgb(204,114,98)';break;
		case 5192: return 'rgb(204,114,98)';break;
	}

	return 'rgb(0,0,0)';
}

function getNumColor(number){
	switch(number){
		case 2: return 'rgb(199,255,239)';break;
		case 4: return 'rgb(199,255,239)';break;
		case 8: return 'rgb(199,255,239)';break;
		case 16: return 'rgb(199,255,239)';break;
		case 32: return 'rgb(199,255,239)';break;
		case 64: return 'rgb(122,255,218)';break;
		case 128: return 'rgb(122,255,218)';break;
		case 256: return 'rgb(122,255,218)';break;
		case 512: return 'rgb(122,255,218)';break;
		case 1024: return 'rgb(98,204,174)';break;
		case 2048: return 'rgb(98,204,174)';break;
		case 4096: return 'rgb(98,204,174)';break;
		case 5192: return 'rgb(98,204,174)';break;
	}

	return 'rgb(255,255,255)';
}

function noSpace(board){
	for(var i = 0;i < 4;i++){
		for(var j = 0; j < 4;j++){
			if(board[i][j]==0){
				return false;
			}
		}
	}

	return true;
}

function canMoveLeft(board){
	for(var i = 0;i < 4;i++){
		for(var j = 1; j < 4;j++){
			if (board[i][j] != 0) {
				if(board[i][j-1] == 0 || board[i][j-1] == board[i][j]){
					//console.log('canmove');
					return true;
				}
			}
		}
	}
	return false;
}

function canMoveRight(board){
	for(var i = 0;i < 4;i++){
		for(var j = 2; j >= 0;j--){
			if (board[i][j] != 0) {
				if(board[i][j+1] == 0 || board[i][j+1] == board[i][j]){
					//console.log('canmove');
					return true;
				}
			}
		}
	}
	return false;
}

function canMoveTop(board){
	for(var i = 0;i < 4;i++){
		for(var j = 1;j < 4;j++){
			if(board[j][i] != 0){
				if(board[j-1][i] == 0 || board[j-1][i] == board[j][i]){
					return true;
				}
			}
		}
	}
	return false;
}

function canMoveBottom(board){
	for(var i = 0;i < 4;i++){
		for(var j = 2;j >= 0;j--){
			if(board[j][i] != 0){
				if(board[j+1][i] == 0 || board[j+1][i] == board[j][i]){
					return true;
				}
			}
		}
	}
	return false;
}

function noBlockHorizontal(row, col1,col2,board){
	for(var i = col1 + 1;i < col2;i++){
		if(board[row][i] != 0){
			return false;
		}
	}
	return true;
}

function noBlockVertical(col,row1,row2,board){
	for(var i = row1 + 1;i < row2;i++){
		if(board[i][col] != 0){
			return false;
		}
	}
	return true;
}