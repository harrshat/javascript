//for

for (let i = 0; i < 10; i++) {
    console.log(`outer loop ${i}`);
    for(let j = 0; j<=10 ;j++){
        console.log(`innerloop value ${j} and outer loop value ${i}`)
    }
}

// break and continue
for (let index = 1; index <= 20; index++) {
    if(index==5) {
        console.log("detected 5");
        continue
    }
    console.log(`Value of i is ${i}`);
}