




//const function_name = (perameters) => statement;



const one_to_fifty = (n) => {

    for (let i = 1; i <= 50; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i);
        }
    }
}


one_to_fifty(50);