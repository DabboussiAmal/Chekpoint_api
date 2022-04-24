import axios from 'axios'
import React,{useEffect, useState} from 'react'

const UserList = () => {
    const [usersList,setUsersList]=useState([])
    const getData=async()=>{
     await axios
     .get("https://jsonplaceholder.typicode.com/users") 
     .then(res=>setUsersList(res))
     .catch(err=>console.log(err)) 
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div><h1>UserList</h1>
    {
    usersList.map(user=>(
        <div key={id}>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
            <h1>{user.email}</h1>
        </div>
    ))
  
    }
    </div>
  ) 
}

export default UserList