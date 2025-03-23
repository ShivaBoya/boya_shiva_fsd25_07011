let count = 0;
 const intervel = setInterval(() => {
    console.log("Loading...")
    count++

    if(count == 5){
        clearInterval(intervel)
        console.log("Loaded Successfully")
    }
    
 }, 1000);
