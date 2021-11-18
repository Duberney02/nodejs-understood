process.stdout.write('ingrese algo');
process.stdin.on('readable', ()=>{
    const chunk = process.stdin.read();
    if(chunk !== null){
        process.stdout.write(chunk);
    }
});