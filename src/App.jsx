import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import LocationInfo from './components/LocationInfo'



function App() {
  //states
  const [inputS, setInputS] = useState('')
  const [location, setlocation] = useState()
  const [data, setData] = useState()
  const [wordEntered, setWordEntered]= useState("")
  const [filterData, setFilterData] = useState([])

  // life cicles
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
 useEffect(() => {
  const URL = "https://rickandmortyapi.com/api/location"
  axios.get(URL)
  .then(res => setData(res.data.results))
  .catch(err => console.log(err))

 }, [])
 console.log("data", data)
 
/** 
 const cleanInput =()=>{
  setInputS("")
 }
 **/
// Handles
 const handleSumit = e =>{
  e.preventDefault()
  setInputS(e.target.search.value)
 }
 const handleFilter = e =>{
  const searchWord=e.target.value
  setWordEntered(searchWord)
  const filterWord = data.filter(x =>{
    return x.name.toLowerCase().includes(searchWord.toLowerCase())
  })

  if(searchWord === ""){
    setFilterData([])
  }else{
    setFilterData(filterWord)
  }
 }
console.log("input", typeof inputS)
console.log("desde el filtrado",filterData)

/** 
 const cleanInput =()=>{
  setInputS("")
 }
 **/
  
  return (
    <div className="App">
      <div className="image">
        <img src='https://br.web.img3.acsta.net/pictures/17/11/06/14/13/5164749.jpg?coixp=50&coiyp=47'/>
      </div>
        <form onSubmit={handleSumit}>
          <input id='search' type="text" onChange={handleFilter}/>
          <button>Search</button>
        </form>
        <div className="results">
         {
          filterData.length != 0
            ? filterData.map(data =>{ return(<p>{data.name}</p>)})
            : ""
         } 
        </div>
       
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
