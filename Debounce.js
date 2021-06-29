
function debounce(func, timeout = 0){
  let timer;
  return (...args) => {
	clearTimeout(timer);
	timer = setTimeout(() => {
		func.apply(this, args);
	}, timeout);
  };
}

function logI(i){
  console.log('i is now ' + i);
}
const callOnce = debounce((i) => logI(i));

for ( let i = 0; i < 10;i++){
	callOnce(i);
}