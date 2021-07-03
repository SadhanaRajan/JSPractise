/*
Given three integer arrays sorted in ascending order, have to find the smallest number that is common in all three arrays.
v1 = [1, 6, 10, 14, 50]
v2 = [-1, 0, 2, 6, 7, 8, 50]
v3 = [0, 1, 6, 7, 10, 25, 30, 50]
Output 6.
*/

/**
 * create Set for V2 and V3 // O(v2.length) + O(v3.length) //space complexity
 * loop thru v1 //O(v1.length)
 * check if v1[i] is present in v2set && v3set
 * 
 * 
 * binary search on v2 and v3 // O(nlogn)
 * 
 * 
 * 3 pointers and (while) loop thru all 3 arrays (till at least one array ends) // O(Min(3 lengths))
 * i = 1 
 * j = -1 , 0 , 2
 * k = 0
 * 
 * i==j==k // return
 * i<j || i<k then i++ 
 * j<i || j<k then j++ 
 * k<i || k<j then k++
 * 
 * return null if no common elems
 * 
 * */

function smallestCommon ( v1, v2, v3 ) {
    //initialize 3 pointers
    let i = 0;
    let j = 0;
    let k = 0;

    common = -Infinity

    //loop till at least one array ends
    while ( i < v1.length && j < v2.length && k < v3.length ) {
        let a = v1[ i ];
        let b = v2[ j ];
        let c = v3[ k ];
        if ( a === b && b === c ) {
            return a
        }
        if ( a < b || a < c ) {
            i++;
            a = v1[ i ]
        }
        if ( b < a || b < c ) {
            j++;
            b = v2[ j ];
        }
        if ( c < a || c < b ) {
            k++;
            c = v3[ k ];
        }
        console.log( a, b, c )
    }
    //no common elems
    return common > -Infinity ? common : null;
}

v1 = [ 1, 6, 10, 14, 50 ]
v2 = [ -1, 0, 2, 6, 7, 8, 50 ]
v3 = [ 0, 1, 6, 7, 10, 25, 30, 50 ]
console.log( smallestCommon( v1, v2, v3 ) );