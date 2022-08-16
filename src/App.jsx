import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import LocationInfo from './components/LocationInfo'



function App() {
  const [inputS, setInputS] = useState('')
  const [location, setlocation] = useState()


 useEffect(() =>{
  let numberLocation
  if(inputS=== ''){
    numberLocation = Math.floor(Math.random()*(126 -1) +1)
  }else{
    numberLocation = inputS
  }
  const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`
  axios.get(URL)
    .then(res => setlocation(res.data))
    .catch(err=> console.log(err))

 
 }, [inputS])

 const handleSumit = e =>{
  e.preventDefault()
  setInputS(e.target.search.value)
 }
console.log("input", typeof inputS)

  
  return (
    <div className="App">
      <div className="image">
        <img src='https://br.web.img3.acsta.net/pictures/17/11/06/14/13/5164749.jpg?coixp=50&coiyp=47'/>
      </div>
        <form onSubmit={handleSumit}>
          <input id='search' type="text" />
          <button>Search</button>
        </form>
        <LocationInfo location ={location}/>
        <div className='contentCard'>
          {
            location?.residents.map(url => (
              <Card
                key={url}
                url = {url}
              />
            ))
          }
        </div>
    </div>
  )
}

export default App
