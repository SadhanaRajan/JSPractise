var Position = function ( y, x ) {
	this.x = x;
	this.y = y;
}
Position.prototype.toString = function () {
	return this.y + "," + this.x;
};

/**
 * Initialize your data structure here.
				@param width - screen width
				@param height - screen height 
				@param food - A list of food positions
				E.g food = [[1,1], [1,0]] means the first food is positioned at [1,1], the second is at [1,0].
 * @param {number} width
 * @param {number} height
 * @param {number[][]} food
 */
var SnakeGame = function ( width, height, food ) {
	this.width = width;
	this.height = height;
	this.food = food;

	this.board = new Set();
	this.eat = 0
	this.snake = []; //LINKED LIST of Positions

	let head = new Position( 0, 0 );
	this.snake.push( head );
	this.board.add( head.toString() );
	this.eatFunc = ( y, x ) => {
		if ( this.eat >= this.food.length ) {
			return false;
		}
		if ( this.food[ this.eat ][ 0 ] < 0 ||
			this.food[ this.eat ][ 0 ] >= this.height ||
			this.food[ this.eat ][ 1 ] < 0 ||
			this.food[ this.eat ][ 1 ] >= this.width ) {
			return false;
		}
		if ( y == this.food[ this.eat ][ 0 ] && x == this.food[ this.eat ][ 1 ] ) {
			return true;
		}

		return false;
	}
};

/**
 * Moves the snake.
				@param direction - 'U' = Up, 'L' = Left, 'R' = Right, 'D' = Down 
				@return The game's score after the move. Return -1 if game over. 
				Game over when snake crosses the screen boundary or bites its body. 
 * @param {string} direction
 * @return {number}
 */
SnakeGame.prototype.move = function ( direction ) {
	let head = this.snake[ 0 ];
	let next = new Position( head.y, head.x );
	switch ( direction ) {
		case 'U':
			next.y--;
			break;
		case 'L':
			next.x--;
			break;
		case 'R':
			next.x++;
			break;
		case 'D':
			next.y++;
			break;
		default:
			return -1;
	}

	if ( next.y < 0 || next.y >= this.height || next.x < 0 || next.x >= this.width ) {
		return -1;
	}

	let ns = next.toString();
	if ( this.eatFunc( next.y, next.x ) ) {
		this.snake.unshift( next );
		this.board.add( ns );
		return ++this.eat;
	}

	let tail = this.snake[ this.snake.length - 1 ];
	this.board.delete( tail.toString() );
	this.snake.pop();

	if ( this.board.has( ns ) ) {
		return -1;
	}
	this.snake.unshift( next );
	this.board.add( ns );
	return this.eat;
};


/**
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */

var obj = new SnakeGame( 3, 2, [ [ 1, 2 ], [ 0, 1 ] ] ); //width , height and food
console.log( null, obj.move( 'R' ), obj.move( 'D' ), obj.move( 'R' ), obj.move( 'U' ), obj.move( 'L' ), obj.move( 'U' ) );
// [ [ 3, 2, [ [ 1, 2 ], [ 0, 1 ] ] ], [ "R" ], [ "D" ], [ "R" ], [ "U" ], [ "L" ], [ "U" ] ]
