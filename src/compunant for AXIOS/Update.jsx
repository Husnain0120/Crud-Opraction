import React from 'react'

const Update = () => {
  return (
    <>
    <h1 className=' text-2xl font-bold text-center border-b-4'>Up Date </h1>
    <form>
      <label htmlFor="" className='flex mt-5 mx-5  '>NAME : <input required onChange={(e)=>setName(e.target.value)} type="text" className='p-1 ml-2 rounded-lg  ' /> </label>

      <label htmlFor="" className='flex mt-5 mx-5'>Email : <input required type="text" className='p-1 ml-2 rounded-lg  ' onChange={(e)=>setEmail(e.target.value)}/> </label>

      <button  className='flex mt-5 mx-5 border-2 border-black p-2 rounded-md bg-slate-700 text-white active:bg-black'>UPDATE NOW</button>
      
   </form>
     <div className='border-2 border-black my-3'></div>
    </>
  )
}

export default Update
