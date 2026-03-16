class DuplexWebsocket {
  constructor() {
    this.incomingMsg = [];
    this.outgoingMsg = [];
  }

  receiveMsg(cb) {
    this.incomingMsg.push(cb);
  }

  sendMsg(cb) {
    this.outgoingMsg.push(cb);
  }

  allRecieve(message) {
    for (let handler of this.incomingMsg) {
      handler(message);
    }
  }

  allSend(message) {
    for (let handler of this.outgoingMsg) {
      handler(message);
    }
  }

  close() {
    console.log("closing connection...");
    this.incomingMsg = [];
    this.outgoingMsg = [];
  }

}

const socket1 = new DuplexWebsocket();

socket1.receiveMsg(msg => console.log("socket1 received:", msg));
socket1.sendMsg(msg => console.log("socket1 sent:", msg));

socket1.allRecieve("Hello from socket1");

setTimeout(() => { 
  socket1.allSend("Hello from socket1") 
}, 2000)

setTimeout(() => {
  socket1.close();
  console.log("connection closed Successfully!!");
}, 2500);
