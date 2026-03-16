function wrapper(str){
  console.log(str);
  return function decorator(call){
    return function extraArgs(...args){

      call(...args)
    }
  }
}

class dataStream {
  constructor(data){
    this.data = data;

  }

  downloadInParts(arr){
    console.log(`file downloaded, ${arr}`)
  }
}

const data1 = new dataStream(300); // in gb

data1.downloadInParts = wrapper("start Dowloading")(data1.downloadInParts)

data1.downloadInParts();



//pubsub rev
//decorators types rev
// reading and executing phase rev