



var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const array = [];

const dup = (number) => {

    for (let i = 0; i < number.length; i++) {

        if (numbers[i] == numbers[i + 1]) {

            delete numbers[i+1];
            

        }
    }
}
dup(numbers);
console.log(numbers);




