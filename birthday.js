

birthdayCountdown(60);

function birthdayCountdown(daysUntilMyBirthday){

	for( var i=daysUntilMyBirthday; i>=0; i--){

		if(i>=30){
			console.log(i + ' days until my B-Day, yo. Too bad :-/ ');
		}

		else if(i>=5){
			console.log(i + ' days until my B-Day, wut w00t! :-D ');
		}

		else if(i>0){
			console.log(i + ' DAYS! AW SNAP, GUESS WHAT TIME IT ALMOST IS!!!! ');
		}

		else if(i==0){
			console.log('♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*');
			console.log('♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪');
			console.log('*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«');
		}
	}
}