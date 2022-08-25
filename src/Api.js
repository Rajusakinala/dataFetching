import React, {useState, useEffect} from 'react'
import axios from 'axios';


function Api() {
    const[data, setData]=useState([]);
    useEffect(()=>{
    //     fetch('/api/emp/list').then(arr=>arr.json()).then(arr=>setData(arr))
    axios.get('http://localhost:3000/api/emp/list').then(response=>setData(response.data))
    },[])

  return (
    <ul>
        {data.map(item=><li key={item.emp_id}>{item.emp_name}</li>)}
    </ul>
  )
}

export default Api