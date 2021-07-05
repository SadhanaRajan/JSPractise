//Count the number of prime numbers less than a non-negative number, n.


/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function ( n ) {
	if ( n <= 1 ) {
		return 0;
	}
	const isPrime = Array( n ).fill( true );
	let count = 0;

	for ( let i = 2;i < n;i++ ) {
		if ( isPrime[ i ] ) {
			count++;

			for ( let j = 2;i * j < n;j++ ) {
				isPrime[ i * j ] = false;
			}
		}
	}

	return count;
};

console.log( countPrimes( 10 ) ); //4