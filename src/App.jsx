import { BrowserRouter, Route, Routes } from "react-router-dom"
import ListOfLedgerDetails from "./components/ListOfLedgerDetails"
import NewLedgerCreate from "./components/NewLedgerCreate"
import Gateway from "./components/Gateway"
import LedgerAddedCheck from "./components/LedgerAddedCheck"




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
         
          
        </Routes>
      </BrowserRouter>
      
      

    </>
  )
}

export default App