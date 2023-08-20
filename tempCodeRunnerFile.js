let fecte = async function(){
  const url = 'https://api.api-ninjas.com/v1/quotes?category=love'; 
  const response =  await fetch(url, {
        method: 'GET',
        headers: headers,
    })
    
    const data = await response.json()
    console.log(data)
}

fecte()