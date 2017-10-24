



	var HOUR = 2;

	var MINUTE = 48;
	
	var PERIOD = "PM";


	almostNine(HOUR, MINUTE, PERIOD);

function almostNine(HOUR, MINUTE, PERIOD) {

	
	var msg= "It's almost 9 in the morning";

	if (HOUR==8 && MINUTE==50 && PERIOD=='AM')
	{

		console.log(msg);
	}
	else if (HOUR==7 && MINUTE==15 && PERIOD=='PM')
	{

		console.log("It's just after 7 in the evening");

	}

	else 
	{
		console.log("Time to get a watch, bro");
	}


}

