// we can implement unlimited parameter

function unlimited(...values) {
    // ... parameter represent 'rest' parameter
    console.log(values);
}

// calling the function 
unlimited(10, 20, 30, 40, 50, 60, 70,"hello",true);