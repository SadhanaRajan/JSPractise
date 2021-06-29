findMaxConsecutiveOnes = ( nums ) => {
	// write your code here
	count = 0;
	result = 0;
	mid = 0;
	flag = false;
	for ( i of nums ) {
		if ( i == 1 ) {
			count++;
			if ( flag === true ) {
				mid++
			}
		} else if ( flag === false ) {
			flag = true;
			count++
		} else {
			count = mid + 1;
			mid = 0;
			result = Math.max( result, count )
		}
		console.log( 'At element: ' + i + ' count: ' + count + ' flag: ' + flag + ' mid: ' + mid + ' result: ' + result );
	}
	result = Math.max( result, count )
	return result
}

findMaxConsecutiveOnes( [ 1011011 ] );