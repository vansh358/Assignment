function createCounter() {
  let count = 0; 

  return {
    increment: function () {
      count++;
      console.log("Count after increment:", count);
    },
    decrement: function () {
      count--;
      console.log("Count after decrement:", count);
    },
    getCount: function () {
      console.log("Current count:", count);
      return count;
    }
  };
}


const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement(); 
counter.getCount();  


console.log(counter.count); 
