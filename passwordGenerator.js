// Interview at LACEWORK
// Generate a random password of length 8 to 32 characters with at least 1 lower case, 1 upper case, 1 number, 1 spl char (!@$&)
function getRandomUpperCase() {
   return String.fromCharCode( Math.floor( Math.random() * 26 ) + 65 );
}

function getRandomLowerCase() {
   return String.fromCharCode( Math.floor( Math.random() * 26 ) + 97 );
} 

function getRandomNumber() {
   return String.fromCharCode( Math.floor( Math.random() * 10 ) + 48 );
}

function getRandomSymbol() {
	// const symbol = '!@#$%^&*(){}[]=<>/,.|~?';
	const symbol = '!@$&';
	return symbol[ Math.floor( Math.random() * symbol.length ) ];
}

const randomFunc = [ getRandomUpperCase, getRandomLowerCase, getRandomNumber, getRandomSymbol ];

function getRandomFunc() {
	return randomFunc[Math.floor( Math.random() * Object.keys(randomFunc).length)];
}

function generatePassword() {
	let password = '';
	const passwordLength = Math.random() * (32 - 8) + 8;
	for( let i = 1; i <= passwordLength; i++ ) {
		password += getRandomFunc()();
	}
	//check with regex
	const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/
	if( !password.match(regex) ) {
		password = generatePassword();
	}
	return password;
}

console.log( generatePassword() );