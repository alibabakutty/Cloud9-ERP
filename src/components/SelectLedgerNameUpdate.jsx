import axios from "axios";
import React, { useEffect, useState } from "react";

const SelectLedgerNameUpdate = () => {
    const [selectLedgerName, setSelectLedgerName] = useState('');
    const [ledgerDetails, setLedgerDetails] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`api/ledger/${selectLedgerName}`);
            setLedgerDetails(response.data);
        } catch (error) {
            console.error('Error fetching ledger details:', error);
        }
    };

    useEffect (() => {
        if (selectLedgerName) {
            handleSubmit();
        }
    }, [selectLedgerName]);

    return (
        <div>
            <h2>Enter Ledger Name</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" id="ledgerName" name="ledgerName" placeholder="Enter Ledger name" value={selectLedgerName} onChange={(e) => setSelectLedgerName(e.target.value)} />
                <button type="submit">Submit</button>
            </form>

            {ledgerDetails && (
                <div>
                    <p>Ledger Name: {ledgerDetails.ledgerName}</p>
                    <p>Ledger Type: {ledgerDetails.tallySerialNo}</p>
                    {/* Add more details here as needed */}
                </div>
            )}
        </div>
    );
};

export default SelectLedgerNameUpdate;
