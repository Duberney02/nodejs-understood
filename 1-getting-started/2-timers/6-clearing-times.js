const timerId = setTimeout(
    () => console.log('Esto no se va ver en pantalla'),
    0
);

// set inmediate

clearInterval(timerId);
// clearInterval
// clearInmediate