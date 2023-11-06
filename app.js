let arrayExample = [4, 5, 5, 4, 5, 3, 6];

const mainLoop = (items) => {
    let counter = 0;
    do {
        counter++;
        loopDecrement(items);
    } while(checkItem(items) === false);
    console.log(counter);
};

// Check if the any item is 1 or less then return true
const checkItem = (items) => {
    let checkState = false;
    for(i = 0; i < items.length; i++) {
        if(items[i] <= 1) {
            checkState = true;
        } 
    }
    return checkState;
}

// Decrement all items in the array by one
const loopDecrement = (items) => {
    for(i = 0; i < items.length; i++) {
        items[i] -= 1;
    }
}
mainLoop(arrayExample);
