let countTimer = 0;
let timerId = setInterval(() => {
    countTimer++;
    console.log('Hello world');
    if(countTimer==5)
    {
        clearInterval(timerId);
        console.log('Done')
    }
}, 1000);