import { useEffect, useState } from 'react'
import { listOfLedgerDetails } from '../services/NewLedgerCreateService'

const ListOfLedgerDetails = () => {

    const [ledger, setLedger] = useState([])

    useEffect(() => {
        listOfLedgerDetails().then((response) => {
            setLedger(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])







  return (
    <div>
        <div className='container'>
            <h2>List of Ledgers</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Ledger Name</th>
                        <th>Alias Name</th>
                        <th>State Name</th>
                        <th>Country name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ledger.map(led => 
                            <tr key={led.ledgerName}>
                                <td>{led.ledgerName}</td>
                                <td>{led.aliasName}</td>
                                <td>{led.stateName}</td>
                                <td>{led.countryName}</td>

                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        
    </div>
  )
}

export default ListOfLedgerDetails