class MaxHeap {
  constructor() {
    this.values = [];
  }

  insertion(val) {
    this.values.push(val);
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

  removeMax() {
    let heap = this.values;
    if (heap.length < 1) return null;
    const max = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();

    let currentIdx = 0;
    while (true) {
      const leftChildIdx = 2 * currentIdx + 1;
      const rightChildIdx = 2 * currentIdx + 2;
      let maxIdx = currentIdx;

      if (leftChildIdx < heap.length && heap[leftChildIdx] > heap[maxIdx]) {
        maxIdx = leftChildIdx;
      }
      if (rightChildIdx < heap.length && heap[rightChildIdx] > heap[maxIdx]) {
        maxIdx = rightChildIdx;
      }

      if (maxIdx === currentIdx) break;

      [heap[currentIdx], heap[maxIdx]] = [heap[maxIdx], heap[currentIdx]];
      currentIdx = maxIdx;
    }

    return max;
  }
}

const maxheap = new MaxHeap();
maxheap.insertion(60);
maxheap.insertion(40);
maxheap.insertion(20);
maxheap.insertion(30);
maxheap.insertion(10);
console.log(maxheap.removeMax());
