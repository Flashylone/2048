function showNum(randomX,randomY,randomNum){
	//console.log('1');
	var numCell = $('#number-cell-'+randomX+'-'+randomY);

	numCell.css('background-color',getNumBgColor(randomNum));
	numCell.css('color',getNumColor(randomNum));
	numCell.text(randomNum);

	numCell.animate({
		width:'100px',
		height:'100px',
		top:getTop(randomX,randomY),
		left:getLeft(randomX,randomY)
	},50);
}

function move(i,j,tox,toy){
	var numCell = $('#number-cell-'+i+'-'+j);
	numCell.animate({
		top: getTop(tox,toy),
		left: getLeft(tox,toy)
	},200);
}