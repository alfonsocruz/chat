const app = require('./app');
const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer(app)
const io = new Server(server, {
    transports: ["websocket", "polling"],
    cors: {
        origin: "http://localhost:8080"
    }
})

io.on('connection', socket => {
    console.log(`New Socket connected: ${socket.id}`)
    require("./sockets/general")(io, socket);
    require("./sockets/chat")(io, socket);
    return io;
})

server.listen(
    process.env.PORT_SERVER,
    process.env.HOST_SERVER,
    () => {
        console.log(`Server started - Host: ${process.env.HOST_SERVER}, port: ${process.env.PORT_SERVER}`);
    })