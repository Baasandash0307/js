//ugugdsun toonii niilber


// // let nums = [1, 2, 3, 4];

// // let result = 0;

// // for(let i = 0; i < nums.length; i++){
// //     result += nums[i];
// // }
// // console.log(result);





// maxiig oloh, indexiig oloh





// const numbers = [12, 25, 33, 4, 51, 64];
            // let max = 0;
            // let maxIndex = 0;
            
            // for (let i = 0; i <numbers.length; i++){
            //     if(max < numbers[i]){
            //         max = numbers[i];
            //         maxIndex = i
            //     }
            // }
            // console.log(max);
            // console.log(maxIndex);




///////////////////





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
            
            

//maxiig oloh
            
            // let a = 14;
            // let b = 19;
            
            // let diff = ((b - a)**2)**(1/2);
            // let max = (a + diff + b) / 2;
            // console.log(max);



//// maxiig oloh



// const numbers = [12, 34, 11];
// let max = 0;

// for(let i = 0; i < numbers.length; i++){
//     if(max < numbers[i]){
//         max = numbers[i];
//     }
// }
// console.log(max);


//// maxiig oloh


// let a = 9;
// let b = 5;
// let c = 4;

// if(a > b && a > c){
//     console.log(a);
// }
// else if(a < b && b > c){
//     console.log(a);
// }
// else{
//     console.log(c);
// }



// 4 toonii iheesee 2dhiig oloh



// let a = 23;
// let b = 87;
// let c = 12;
// let d = 75;

// if(a > b && a > c && a < d){
//     console.log(a);
// }
// else if(a > b && a > d && a < c){
//     console.log(a);
// }
// else if(a > c && a > d && a < b){
//     console.log(a);
// }
// else if(b > a && b > c && b < d){
//     console.log(b);
// }
// else if(b > a && b > d && d < c){
//     console.log(b);
// }
// else if(b > d && b > c && b < a){
//     console.log(b);
// }
// else if(c > a && c > b && c < d){
//     console.log(c);
// }
// else if(c > a && c > d && b < c){
//     console.log(c);
// }
// else if(c > d && c > b && b < a){
//     console.log(c);
// }
// else{
//     console.log(d);
// }





///two sum

// const nums = [2, 7, 11 ,15]
// const target = 9;

// //[0, 1]
// for(i = 0; i < nums.length; i++){
//     for(j = 0; j < nums.length; j++){
//         if(nums[i] + nums[j] == target){
//             console.log(nums[i], nums[j]);
            
//         }
//     }
// }

// davhardsan too oloh


const nums = [2, 7, 7 ,15];

for(i = 0; i < nums.length; i++){
    for(j = 0; j < nums.length; j++){
        if(nums[i] === nums[j]){
            console.log('davhardsan');
        }
        else{
            console.log('davhardaagu');
        }
    }
}
