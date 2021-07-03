/**
 * EXAMPLE : S = 'AAABCADDE', k = 3
 * There are three substrings of length  to consider: 'AAA', 'BCA' and 'DDE'.
 * The first substring is all 'A' characters, so unique chars  = 'A'
 * The second substring has all distinct characters, so unique chars  = 'BCA'
 * The third substring has 2 different characters, so unique chars  = 'DE'
 * Note that a subsequence maintains the original order of characters encountered.
 * The order of characters in each subsequence shown is important.
 */

function getUniqueChars ( s, k ) {
	let count = 0;
	let temp = '';
	[ ...s ].forEach( i => {
		count++;
		temp = temp + i;
		if ( count === k ) {
			console.log( [ ...new Set( [ ...temp ] ) ].join( '' ) );
			count = 0;
			temp = '';
		}
	} );
}

getUniqueChars( 'AAABCADDE', 3 );
/**
 * Output should be
 * A
 * BCA
 * DE
 */

getUniqueChars( 'AABCAAADA', 3 );
/**
 * Output should be
 * AB
 * CA
 * AD
 */