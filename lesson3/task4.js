function f(a) {
    if (a === 1) {
        console.log('Воскресенье');
    }
    else if (a === 2) { 
        console.log('Понедельник');
    }
    else if (a === 3) { 
        console.log('Вторник');
    }
    else if (a === 4) { 
        console.log('Среда');
    }
    else if (a === 5) { 
        console.log('Четверг');
    }
    else if (a === 6) { 
        console.log('Пятница');
    }
    else if (a === 7) { 
        console.log('Суббота');
    }
    else if (typeof a != 'number') {
        throw new Error("Error: parameter type is not a Number");
    }
    else if (a < 1 || a > 7) {
        throw new Error("Error: parameter should be in the range of 1 to 7");
    }
}


f(1); // Воскресенье
f(2); // Понедельник