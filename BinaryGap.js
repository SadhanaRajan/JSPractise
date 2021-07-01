/**
A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
 */


// NEW recursive function
function getGaps ( BinaryArray, gaps ) {
	// finding the first one via its index
	const firstOne = BinaryArray.indexOf( "1" );
	if ( firstOne > -1 ) {
		// new array created taking a slice of original array 
		// from the index of the firstOne + 1 index
		let NewBinaryArray = BinaryArray.slice( firstOne + 1 );
		// finding second one via its index in new array slice
		const secondOne = NewBinaryArray.indexOf( "1" );
		// accounting for no zeros
		if ( secondOne > 0 ) {
			// adding 2 to our gaps array
			gaps.push( secondOne );
		}

		// Pass array minus second one and gaps array
		return getGaps( NewBinaryArray.slice( secondOne ), gaps );
	}

	// if gaps array length is empty return 0
	// otherwise return largest value in array
	return ( gaps.length > 0 ) ? Math.max.apply( Math, gaps ) : 0;
}

function solution ( N ) { // N is 328
	//one line answer
	return Math.max( 0, ...( N >>> 0 )
		.toString( 2 ) 				//101001000
		.split( '1' ) 				//["", "0", "00", "000"]
		.map( v => v.length ) //[0, 1, 2, 3]
		.slice( 1, -1 ) );

	// Tests if our value is an integer 
	// Tests if N is within range
	if ( N === parseInt( N, 10 ) && N >= 1 && N <= 2147483647 ) {
		// Convert to binary
		const Binary = N.toString( 2 ).split( '' );

		// calling our recursive function with initial empty gaps
		return getGaps( Binary, [] );
	}

	// default if it doesn't meet the requirements
	return 0;



}


console.log( solution( 1041 ) );
console.log( solution( 15 ) );
console.log( solution( 32 ) );
console.log( solution( 328 ) );