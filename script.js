const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
	console.time('timing');
	if(err){
		console.log(err);
	}

	// First problem: on which floor is a child
	var floor = 0;
	var array = data.toString().split('');
    for(var i = 0; i < array.length; i++) {
    	if (array[i] === '(') {
    		floor++;
    	} else {
    		floor--;
    	}
    }

    // Second problem: on which position is basement at first time
    var floor2 = 0;
    var position = 0;
    for(var i = 0; i < array.length; i++) {
    	if (array[i] === '(') {
    		floor2++;
    	} else {
    		floor2--;
    	}
    	if (floor2 === -1) {
    		position = i +1;
    		break;
    	}
    }

    console.log("floor=", floor);
    console.log("floor2=", floor2, "position=", position);

	// console.log('1' ,data);
	console.timeEnd('timing');
});
