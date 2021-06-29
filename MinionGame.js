/**
 * Both players are given the same string, S.
 * Both players have to make substrings using the letters of the string S.
 * Stuart has to make words starting with consonants.
 * Kevin has to make words starting with vowels.
 * The game ends when both players have made all possible substrings.
 * A player gets +1 point for each occurrence of the substring in the string S.
 * Your task is to determine the winner of the game and their score.
 * Input: A single line of input containing the string S.
 * Note: The string S will contain only uppercase letters.
 * 0 < len(S) <= 10^6
 * Output: Print one line: the name of the winner and their score separated by a space.
 * If the game is a draw, print Draw.
 */

let Kevin = 0;
let Stuart = 0;

function minion ( s ) {
	const n = s.length;
	for ( let i = 0;i < n;i++ ) {
		if ( s[ i ] === 'A' || s[ i ] === 'E' || s[ i ] === 'I' || s[ i ] === 'O' || s[ i ] === 'U' ) {
			Kevin += n - i;
		} else {
			Stuart += n - i;
		}
	}
	if ( Kevin === Stuart ) {
		return 'Draw';
	}
	return Kevin > Stuart ? 'Kevin ' + Kevin : 'Stuart ' + Stuart;
}

// function minion ( s ) {
// 	const n = s.length;
// 	let array = [];
// 	for ( let i = 0;i < n;i++ ) {
// 		for ( let j = i + 1;j < n + 1;j++ ) {
// 			const sub = s.slice( i, j );
// 			if ( sub[ 0 ] === 'A' || sub[ 0 ] === 'E' || sub[ 0 ] === 'I' || sub[ 0 ] === 'O' || sub[ 0 ] === 'U' ) {
// 				Kevin++;
// 			} else {
// 				Stuart++;
// 			}
// 			array.push( sub );
// 		}
// 	}
// 	if ( Kevin === Stuart ) {
// 		return 'Draw';
// 	}
// 	return Kevin > Stuart ? 'Kevin ' + Kevin : 'Stuart ' + Stuart;
// }

console.log( minion( 'BANANA' ) );