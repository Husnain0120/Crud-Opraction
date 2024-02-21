import React, { useState } from 'react'
import axios from 'axios'

const Post = () => {
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
const header = {"Acces All ":"*"}
  const handelSubmit= (e)=>{
    e.preventDefault();
 axios.post("https://65b9d07bb4d53c06655178b9.mockapi.io/NewAPI",{
   name: name,
   email: email,
    header,
     })
     if(name===setName){
      setName("")
     }else{
      alert("First Fill The From")
     }
     
  };

 

  return (
    <>
   <form>
      <label htmlFor="" className='flex mt-5 mx-5  '>NAME : <input required onChange={(e)=>setName(e.target.value)} type="text" className='p-1 ml-2 rounded-lg  ' /> </label>

      <label htmlFor="" className='flex mt-5 mx-5'>Email : <input required type="text" className='p-1 ml-2 rounded-lg  ' onChange={(e)=>setEmail(e.target.value)}/> </label>

      <button onClick={handelSubmit  }   className='flex mt-5 mx-5 border-2 border-black p-2 rounded-md bg-slate-700 text-white active:bg-black'>Submit</button>
      
   </form>
     <div className='border-2 border-black my-3'></div>
    </>
  )
}

export default Post 

