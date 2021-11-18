const theOneFunc = (time, message) => {
    setTimeout(
        ()=>{
            console.log(message)
        },
        time
    );
};

theOneFunc(4*1000, "Hello after 4 seconds");
theOneFunc(8*1000, "Hello after 8 seconds");

