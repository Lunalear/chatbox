const app = require('express')();
const socketio =require('socket.io');

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

const server = app.listen(process.env.PORT||4000,()=>{
    console.log('Server on port 4000');
});

const io = socketio(server);

io.on('connection',(data)=>{
    console.log('User login');
    data.on('message event',(msg)=>{
        console.log(msg);
        io.emit('create message',msg)
    });
});