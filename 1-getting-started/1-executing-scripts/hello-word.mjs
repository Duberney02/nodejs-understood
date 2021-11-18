import {createServer} from 'http';

const server = createServer((req, res)=>{
    res.end('Hello word');
});

server.listen(4242, ()=>{
    console.log('Server is running...');
});