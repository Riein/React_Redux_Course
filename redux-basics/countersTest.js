const addCounter = (list) => {
  return [...list, 0];
};

const removeCounter = (list, index) => {
  return [
    ...list.slice(0 , index),
    ...list.slice(index + 1)
  ];
};

const incrementCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ];
}

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];
  
  //deepFreeze(listBefore);
  
  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
  
  console.log("Add tests passed.");
};

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];
  
  //deepFreeze(listBefore);
  
  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter);
  
  console.log("Remove tests passed.");
}

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];
  
  expect(
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter);
  
  console.log("Increment tests passed.")
}

testAddCounter();
testRemoveCounter();
console.log('All tests passed.');