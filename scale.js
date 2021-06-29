/*
*Problem Statement* 

Here at Scale, customers send us collections of data over the course of each week. Let’s call each unit of data a “task.” We send these tasks to our work force for labeling. When these tasks are labeled, we send them back to the customer.

Each task goes through three sequential stages:

L0 → L1 → L2

Workers are given task stages to work on.
A task is only “complete” when it reaches the L2 stage and work is finished on the L2 stage

Notes: 
- There is a 1:1 mapping between task stages and workers working on a task stage. (i.e  Task X L1 can only have 1 worker at one time, that worker cannot be working on anything else)
- A worker can only work on a task if the worker has never worked on that task before. 
- For now, assume each worker takes 1 timestep. We may change this later.
- Tasks should be greedily assigned to any free workers who can work on the task.

*Write a system that simulates the environment and runs until all tasks are completed. Do not worry about runtime, we are looking for correctness.
On every timestamp where activity happens:
Print out the timestamp, and all the activities that happened. (worker assignment/completion).*
*At the end, print out the total number of time steps taken to complete the simulation. *

*Sample input 1:* 
tasks = [Task('A')]
workers = [Worker('X'), Worker('Y'), Worker('Z')]

*Sample output 1:*
0
Assigning X to Task A for L0
1
Worker X finished Task A for L0
Assigning Y to Task A for L1
2
Worker Y finished Task A for L1
Assigning Z to Task A for L2
3
Worker Z finished Task A for L2
Total time taken: 3 min
*/

class task {
  constructor(name){
	this.name = name;
	this.workers = [];
	this.currentstage = 0;
  }
}

class worker {
  constructor(name){
	this.name = name;
	this.free = true;
	this.past = null;
	this.totalTime = null;
  }
}

const t = [new task('A'), new task('B')];
const w = [new worker('X'), new worker('Y'), new worker('Z')];
const stages = ['L0', 'L1', 'L2'];

function getFreeW(task){
  
  return w.find( x => x.free && (!task.workers.includes(x)) );
}


function scale (t, w){
  let i = 0;
  while(true){
	if(i===5){
		break;
	}
	console.log(i);
    
	w.forEach( worker => {
	  if(!worker.free && worker.past){
		// Worker X finished Task A for L0
		console.log('Worker '+worker.name+' finished '+worker.past);
		worker.past=null;
		worker.free=true;
	  }
	});
    
    
	t.forEach(task => {
		if(task.currentstage===3){
			task.totalTime = i-1;
		}
	  const freeW = getFreeW(task); //task A
	  if(freeW && task.currentstage<3){
		freeW.free = false;
		console.log('Assigning '+freeW.name+' to Task '+task.name+' for L'+task.currentstage); //X to A0
		freeW.past = 'Task '+task.name+' for L'+task.currentstage;
		task.workers.push(freeW); //A will have X
		task.currentstage++; //A1
	  }
	  
	});
	i++;
  }
  t.forEach(task => {
	  console.log('Total time taken for Task '+task.name+': '+task.totalTime+' min')
  })
}


scale(t,w);