// Input: A matrix of numbers of arbitrary size and shape.
const matrix = [
	[ 9, 12, 13, 49, 70, 109 ],
	[ 10, 24, 27, 52, 71, 150 ],
	[ 12, 26, 32, 65, 72, 164 ],
	[ 20, 35, 36, 78, 80, 170 ],
	[ 24, 41, 43, 82, 96, 174 ],
	[ 28, 44, 55, 91, 108, 196 ]
];



// Solution: A function returning true if `matrix` contains `value`, else false.
// Also: please add a standard doc string to the function below.

/*
* Function to search for value and return true if found
* input: value: number
* output: boolean
*/
function matrixContains ( value ) {
	//solution goes here
	for ( let i = 0;i < matrix.length;i++ ){
		const lastElement = matrix[ i ][ matrix[ i ].length - 1 ];
		if ( target === lastElement ) return true;
		if ( value < lastElement ) {
			let isInCurrentRow = binarySearch( matrix[ i ], 0, matrix[ i ].length - 1, value );
			if ( isInCurrentRow ) return true;
		}
	}
	return false;
}

const binarySearch = ( arr, start, end, target ) => {
	while ( start <= end ) {
		let mid = Math.floor( ( start + end ) / 2 );
		if ( arr[ mid ] === target ) return true;
		if ( arr[ mid ] < target ) start = mid + 1;
		else end = mid - 1;
	}
	return false;
}


console.log( matrixContains( 70 ) );	//true
console.log( matrixContains( 110 ) );	//false
console.log( matrixContains( 65 ) );	//true
console.log( matrixContains( 165 ) );	//false
console.log( matrixContains( 41 ) );	//true