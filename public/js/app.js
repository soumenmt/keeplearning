console.log('Client side javascript file is loaded!')
console.log('hello')
const weatherform= document.querySelector('form')
const searchterm = document.querySelector('input')
const m1 = document.querySelector('#m1')
const m2 = document.querySelector('#m2')

weatherform.addEventListener('submit',(e)=>{
    const location = searchterm.value
    m1.textContent='Loading...'
    m2.textContent=''

    e.preventDefault()

    console.log(location)
    
fetch('http://api.weatherstack.com/current?access_key=2ddd926d1c77927bbc605a23312d6f60&query='+location).then((response)=>{
    response.json().then((data)=>{
        m1.textContent=data.current.temperature
        m2.textContent=data.location.name+', '+data.location.country
        console.log(data.current.temperature+' degree outside')
    })
})

})