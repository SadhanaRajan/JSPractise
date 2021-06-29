//Given two sorted arrays and a number x, find a pair in those arrays whose sum is closest to x.

function closestPair(arr1, arr2, x) {
	let left = 0;
	let right = arr2.length - 1;
	let diff = Infinity;
	let result1 = 0
	let result2 = 0;
	while( left < arr1.length  && right > 0 ) {
		let s = Math.abs( arr1[ left ] + arr2[ right ] - x );
		if ( s < diff ) {
			diff = s;
			result1 = left;
			result2 = right;
		}
		if( arr1[ left ] + arr2[ right ] < x ) {
			left++;
		} else {
			right--;
		}
	}
	console.log( 'The closest pair is ' + arr1[ result1 ] + ' and ' + arr2[ result2 ] );
}


arr1 = [ 1, 4, 5, 7 ];//[ 1, 8, 10, 12 ];
arr2 = [ 10, 20, 30, 40 ];//[ 2, 4, 9, 15 ];
x = 38;//11;
closestPair( arr1, arr2, x );
