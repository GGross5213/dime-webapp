
let server;
let PORT;
if(process.env.NODE_ENV == 'production'){
    require('babel-polyfill');
    server = require('../dist/server').default;
    PORT = process.env.PORT || 3000;
}
else {
    require('babel-register');
    require('babel-polyfill');
    server = require('../server').default;
    PORT = 3000;
}

server.listen(PORT);
console.log(`Server listening on port ${PORT}`);
