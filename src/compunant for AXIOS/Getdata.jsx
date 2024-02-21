import axios from 'axios'
import React, { useState ,useEffect} from 'react'

const Getdata = () => {
const [data, setData] = useState([])
    const handelGetdata = ()=>{   
        axios.get("https://65b9d07bb4d53c06655178b9.mockapi.io/NewAPI")
        .then((Response)=>{
            console.log(Response.data);
            setData(Response.data);

        })
          
          }
       useEffect(()=>{
        handelGetdata();
       },[]) ;

       function handeldelete(id){
        axios.delete(`https://65b9d07bb4d53c06655178b9.mockapi.io/NewAPI/${id}`)
        .then(()=>{
          data()
        })
       }
  return (
    <>
    <div className=' md:grid '>
        <h1 className=' mx-5 my-5 font-bold text-xl'>Read Opearation</h1>
  <table className="table-auto mx-5 border-2 border-black flex-wrap  ">

  <thead className='border-2 border-black '>
    <tr >
    <th className='border-2 border-black ' >#</th>
      <th className='border-2 border-black  ' >Name</th>
      <th className='border-2 border-black'>Email</th>
      <th className='border-2 border-black'></th>
      <th className='border-2 border-black'></th>    
    </tr>
  </thead>
   {
   data.map((eachData)=>{
    return(
        <>
           <tbody className='border-2 border-black'>
                <tr>
                <td className='border-2 border-black p-3'>{eachData.id}</td>
                <td className='border-2 border-black p-3'>{eachData.name}</td>
                <td className='border-2 border-black p-3'>{eachData.email}</td>
                <td className='border-2 border-black p-3'><button className=' bg-green-700 px-1 shadow-lg text-white rounded-sm active:bg-green-900'>Edit</button></td>
                <td className=' p-3'><button className=' bg-red-700 px-1 text-white rounded-sm shadow-2xl shadow-black active:bg-red-900' onClick={()=> handeldelete(eachData.id)}>Delete</button></td> 
                </tr>
            </tbody>
        </>
    )
   })
         
}
</table>
</div>
      <button onClick={handelGetdata}  className='flex mt-5 mx-5 border-2 border-black p-2 rounded-md bg-slate-700 text-white active:bg-black'>Get data</button>
      <div className=' border-b-4 border-slate-700 my-3'></div>
    </>
  )
}

export default Getdata
