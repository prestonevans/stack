// class Stack {
// 	constructor() {
// 		this.items = [];
// 		this.count = 0;
// 	}
// 	//add elements to top of stack
// 	push(element) {
// 		this.items[this.count] = element;
// 		// console.log(`${element} added to ${this.count}`);
// 		this.count++;
// 		return this.count - 1;
// 	}
// 	pop() {
// 		if (this.count === 0) return undefined;
// 		let deleteItem = this.items[this.count - 1];
// 		this.items.splice(this.count - 1, 1);
// 		this.count--;
// 		return deleteItem;
// 	}
// 	peek() {
// 		return this.items[this.count - 1];
// 	}
// 	isEmpty() {
// 		return this.count === 0;
// 	}
// 	size() {
// 		return this.count;
// 	}
// 	print() {
// 		return this.items;
// 	}
// 	clear() {
// 		this.items = [];
// 		this.count = 0;
// 		return this.count;
// 	}
// }
// const stack = new Stack();

// console.log(stack.pop());
// console.log(stack.push(44));
// console.log(stack.push(334));
// stack.clear();
// console.log(stack.print());
// console.log(stack.pop());
// console.log(stack.items);

// console.log(stack.print());

// console.log(stack.size());
// console.log(stack.pop());
// console.log(stack.items);
// console.log(stack.isEmpty());

// class StackObj {
// 	constructor() {
// 		this.storage = {};
// 		this.count = 0;
// 	}
// 	push(el) {
// 		this.count++;
// 		this.storage[this.count] = el;
// 	}
// 	pop() {
// 		if (this.count === 0) return undefined;
// 		let removed = this.storage[this.count];
// 		delete this.storage[this.count];
// 		this.count--;
// 		return removed;
// 	}
// 	peek() {
// 		return this.storage[this.count];
// 	}
// 	size() {
// 		return this.count;
// 	}
// 	clear() {
// 		this.storage = {};
// 		this.count = 0;
// 	}
// }

// const test = new StackObj();
// console.log(test.pop());
// test.push('test');
// test.push('lets');
// console.log(test.peek());
// test.push('go');
// console.log(test.size());
// test.clear();
// test.push('test');
// test.push('Hellooo');
// test.push('Sup');
// test.pop();

// // console.log(test.pop());

// console.log(test.storage);

// class Stacker {
// 	constructor() {
// 		this.storage = {};
// 		this.count = 0;
// 	}
// 	push(el) {
// 		this.count++;
// 		this.storage[this.count] = el;
// 	}
// 	pop() {
// 		if (this.count === 0) return undefined;
// 		let temp = this.storage[this.count];
// 		delete this.storage[this.count];
// 		this.count--;
// 		return temp;
// 	}
// 	peek() {
// 		return this.storage[this.count];
// 	}
// 	clear() {
// 		this.count = 0;
// 		this.storage = {};
// 	}
// 	size() {
// 		return this.count;
// 	}
// }

// const stackStack = new Stacker();

// stackStack.push('test');
// stackStack.push('test2');
// console.log(stackStack.pop());
// stackStack.push('test3');
// console.log(stackStack.peek());
// stackStack.clear();
// console.log(stackStack.size());

// console.log(stackStack.storage);

// class Stack {
// 	constructor() {
// 		this.storage = {};
// 		this.count = 0;
// 	}
// 	push(el) {
// 		this.count++;
// 		this.storage[this.count] = el;
// 	}
// 	pop() {
// 		if (this.count === 0) return undefined;
// 		let temp = this.storage[this.count];
// 		delete this.storage[this.count];
// 		this.count--;
// 		return temp;
// 	}
// 	peek() {
// 		return this.storage[this.count];
// 	}
// 	clear() {
// 		this.storage = {};
// 		this.count = 0;
// 		return 'cleared';
// 	}
// }

// const stack = new Stack();
// console.log(stack.pop());
// stack.push('test');
// console.log(stack.peek());
// stack.push('is');
// stack.push('this');
// stack.push('thing');
// stack.clear();
// stack.push('working?');
// console.log(stack.storage);

// class Queue {
// 	constructor() {
// 		this.storage = {};
// 		this.count = 0;
// 		this.rmCounter = 0;
// 	}
// 	enqueue(el) {
// 		this.count++;
// 		this.storage[this.count] = el;
// 	}
// 	dequeue() {
// 		if (this.count === this.rmCounter) return undefined;
// 		this.rmCounter++;
// 		let temp = this.storage[this.rmCounter];
// 		delete this.storage[this.rmCounter];
// 		return temp;
// 	}
// 	peek() {
// 		return this.storage[this.rmCounter + 1];
// 	}
// 	size() {
// 		return this.count - this.rmCounter;
// 	}
// }

// const queue = new Queue();

// console.log(queue.peek());
// queue.enqueue('is');
// console.log(queue.dequeue());
// // console.log(queue.dequeue());
// queue.enqueue('this');
// queue.enqueue('working?');
// console.log(queue.storage);
// queue.enqueue('haha');
// console.log(queue.peek());
// console.log(queue.size());

// function multiply(a, b) {
// 	return a * b;
// }
// function square(num) {
// 	return multiply(num, num);
// }

// function isSquare(num) {
// 	return square(num) === num ** 2;
// }

// console.log(isSquare(2));

// console.log('Sending request to server');

// setTimeout(() => {
// 	console.log('Here is your data bub');
// }, 2000);
// console.log('I am at the end of the file');

// document.body.style.backgroundColor = 'red';

// setTimeout(() => {
// 	document.body.style.backgroundColor = 'orange';
// 	setTimeout(() => {
// 		document.body.style.backgroundColor = 'yellow';
// 		setTimeout(() => {
// 			document.body.style.backgroundColor = 'green';
// 			setTimeout(() => {
// 				document.body.style.backgroundColor = 'blue';
// 				setTimeout(() => {
// 					document.body.style.backgroundColor = 'indigo';
// 					setTimeout(() => {
// 						document.body.style.backgroundColor = 'violet';
// 					}, 3000);
// 				}, 3000);
// 			}, 3000);
// 		}, 3000);
// 	}, 3000);
// }, 500);

// const fakeUrlCallback = (url, success, failure) => {
// 	let delay = Math.floor(Math.random() * 2000);
// 	setTimeout(() => {
// 		if (delay < 1000) {
// 			success(`You made it to ${url}`);
// 		} else {
// 			failure('Nah not today');
// 		}
// 	}, delay);
// };

// fakeUrlCallback(
// 	'google.com',
// 	(x) => {
// 		console.log(x);
// 	},
// 	(x) => {
// 		console.log(x);
// 	}
// );

class Queue {
	constructor() {
		this.storage = [];
	}
	enqueue(el) {
		return this.storage.push(el);
	}
	dequeue() {
		return this.storage.shift();
	}
	peek() {
		if (this.storage.length === 0) return undefined;
		return this.storage[0];
	}
	size() {
		this.storage.length;
	}
	clear() {
		this.storage = [];
	}
}

const test = new Queue();

console.log(test.enqueue('is'));
test.enqueue('this');
test.enqueue('working');
console.log(test.dequeue());
console.log(test.storage[0]);
test.clear();
console.log(test.peek());
console.log(test.storage);
