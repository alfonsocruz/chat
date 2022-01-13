module.exports = (io, socket) => {
    // if a user disconnects, log it to the console
    socket.on('disconnect', reason => {
        console.log(`User disconnected (${reason}) socket: ${socket.id}`)
    })
};