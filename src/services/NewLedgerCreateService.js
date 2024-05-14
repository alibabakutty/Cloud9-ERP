import axios from "axios";


const REST_API_BASE_URL = "http://localhost:8080/api/ledgerData";

export const listOfLedgerDetails = () =>{return axios.get(REST_API_BASE_URL)};

export const createNewLedger = (ledger) => axios.post(REST_API_BASE_URL+"/add", ledger);