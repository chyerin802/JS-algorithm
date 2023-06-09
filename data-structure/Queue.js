class Queue {
	constructor() {
		this.items = {};
		this.head = 0;
		this.tail = 0;
  }

  enqueue(item){
    this.items[this.tail] = item;
    this.tail++;
  }

  dequeue(){
    if(this.isEmpty()) return undefined;
    
    const dequeuedItem = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return dequeuedItem;
  }

  isEmpty() {
    return this.head === this.tail;
  }

  peek() {
    return this.items[this.head];
  }

  getLength() {
    return this.tail - this.head;
  }
}
