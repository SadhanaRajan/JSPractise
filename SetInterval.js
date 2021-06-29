// implement setInterval() using setTimeout()

function setInterval(callback, periodInMS, onError) {
	const timer = {id:null};
  	const foo = ()=>{
		timer.id = setTimeout(()=>{
		try {
			callback();
		} catch(err){
			onError(err)
		}
		foo();
		},periodInMS);
	};
	const cancel = ()=>{
		clearTimeout(timer.id);
	};
	foo();
	return cancel;
	// return timer;
}

// timer = setInterval()
// clearTimeout(timer.id);

// function clearInterval(timer){
//   clearTimeout(timer.id);
// }

const cancel = setInterval(()=>{
  throw new Error('error MSG')
}, 1000, (error) => {console.log(error)} );


setTimeout(cancel,5000);