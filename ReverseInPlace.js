function revBetween ( str, start, end ) {
	let temp;
	while ( start <= end ) {
		//swap start and end
		temp = str[ start ];
		str[ start ] = str[ end ];
		str[ end ] = temp;
		start++;
		end--;
	}
}

function reverseWords ( s ) {
	s = s.split( "" );
	let start = 0;
	for ( let end = 0;end < s.length;end++ ) {
		if ( s[ end ] == ' ' ) {
			revBetween( s, start, end );
			start = end + 1;
		}
	}
	revBetween( s, start, s.length - 1 );
	revBetween( s, 0, s.length - 1 );
	return s.join( "" );
}

console.log( reverseWords( 'i like this program very much ' ) )
console.log( reverseWords( 'practise makes perfect ' ) )