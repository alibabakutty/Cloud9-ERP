import { useNavigate } from "react-router-dom"



const SelectLedgerNameUpdate = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/updateselect')
    }

    

  return (
    <div>
        <div className="flex items-center justify-center">
            <div className="mt-56 border p-10 bg-orange-300">
                <div className="p-8 ">
                    <label htmlFor="ledgerName">Select Ledger Name: </label>
                    <input type="text" id='ledgerName' name='ledgerName' className="w-44 h-7 pl-2" autoComplete="off" /><br />
                </div>
                <button type="submit" onClick={handleClick} className="text-white p-2 ml-16 bg-emerald-800 border-none " style={{ borderRadius: '8px' }} >Fetch Ledger Details</button>
            </div>
        </div>

       
    </div>
  )
}

export default SelectLedgerNameUpdate