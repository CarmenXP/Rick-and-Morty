import axios from 'axios'
import { useState, useEffect } from 'react'

const UseFetch = (url) =>{
    const [data, setData] = useState()

    useEffect(() => {
        axios.get(url)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
  
    }, [])
    
    return data

}

export default UseFetch