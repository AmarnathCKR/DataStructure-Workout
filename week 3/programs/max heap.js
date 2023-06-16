// value of children will be smaller than parents
class MaxHeap {
    constructor() {
      this.values = [];
    }
  
    insertion(val) {
      //inserting the value
      this.values.push(val);
      // placing the value in the correct spot
      let index = this.values.length - 1,
        parentIndex = Math.floor((index - 1) / 2);
      while (index > 0 && this.values[index] > this.values[parentIndex]) {
        [this.values[parentIndex], this.values[index]] = [
          this.values[index],
          this.values[parentIndex],
        ];
        index = parentIndex;
        parentIndex = Math.floor((index - 1) / 2);
      }
    }
   
    
  }
  
  const maxheap = new MaxHeap();
  maxheap.insertion(60);
  maxheap.insertion(40);
  maxheap.insertion(20);
  maxheap.insertion(30);
  maxheap.insertion(10);
  console.log(maxheap.removeMax());
  console.log(maxheap);
  