import React from 'react'

const LocationInfo = ({location}) => {
  console.log("location",location)
  return (
    <div className=' locationContent'>
        <h2>{location?.name}</h2>
        
            <span><strong>Type: </strong>{location?.type}</span> 
            <span><strong>Dimension: </strong>{location?.dimension}</span>
            <span><strong>Population: </strong>{location?.residents.length}</span>
        
            
    </div>
  )
}

export default LocationInfo