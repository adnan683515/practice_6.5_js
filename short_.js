

var num = [1,4,2,3,5,10,7,6,20,19,12,11,14,13,15,18,17,16];

const shortlist = (number) => {
   
    for (let i=0;i<num.length-1;i++){

       
       for (let j=i+1;j<num.length ;j++){


        if (num[i] > num[j]){

            let temp = num[i];
            num[i] = num[j];
            num[j] = temp;
        }
       }
        

    }

}

shortlist(num);
console.log(num);