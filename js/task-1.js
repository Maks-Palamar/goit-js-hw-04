function isEnoughCapacity(products, containerSize) {
    let productsSum = 0;

    for (let key in products) {
        productsSum += products[key];

        if (productsSum > containerSize) {
            console.log('Too many items, your container cannot contain them all');
            return false;
        } else if (productsSum === containerSize) {
            console.log('Container perfectly fits this number of products, but won\'t fit any more');
            return true;
        }
    }

    console.log('All products fit into this container');
    return true;
}

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false