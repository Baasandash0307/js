

// // let nums = [1, 2, 3, 4];

// // let result = 0;

// // for(let i = 0; i < nums.length; i++){
// //     result += nums[i];
// // }
// // console.log(result);



// ////////


// const names = [
//     "baljan",
//     "itgel",
//     "jamiyansuren",
//     "chingun",
//     "telmuun",
//     "chinguun",
//     "nomi",
//     "aygul",
//     "behbat",
//     "narangerel",
//     "oyunbat",
//     "turbat",
//     "baasandash",
//     "jargalsaihan",
//     "tugsbileg",
//     "huwituguldur",
//     "ursaa",
//     "ider",
//     "ariunjargal"
// ];

// const find = "baasandash"

// for (let i = 0; i < names.length; i++) {
//     if (find == names[i]) {
//         console.log(i)
//     }
// }

// function find(names){
//     for(i = 0; i < names.length; i++)
//         if(find == names[i]){
//             console.log(i);
            
//         }
//         find(baljan)
//     }



// let a = 14;
// let b = 19;

// let diff = ((b - a)**2)**(1/2);
// let max = (a + diff + b) / 2;
// console.log(max);




////////////////




const numbers = [12, 25, 33, 4, 51, 64];
let max = 0;
let maxIndex = 0;

for (let i = 0; i <numbers.length; i++){
    if(max < numbers[i]){
        max = numbers[i];
        maxIndex = i
    }
}
console.log(max);
console.log(maxIndex);


