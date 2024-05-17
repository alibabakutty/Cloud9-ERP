import React from 'react'
import { Link } from 'react-router-dom'

const Gateway = () => {
  return (
    <div>
        <div>

            <h2 className='flex justify-center items-center border p-1 bg-emerald-500'>Welcome to Gateway of Tally</h2>
            <div className='flex flex-col items-center justify-center border bg-gray-900 h-52'>

                <Link to="/view">
                    <button className='p-2 bg-amber-400 w-72 rounded-md mb-2'>View Available Ledgers</button> 
                </Link>

                <Link to="/add">
                    <button className='p-2 bg-lime-700 w-72 rounded-md mb-2'>Add LedgerDetails</button>
                </Link>

                <Link>
                    <button className='p-2 bg-cyan-600 w-72 rounded-md mb-2'>Add Voucher Details</button>
                </Link>

                <Link>
                    <button className='p-2 bg-violet-600 w-72 rounded-md mb-2'>Add Group Details</button>
                </Link>
                
                
                
                
            </div>
            

        </div>
        
    </div>
  )
}

export default Gateway