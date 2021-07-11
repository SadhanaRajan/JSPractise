// Find the diameter of a binary tree

class Node {
	constructor ( data ) {
		this.left = null;
		this.right = null;
		this.data = data;
	}
}
function newNode ( data ) {
	let node = new Node( data );
	return ( node );
}


let root = newNode( 1 );
root.left = newNode( 2 );
root.right = newNode( 3 );
root.left.left = newNode( 4 );
root.left.right = newNode( 5 );
root.right.right = newNode( 7 );

/**
 * 					1
 * 				/		\
 * 			2				3
 * 		 / \       \
 * 		4		5				7
 */

var diameterOfBinaryTree = function ( root ) {
	let max = [ 0 ];
	getHeight( root, max );
	return max[ 0 ];
};

var getHeight = function ( node, max ) {
	if ( node == null ) return 0;
	let leftH = getHeight( node.left, max );
	let rightH = getHeight( node.right, max );
	max[ 0 ] = Math.max( max[ 0 ], leftH + rightH );
	return ( Math.max( leftH, rightH ) + 1 );
}

console.log( `Diameter of Binary Tree is ${ diameterOfBinaryTree( root ) }` );
