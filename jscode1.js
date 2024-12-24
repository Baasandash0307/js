


// 1-100 hurtelh sondgoi too


for(var i = 0; i < 100 ; i++)
    if(i % 2 == 1){
        console.log('sondgoi too', i);
    }





    // 100 hurtelh toonii niilber


var sum = 0;
for(var i = 1; i <= 100; i++){
    sum = sum + i;
}    
    console.log('niilber', sum);





    // 100 hurtelh toonii tegsh toonii urjver

var urjver = 1;
for(var i = 1; i <= 100; i++){
    if(i % 2 == 0)
urjver = urjver * i;
}
console.log('urjver', urjver)









function AnhniiTooOloh(too){
    if(too <= 1){
        return false
    }
    for(var i = 2 ; i < too ; i++){
        if(too % i === 0){
            return false
        }
    }
    return true
}



for(var i = 2 ; i < 100 ; i++){
    if(AnhniiTooOloh(i)){
        console.log("anhnii"+i);
    }
}


var number = 4

if(AnhniiTooOloh(number) === true){
    console.log("Anhni too")
}else{
    console.log("bish")
}
