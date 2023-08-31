let catbtn = document.querySelectorAll('.category')
let category = ''

catbtn.forEach((btn) =>{
    btn.addEventListener('click', () =>{
       
       category = btn.textContent
       col(category)
    })
})

function col(id){
    for(let i = 0; i < catbtn.length; i++){
        catbtn[i].classList.remove('bg')
    }

    document.getElementById(`${id}`).classList.add('bg') 
}





const headers = new Headers({
    'X-Api-Key': '15ncA2X9jBE9TZUEZldEHg==Khn8mfKQsqdPXnMV'
});


let fecte = async function(){
  const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`; 
  const response =  await fetch(url, {
        method: 'GET',
        headers: headers,
    })
    
    const data = await response.json()
    console.log(data)
    usedata(data)
}


let gen = document.querySelector('.generate')

gen.addEventListener('click', () =>{
    gen.innerHTML =` <i class="fa-solid fa-rotate-right"></i>`
    let ro = document.querySelector('.generate i')
    ro.classList.add('rotate')
    fecte()
}) 


let quote = document.querySelector('.quote')
let author = document.querySelector('.author')


function usedata(data){
  quote.innerHTML = `<q>${data[0].quote}</q>`
  author.textContent = `~ ${data[0].author} ~`
}


