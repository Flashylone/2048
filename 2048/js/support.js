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