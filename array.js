'use strict';
const Memory = require('./memory');
const memory = new Memory();

class Array {
  constructor() {
    this.length = 0;
    this.capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length + 1 >= this.capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(length) {
    const prevPtr = this.ptr;
    this.ptr = memory.allocate(length);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, prevPtr, length);
    memory.free(prevPtr);
    this.capacity = length;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }

  pop() {
    if (this.length === 0) {
      throw new Error('Index Error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    if (this.length + 1 >= this.capacity) {
      this._resize(this.length + 1 * Array.SIZE_RATIO);
    }
    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
  }
}

function main() {
  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let arr = new Array();

  //add an item to the array
  arr.push(3); //Array { length: 1, capacity: 3, ptr: 0 }
  arr.push(5); //Array { length: 2, capacity: 3, ptr: 0 }
  arr.push(15); //Array { length: 3, capacity: 9, ptr: 3 }
  arr.push(19); //Array { length: 4, capacity: 9, ptr: 3 }
  arr.push(45); //Array { length: 5, capacity: 9, ptr: 3 }
  arr.push(10); //Array { length: 6, capacity: 9, ptr: 3 }
  arr.pop(); //Array { length: 5, capacity: 9, ptr: 3 }
  arr.pop(); //Array { length: 4, capacity: 9, ptr: 3 }
  arr.pop(); //Array { length: 3, capacity: 9, ptr: 3 }

  // console.log(arr);
  console.log(arr.get(0));
  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr);
  arr.push('tauhida');
  console.log(arr.get(0));
}

main();
