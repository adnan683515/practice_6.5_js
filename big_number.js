


var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];



const big_number = (number) => {
    let biggest_number = numbers[0];
    for (let i=0;i<numbers.length ;i++){

        if (numbers[i] > biggest_number){
            biggest_number = numbers[i];
        }
    }
    return biggest_number;
}

const result = big_number(numbers);
console.log(result);
