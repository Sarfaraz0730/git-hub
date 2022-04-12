
import React, {useEffect, useState} from 'react'
import styles from "./Github.module.css"
const Github = () => {
    const [users, setUsers] = useState([])
    const getData = async()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/photos")
        setUsers( await  response.json()) 
      
    }
    useEffect( () => {
      getData()
    },[])
  return (
    <div>
        <h2>Github</h2>
        {

        users.map( (e) =>{
           return <div className={styles.avatar} > Title : {e.title} URl  :  {e.url}  <div className='avatar'> <img src={e.thumbnailUrl} alt="" /> </div> </div> 
        })
        }

      
    </div>
  )
}

export default Github
