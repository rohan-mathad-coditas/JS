const fetchNames = async () => {
try {  
  const jsonData = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await jsonData.json();

  const dataNames = data.map((user) => user.name);
  return dataNames;}
  catch(e){
    console.log(e);
  }
}

fetchNames();