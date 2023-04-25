const postData = async ( url = '', data = {})=>{
  console.log('data:'); // print data to console prior to sending
  console.log(data);
  const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    // Body data type must match "Content-Type" header        
    body: JSON.stringify(data), 
  });

    try { //equals the resolve of a promise
      const newData = await response.json(); //await means, we wait for the response before continuing
      console.log(newData);
      return newData;
    }catch(error) { //equals the reject of a promise
    console.log("error", error);
    //appropiately handle the error
    }
}

postData('/addMovie', {movie:'The Matrix', score: 5});