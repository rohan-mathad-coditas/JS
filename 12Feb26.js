 const user = [
    {
        name:"user1"
    },
    {
        name:"user2"
    }
 ]

const getUsers = (user) => {
    let n = Math.random * 1000;
    return setTimeout(()=>{
        return user;
    },n);
}

