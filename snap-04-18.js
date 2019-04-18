function convertToGrams(weight, units){

	if (units=== 'lbs') {
		return weight * 453.592;
	}else if (units ==='oz') {
		return weight * 28.349;
	}else if (units === 'kg') {
		return weight * 1000;
	}else if (units === 'mg') {
		return weight / 1000;
	}else if (units === 'g') {
		return weight;
			}
	//convertPoundsToGrams (weight);
	//convertKilogramsToGrams(weight);
}


function sumFactors(number){
	for (i = number; i > 0; i--){
		if (number % i === 0) {
			sum = i + sum;
		}
	}
return sum;
}
