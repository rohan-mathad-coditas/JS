// Pub/Sub data transfer in packets
class Stream {
  constructor() {
    this.subscribers = {
      on: [],
      end: []
    };
  }
  on(cb) {
    this.subscribers.on.push(cb)
  }

  end(cb) {
    this.subscribers.end.push(cb)
  }

  stream(chunk) {
    for(let handler of this.subscribers.on) {
      handler(chunk);
    }
  }

  streamEnd() {
    for(let handler of this.subscribers.end) {
      handler();
    }

    this.subscribers = { on: [], end: [] }
  }

}
// duplex websocket
const stream = new Stream();

let allChunks = ""
stream.on(chunk => {
  console.log('recieved chunk:', chunk);
  allChunks += chunk;
});
stream.end(() => console.log("done", allChunks));

stream.stream("a");
stream.stream("b");
setTimeout(() => {
  stream.stream("c");
}, 5000);
setTimeout(() => {
  stream.stream("d");
}, 6000);

setTimeout(() => {
  stream.streamEnd();
}, 6500);