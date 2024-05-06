import React from 'react'

const Home = () => {
  return (
    <>
    <div className="flex bg-yellow" >

    <div className="w-1/2 border-r h-screen">

        
    </div>


    
    {/* right side */}
    <div className="w-1/2 p-4 flex flex-col items-center justify-center bg-slate-200">
    <div className='border border-black w-[250px]'> 
    <div className=" p-3 bg-blue-950">
        <h1 className='text-2xl text-white font-semibold text-center'>Cloud9 ERP</h1>
        <h2 className=' text-2xl text-white text-center'>Gatewat of Cloud</h2>
    </div>

    

    <div className=" bg-blue-200 p-[20px]">
        <p className='text-center p-1 text-blue-400'>MASTERS</p>
        <button className='hover:bg-yellow-600  w-full'>Voucher Type Master Info</button>
        {/* <div className="tallyledgergroup-master"><a href="Cloud9ERPGroupMaster.jsp"><h3>Cloud9 ERP Masters Info</h3></a></div> */}
         <button className='hover:bg-yellow-600 w-full'>Accountry Master Info</button>
        <button className='hover:bg-yellow-600 w-full'>Inventory Master Info</button> 
    </div>

    <div className=" flex justify-between bg-blue-200 p-4">
    <div id="backButton"><a href="#" className='bg-lime-400 px-6 py-3 rounded text-white'>Back</a></div>
        <form action="logout" method="post">
            <button className='bg-red-800 px-3 py-3 rounded text-white' type="submit">Logout</button>
        </form>
        
    </div>

    
    </div>

    </div>

</div>
    
    </>
  )
}

export default Home