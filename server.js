const express = require("express")
const socket = require("socket.io")

const app = express()
const server = app.listen(3000)

app.use(express.static("./"))

const io = socket(server)

io.on("connection" , (socket) => {
  console.log(socket.id)

  socket.on("chat" , (data) =>{
    console.log(data)
    io.sockets.emit("chat" , data)

  })
})