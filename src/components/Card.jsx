import React from 'react'
import UseFetch from '../hooks/UseFetch'

const Card = ({url}) => {
    
    const resident = UseFetch(url)
    console.log("desde resident",resident)
  return (
 
      <div className='card'>
        <header>
          <img src={resident?.image} alt={`image of ${resident?.name}`} />
          <span>{resident?.status} <div className={resident?.status}></div></span>
        </header>
        <div>
          <h3>{resident?.name}</h3>
          <ul>
            <li><span><strong>Species: </strong></span>{resident?.species}</li>
            <li><span><strong>Origin: </strong></span>{resident?.origin.name}</li>
            <li><span><strong>Episodes: </strong></span>{resident?.episode.length}</li>
          </ul>
      </div>

      
    </div>

  )
}

export default Card