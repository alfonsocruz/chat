module.exports = (io, socket) => {
    // when a user sends a message, broadcast it to all other users
  socket.on('message', message => {
    console.log(`Message: ${message} socket: ${socket.id}`)
    socket.broadcast.emit('message', message)
  })
};