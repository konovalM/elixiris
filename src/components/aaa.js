let counter = 0
for (let i = 1000; i < 10000; i++){
    if (i % 10 == 3 && i % 3 !=0){
        counter++
    }
}
console.log(counter)