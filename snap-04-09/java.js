/**
console.log('1+1=2');
console.log( 1+1);
console.log('one'+ ''+ ' ' +' ' + '+' + 'one'+ ' ' + 'equals'+ ' ' + 'two')
//got ahead of myself with the spaces
*/

/**
 * take two numbers and multiply them.
 *
 * @param int firstNumber One number to multiply
 * @param int secondNumber The other number to multiply
 * @return int The product of the two numbers
 */

function multiplynumbers (firstNumber, secondNumber) {
	return firstNumber * secondNumber;
}

let myNumber = -5

console.log(multiplynumbers(-2,5));

/**
 * Take two names and concatenate them into a full name
 *
 * Take two names (strings) and concatenate them
 * @param string firstName The given name to concatenate
 * @param string lastName The family name to concatenate
 * @return string The full name of our person.
 */

function getFullName(firstName, lastName){
	return firstName + '' +lastName;
}
console.log(getFullName('Jamie', ' ' + 'Amparan'));

