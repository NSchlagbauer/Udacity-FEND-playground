//NOTE: no server code for this example is present!!

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  const newAnimal =  document.getElementById('animal').value;
  const favFact =  document.getElementById('favorite').value;

  getAnimal('/animalData', newAnimal)
  // New Syntax!
  .then(function(data){
    // Add data
    console.log(data);
    postData('/addAnimal', {animal:data.animal, fact: data.fact, fav:favFact} );
  })
  .then(
    updateUI()
  )
}

const updateUI = async () => {
  const request = await fetch('/all');
  try{
    const allData = await request.json();
    document.getElementById('animalName').innerHTML = allData[0].animal;
    document.getElementById('animalFact').innerHTML = allData[0].facts;
    document.getElementById('animalFav').innerHTML = allData[0].fav;

  }catch(error){
    console.log("error", error);
  }
}


/*
let baseURL = 'http://api.animalinfo.org/data/?animal='
let apiKey = '&appid=9f15e45060...';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
const newAnimal =  document.getElementById('animal').value;
getAnimal(baseURL,newAnimal, apiKey)
}

const getAnimal = async (baseURL, animal, key)=>{

  const res = await fetch(baseURL+animal+key)
  try {

    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}
*/
/*
/ *WEB API WITH FETCH DEMO-- * /
  let baseURL = 'http://api.animalinfo.org/data/?animal='
  let apiKey = '&appid=9f15e45060...';
  const newAnimal =  document.getElementById('animal').value;

  document.getElementById('generate').addEventListener('click', performAction);

  function performAction(e){  
    getAnimalDemo(baseURL,newAnimal, apiKey)
  }


  const getAnimalDemo = async (baseURL, animal, key)=>{
  // 1.
    const res = await fetch(baseURL+animal+key)
  // 2. Call Fake API
    // const res = await fetch('/fakeAnimalData')
    try {

      const data = await res.json();
      console.log(data)
      // 1. We can do something with our returned data here-- like chain promises!
  
      // 2. 
      // postData('/addAnimal', data)
    }  catch(error) {
      // appropriately handle the error
      console.log("error", error);
    }
  }

  */