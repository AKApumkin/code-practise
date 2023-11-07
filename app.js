let arrayExample = [4, 5, 5, 4, 5, 3, 6];

const mainLoop = (items) => {
    let counter = 0;
    let currentArray = items;
    do {
        counter++;
        currentArray = loopDecrement(currentArray);
    } while(checkItem(currentArray) === false);
    console.log(counter);
};

// Check if the any item is 1 or less then return true
const checkItem = (items) => {
    const  checkArray = items.filter((item) => item <= 1).length > 0;
    return checkArray;
}

// Decrement all items in the array by one
const loopDecrement = (items) => {
    const  newArray = items.map((item) => item - 1);
    return newArray;
}
mainLoop(arrayExample);
