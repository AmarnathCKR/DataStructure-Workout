class MinHeap {
    constructor() {
      this.values = [];
    }
    insert(val) {
      this.values.push(val);
      let index = this.values.length - 1;
      let parent = Math.floor((index - 1) / 2);
      while (index > 0 && this.values[index] < this.values[parent]) {
        [this.values[index], this.values[parent]] = [
          this.values[parent],
          this.values[index],
        ];
        index = parent;
        parent = Math.floor((index - 1) / 2);
      }
    }
  
   
  }
  
  const minheap = new MinHeap();
  minheap.insert(60);
  minheap.insert(40);
  minheap.insert(20);
  minheap.insert(30);
  minheap.insert(10);
  minheap.insert(100);
  console.log(minheap);
  