function areEquivalentObjects(obj1, obj2) {
    // Get the keys (property names) of obj1 and obj2
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Check if the number of keys is the same
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Check if the values of corresponding keys are equal
    for (const key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    // If all properties and their values match, the objects are equivalent
    return true;
}

// Example objects to compare
const object1 = {
    name: "John",
    age: 30,
    city: "New York"
};

const object2 = {
    name: "John",
    age: 30,
    city: "New York"
};

const object3 = {
    name: "Alice",
    age: 25,
    city: "Los Angeles"
};

// Compare objects
console.log(areEquivalentObjects(object1, object2)); // true
console.log(areEquivalentObjects(object1, object3)); // false