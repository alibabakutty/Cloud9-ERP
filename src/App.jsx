import { BrowserRouter, Route, Routes } from "react-router-dom"
import ListOfLedgerDetails from "./components/ListOfLedgerDetails"
import NewLedgerCreate from "./components/NewLedgerCreate"
import Gateway from "./components/Gateway"
import LedgerAddedCheck from "./components/LedgerAddedCheck"
import SelectLedgerNameUpdate from "./components/SelectLedgerNameUpdate"
import ViewLedger from "./components/ViewLedger"




function App() {
  

  return (
    <>

      <BrowserRouter>
        <Routes>
          {/* http://localhost:3000 */}
          <Route path="/" element ={<Gateway />} />
          {/* http://localhost:3000/add */}
          <Route path="/add" element = {<NewLedgerCreate />} />
          {/* http://localhost:3000/view */}
          <Route path="/view" element ={<ListOfLedgerDetails />} />
          {/* http://localhost:3000/added */}
          <Route path="/added" element ={<LedgerAddedCheck />} />
          {/* http://localhost:3000/updateselect */}
          
          <Route path="/updateselect" element={<SelectLedgerNameUpdate />} />
          {/* http://localhost:3000/viewledger */}
          <Route path="/ledger-details/${ledgerName}" element={<ViewLedger />} />
        </Routes>
      </BrowserRouter>
      
      

    </>
  )
}

export default App
