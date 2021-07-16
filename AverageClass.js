/*
class <Name>
	func1: void takeNumber(<number>);
	func2: number getAverage();

numsForNow = [ 1 2 3 4 5 ] 
Sum=10 size=4 k=4
If size<=k : same
Else: removedNumber = numsForNow.shift() , sum-removedNumber+num
*/

class PlayVS {
	constructor ( k ) {
		this.currentNums = [];
		this.sum = 0;
		// this.size = 0;
		this.k = k;
	}


	takeNumber = (num) => {
		// this.allNums.push(num);
		// space: O(n)
		// time: O(1)

		// this.sum+=num; 
		// This.size++;

		// space O(1)
		// time O(1)

		this.currentNums.push( num );
		this.sum += num;		
		if ( this.currentNums.length > this.k ) {
			const removedNumber = this.currentNums.shift();
			this.sum -= removedNumber;
		}
	}

	getAverage = () => {
		// if(this.allNums.length==0) return 0;
		// const sum = this.allNums.reduce((acc,curr)=>acc+curr); //[ -1 2 3] //time O(n)
		// return sum/this.allNums.length;

		// if(this.size === 0) return 0;
		// return this.sum/this.size //time O(1)

		if(this.currentNums.length==0) return 0;
		return this.sum/this.currentNums.length;
	}
}


const obj = new PlayVS();
console.log( obj.getAverage() === 0 ); //true
obj.takeNumber( -1 );
obj.takeNumber( 3 );
console.log( obj.getAverage() === 1 ); //true
obj.takeNumber( 7 );
console.log( obj.getAverage() === 3 ); //true
obj.takeNumber( -3 );
console.log( obj.getAverage() === 1.5 ); //true

/* TESTING

const obj = new PlayVS();

Assert( obj.getAverage() === 0 );

obj.takeNumber(-1);
obj.takeNumber(3);
Assert( obj.getAverage() === 1 );

obj.takeNumber(7);
Assert( obj.getAverage() === 3);
obj.takeNumber(-3);
Assert( obj.getAverage() === 1.5 );

*/