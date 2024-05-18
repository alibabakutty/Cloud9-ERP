import React, { useEffect, useRef, useState } from 'react'
import { IoClose } from "react-icons/io5";
import { createNewLedger } from '../services/NewLedgerCreateService';
import { useNavigate } from 'react-router-dom';


const NewLedgerCreate = () => {

    
    
    const [ledgerName, setLedgerName] = useState('')
    const [tallySerialNo, setTallySerialNo] = useState('')
    const [aliasName, setAliasName] = useState('')
    const [underGroup, setUnderGroup] = useState('Capital Account')
    const [subUnder, setSubUnder] = useState('')
    const [typeOfLedger, setTypeOfLedger] = useState('')
    const [costsCentresAreApplicable, setCostsCentresAreAplicable] = useState('No')
    const [odLimit, setOdLimit] = useState('')
    const [includeInAssesableValueCalculation, setIncludeInAssesableValueCalculation] = useState('')
    const [gstApplicability, setGstApplicability] = useState('')
    const [hsnOrSacAndRelatedDetails, setHsnOrSacAndRelatedDetails] = useState('')
    const [sourceOfDetails, setSourceOfDetails] = useState('')
    const [hsnOrSacDescribtion, setHsnOrSacDescribtion] = useState('')
    const [classification, setClassification] = useState('')
    const [gstRateDetails, setGstRateDetails] = useState('')
    const [taxabilityType, setTaxabilityType] = useState('')
    const [natureOfTransaction, setNatureOfTransaction] = useState('')
    const [igstRate, setIgstRate] = useState('')
    const [cgstRate, setCgstRate] = useState('')
    const [utgstRate, setUtgstRate] = useState('')
    const [typeOfSupply, setTypeOfSupply] = useState('')
    const [accountHoldersName, setAccountHoldersName] = useState('')
    const [accountNumber, setAccountNumber] = useState('')
    const [ifscCode, setIfscCode] = useState('')
    const [swiftCode, setSwiftCode] = useState('')
    const [bankName, setBankName] = useState('')
    const [branchName, setBranchName] = useState('')
    const [alterRangeForChequeBooks, setAlterRangeForChequeBooks] = useState('')
    const [enableChequePrinting, setEnableChequePrinting] = useState('')
    const [mailingName, setMailingName] = useState('')
    const [addressOne, setAddressOne] = useState('')
    const [addressTwo, setAddressTwo] = useState('')
    const [addressThree, setAddressThree] = useState('')
    const [addressFour, setAddressFour] = useState('')
    const [addressFive, setAddressFive] = useState('')
    const [stateName, setStateName] = useState('Not Applicable')
    const [countryName, setCountryName] = useState('India')
    const [pinCode, setPinCode] = useState('')
    const [provideBankDetails, setProvideBankDetails] = useState('No')
    const [panOrItNumber, setPanOrItNumber] = useState('')
    const [registrationType, setRegistrationType] = useState('Regular')
    const [gstOrUin, setGstOrUin] = useState('')
    const [setOrAlterGstDetails, setSetOrAlterGstDetails] = useState('No')
    const [openingBalance, setOpeningBalance] = useState('')
    



    const navigator = useNavigate();

    useEffect(() => {
        hideElements();
        
    }, []);

    const handleUnderGroupChange = (e) => {
        const newValue = e.target.value;
        setUnderGroup(newValue);
        setSubUnder("");
        updateSubUnder(newValue); // <-- Call the function like this
       
        if (newValue === "Capital Account") {
            hideElements();
        } else {
            showElements();
        }
        
    };


    window.onload = function () {
        const underGroupSelect = document.getElementById("underGroup");
    
        underGroupSelect.addEventListener("change", handleUnderGroupChange);
    
        // Initial hide/show based on the selected value
        handleUnderGroupChange({ target: { value: underGroupSelect.value } });
    }

    

    const inputRef = useRef(null);


    const updateSubUnder = (underGroup) => {
        switch(underGroup){
            case "Bank Accounts":
                setSubUnder("(Current Assets)")
                break;
            case "Bank OCC A/c":
            case "Bank OD A/c":
            case "Secured Loans":
            case "Unsecured Loans":
                setSubUnder("Loans(Liability)");
                break;
            case "Cash-in-Hand":
            case "Deposits (Asset)":
            case "Loans & Advances (Asset)":
            case "Stock-in-Hand":
            case "Sundry Debtors":
                setSubUnder("(Current Assets)");
                break;
            case "Duties & Taxes":
            case "Provisions":
            case "Sundry Creditors":
                setSubUnder("(Current Liabilities)")
                break;
            case "Reserves & Surplus":
            case "Retained Earnings":
                setSubUnder("(Capital Account)");
                break;
            default:
                setSubUnder("");
                break;
        }
    };


    function hideElements () {
        const elementsToHide = [
            "headUnder",
            "headUnderOne",
            "headUnderTwo",
            "headUnderThree",
            "headUnderFour",
            "typeOfLedger",
            "odLimit",
            "includeInAssesableValueCalculation",
            "gstApplicability",
            "hsnOrSacAndRelatedDetails",
            "hsnOrSacDetails",
            "sourceOfDetails",
            "hsnOrSacDescribtion",
            "classification",
            "gstRateDetails",
            "taxabilityType",
            "natureOfTransaction",
            "igstRate",
            "cgstRate",
            "utgstRate",
            "typeOfSupply",
            "accountHoldersName",
            "accountNumber",
            "ifscCode",
            "swiftCode",
            "bankName",
            "branchName",
            "alterRangeForChequeBooks",
            "enableChequePrinting"


        ];

        elementsToHide.forEach(id => {
            const element = document.getElementById(id);
            if(element){
                element.style.display = "none";
            }
        });

        
    }


    function showElements (){

        const elementsToShow = [

            "headUnder",
            "headUnderOne",
            "headUnderTwo",
            "headUnderThree",
            "headUnderFour",
            "typeOfLedger",
            "costsCentresAreAplicable",
            "odLimit",
            "includeInAssesableValueCalculation",
            "gstApplicability",
            "hsnOrSacAndRelatedDetails",
            "hsnOrSacDetails",
            "sourceOfDetails",
            "hsnOrSacDescribtion",
            "classification",
            "gstRateDetails",
            "taxabilityType",
            "natureOfTransaction",
            "igstRate",
            "cgstRate",
            "utgstRate",
            "typeOfSupply",
            "accountHoldersName",
            "accountNumber",
            "ifscCode",
            "swiftCode",
            "bankName",
            "branchName",
            "alterRangeForChequeBooks",
            "enableChequePrinting"


        ];

        elementsToShow.forEach(id => {
            const element = document.getElementById(id);

            if(element) {
                element.style.display = "flex";
            }
        });
        
    }


    const handleMailingNameChange = (e) => {
        const newValue = e.target.value;
        const capitalizedValue = newValue.charAt(0).toUpperCase() + newValue.slice(1);
        setMailingName(capitalizedValue);
    };
    
    const handleLedgerNameChange = (e) => {
        const newValue = e.target.value;
        const capitalizedValue = newValue.charAt(0).toUpperCase() + newValue.slice(1);
        setLedgerName(capitalizedValue);
        setMailingName(capitalizedValue);
    };

     // Validation function
     const validateForm = () => {
        let valid = true;
        const errors = {};

        if (!ledgerName.trim()) {
            errors.ledgerName = 'Name is required';
            valid = false;
        }

        // Other validation checks...

        setErrors(errors);
        return valid;
    };

    function saveLedger(e){
        e.preventDefault();


            if(validateForm()){
            const ledger = {ledgerName, tallySerialNo, aliasName, underGroup, mailingName, addressOne, addressTwo, addressThree, addressFour, addressFive, stateName, countryName, pinCode, provideBankDetails, panOrItNumber, registrationType, gstOrUin, setOrAlterGstDetails, openingBalance}

            console.log(ledger);

            createNewLedger(ledger).then((response) => {
                console.log(response.data);
                navigator('/added')
            }).catch((error) => {
                console.error('Error creating Ledger:', error);
            })
        }

        
    };

    const [errors, setErrors] = useState({
        ledgerName: '',
        tallySerialNo: '',
        
    })


    
    const hanldeTabPress = (e) => {
        if(e.key === 'Tab' && !validateForm()){
            e.preventDefault();
        }
    };


    

    // const handleKeyPress = (e, nextInputRef) => {
    //     if(e.key === 'Enter'){
    //         e.preventDefault();
    //         nextInputRef.current.focus();
    //     }
    // };



    


   
    
   
    

    


   


  return (
    <div>
        <div className='container'>
            <div className='top-ldgr w-[1230px]'>
                <div className='ldgr-title bg-[#88bee6] flex justify-between h-4'>
                    <p className='text-[10px] font-semibold pl-4 text-black'>
                        Ledger Creation
                    </p>
                    <span className='cursor-pointer'>
                        <IoClose />
                    </span>
                </div>

                <div className='main-form '>
                    <form>
                        <div className='w-full'>
                            <div className='top-ldgr-main flex '>
                                <div className='top-ldgr border-b pl-2 h-[17vh] w-[80%] flex flex-wrap' >
                                    
                                    <div className='input-ldgr flex items-start mr-4 mt-1 ' style={{ width: '50%' }}>
                                        <label htmlFor="ledgerName" className='text-sm mr-12'>Name</label>
                                        : <input type="text" id='ledgerName' name='ledgerName' value={ledgerName} onChange={(e) => {handleLedgerNameChange(e); setLedgerName(e.target.value); setErrors({...errors, ledgerName: ''})}} className='ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200 w-[500px] focus:border focus:border-blue-500 focus:outline-none ' autoComplete='off' ref={inputRef} onFocus={() => inputRef.current = 'ledgerName'} onKeyDown={hanldeTabPress} /> <br />
                                        
                                    </div>

                                    <div className='input-ldgr flex items-start mr-4 mt-1 ' style={{ width: '40%' }}>
                                        <label htmlFor="tallySerialNo" className='text-sm mr-7' style={{ color: 'blue' }}>Tally Serial No</label>
                                        : <input type="text" id='tallySerialNo' name='tallySerialNo' value={tallySerialNo} onChange={(e) => { setTallySerialNo(e.target.value) }} className='ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200 w-1/3 focus:border focus:border-blue-500 focus:outline-none' autoComplete='off' />
                                        
                                    </div>
                                    

                                    <div className='input-ldgr flex items-start w-full -mt-11 '  >
                                        <label htmlFor="aliasName" className='text-sm italic mr-12'>(alias)</label>
                                        : <input type="text" id='aliasName' name='aliasName' value={aliasName} onChange={(e) => {setAliasName(e.target.value)}} className='ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200 w-1/3 focus:border focus:border-blue-500 focus:outline-none' autoComplete='off' ref={inputRef} onFocus={() => inputRef.current = 'aliasName'} onKeyDown={hanldeTabPress} />
                                    </div>
                                    

                                </div>

                                <div className='right-side-opening-balance h-[17vh] w-[20%] border'>
                                    <h2 className='text-center underline font-semibold'>Total Opening Balance</h2>
                                </div>
                            </div>

                        </div>

                        <div className='middle-box flex'>
                            <div className='input-ldgr  border w-1/2 text-sm'>

                                <div className='ml-2'>

                                    <label htmlFor="underGroup" className='mr-[202px]' >Under</label>
                                    : <select name="underGroup" id="underGroup" className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 ' value={underGroup} onChange={ handleUnderGroupChange}>
                                        <option value="Bank Accounts">Bank Accounts</option>
                                        <option value="Bank OCC A/c">Bank OCC A/c</option>
                                        <option value="Bank OD A/c">Bank OD A/c</option>
                                        <option value="Branch / Divisions">Branch / Divisions</option>
                                        <option value="Capital Account">Capital Account</option>
                                        <option value="Cash-in-Hand">Cash-in-Hand</option>
                                        <option value="Current Assets">Current Assets</option>
                                        <option value="Current Liabilities">Current Liabilities</option>
                                        <option value="Deposits (Asset)">Deposits (Asset)</option>
                                        <option value="Direct Expenses">Direct Expenses</option>
                                        <option value="Direct Incomes">Direct Incomes</option>
                                        <option value="Duties & Taxes">Duties & Taxes</option>
                                        <option value="Fixed Assets">Fixed Assets</option>
                                        <option value="Indirect Expenses">Indirect Expenses</option>
                                        <option value="Indirect Incomes">Indirect Incomes</option>
                                        <option value="Investments">Investments</option>
                                        <option value="Loans & Advances (Asset)">Loans & Advances (Asset)</option>
                                        <option value="Loans (Liability)">Loans (Liability)</option>
                                        <option value="Misc. Expenses (ASSET)">Misc. Expenses (ASSET)</option>
                                        <option value="Provisions">Provisions</option>
                                        <option value="Purchase Accounts">Purchase Accounts</option>
                                        <option value="Reserves & Surplus">Reserves & Surplus</option>
                                        <option value="Retained Earnings">Retained Earnings</option>
                                        <option value="Sales Accounts">Sales Accounts</option>
                                        <option value="Secured Loans">Secured Loans</option>
                                        <option value="Stock-in-Hand">Stock-in-Hand</option>
                                        <option value="Sundry Creditors">Sundry Creditors</option>
                                        <option value="Sundry Debtors">Sundry Debtors</option>
                                        <option value="Suspense A/c">Suspense A/c</option>
                                        <option value="Unsecured Loans">Unsecured Loans</option>
                                        </select>

                                       

                                </div>

                                <div>
                                    <label htmlFor="subUnder"></label>
                                     <input type="text" id='subUnder' name='subUnder' value={subUnder}  readOnly className='ml-64 h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' />
                                </div>

                                <div className='input-ldgr flex ml-2' id='typeOfLedger' >
                                    <label htmlFor="typeOfLedger" className='mr-[157px]'>Type of Ledger</label>
                                    : <select name="typeOfLedger" id="typeOfLedger" value={typeOfLedger} onChange={(e) => setTypeOfLedger(e.target.value)} className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 '>
                                        <option value="Not Applicable">&diams;Not Applicable</option>
                                        <option value="Discount">Discount</option>
                                        <option value="Invoice Rounding">Invoice Rounding</option>
                                    </select>
                                </div>

                                <div className='input-ldgr flex ml-2' id='costsCentresAreApplicable'>
                                    <label htmlFor="costsCentresAreApplicable" className='mr-[77px]'>Costs centres are applicable</label>
                                    : <select name="costsCentresAreApplicable" id="costsCentresAreApplicable" value={costsCentresAreApplicable} onChange={(e) => setCostsCentresAreAplicable(e.target.value)} className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 '>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>

                                <div className='input-ldgr flex ml-2' id='odLimit'>
                                    <label htmlFor="odLimit" className='mr-[174px]'>Set OD limit</label>
                                    : <input type="text" id='odLimit' name='odLimit' value={odLimit} onChange={(e) => setOdLimit(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' />
                                </div>

                                <div className='headUnder input-ldgr flex ml-2' id='headUnder'>
                                    <h2 className='headUnder underline font-semibold'>Statuory Details</h2>
                                </div>

                                

                                <div className='input-ldgr flex ml-2' id='includeInAssesableValueCalculation'>
                                    <label htmlFor="includeInAssesableValueCalculation" className='mr-[18px]'>Include in Assesable Value calculation</label>
                                    : <select name="includeInAssesableValueCalculation" id="includeInAssesableValueCalculation" value={includeInAssesableValueCalculation} onChange={(e) => setIncludeInAssesableValueCalculation(e.target.value)} className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 '>
                                        <option value="Not Applicable">&diams;Not Applicable</option>
                                        <option value="GST">GST</option>
                                    </select>
                                </div>

                                <div className='input-ldgr flex ml-2' id='gstApplicability'>
                                    <label htmlFor="gstApplicability" className='mr-[145px]'>GST Applicability</label>
                                    : <select name="gstApplicability" id="gstApplicability" value={gstApplicability} onChange={(e) => setGstApplicability(e.target.value)} className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 '>
                                        <option value="Applicable">&diams;Applicable</option>
                                        <option value="Not Applicable">&diams;Not Applicable</option>
                                    </select>
                                </div>

                                <div className='headUnderOne input-ldgr flex ml-2' id='headUnderOne'>
                                    <h2 className='headUnderOne underline font-semibold'>HSN/SAC & Related Details</h2>
                                </div>


                                <div className='input-ldgr flex ml-2' id='hsnOrSacAndRelatedDetails'>
                                    <label htmlFor="hsnOrSacAndRelatedDetails" className='mr-[146px]'>HSN/SAC Details</label>
                                    : <select name="hsnOrSacAndRelatedDetails" id="hsnOrSacAndRelatedDetails" value={hsnOrSacAndRelatedDetails} onChange={(e) => setHsnOrSacAndRelatedDetails(e.target.value)} className='w-[185px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 '>
                                        <option value="asPerCompanyOrGroup">As per Company/Group</option>
                                        <option value="specifyDetailsHere">Specify Details Here</option>
                                        <option value="useGstClassification">Use GST Classification</option>
                                    </select>
                                </div>

                                <div className='input-ldgr flex ml-2' id='sourceOfDetails'>
                                    <label htmlFor="sourceOfDetails" className='mr-[146px]'>Source of Details</label>
                                    : <input type="text" id='sourceOfDetails' name='sourceOfDetails' value={sourceOfDetails} onChange={(e) => setSourceOfDetails(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' />
                                </div>

                                <div className='input-ldgr flex ml-2' id='hsnOrSacDescribtion'>
                                    <label htmlFor="hsnOrSacDescribtion" className='mr-[118px]'>HSN/SAC Describtion</label>
                                    : <input type="text" id='hsnOrSacDescribtion' name='hsnOrSacDescribtion' value={hsnOrSacDescribtion} onChange={(e) => setHsnOrSacDescribtion(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' />
                                </div>

                                <div className='input-ldgr flex ml-2' id='classification'>
                                    <label htmlFor="classification" className='mr-[170px]'>Classification</label>
                                    : <input type="text" id='classification' name='classification' value={classification} onChange={(e) => setClassification(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' />
                                </div>

                                <div className='headUnderTwo ml-2' id='headUnderTwo'>
                                <h2 className='headUnderTwo underline font-semibold '>GST Rate & Related Details</h2>
                                </div>

                                

                                <div className='input-ldgr flex ml-2' id='gstRateDetails'>
                                    <label htmlFor="gstRateDetails" className='mr-[148px]'>GST Rate Details</label>
                                    : <select name="gstRateDetails" id="gstRateDetails" value={gstRateDetails} onChange={(e) => setGstRateDetails(e.target.value)} className='w-[185px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 '>
                                        <option value="asPerCompanyOrGroup">As per Company/Group</option>
                                        <option value="specifyDetailsHere">Specify Details Here</option>
                                        <option value="specifySlabBasedRates">Specify Slab-Based Rates</option>
                                        <option value="useGstClassification">Use GST Classification</option>
                                    </select>
                                </div>

                                <div className='input-ldgr flex ml-2' id='taxabilityType'>
                                    <label htmlFor="taxabilityType" className='mr-[160px]'>Taxability Type</label>
                                    : <select name="taxabilityType" id="taxabilityType" value={taxabilityType} onChange={(e) => setTaxabilityType(e.target.value)} className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 '>
                                        <option value="exempt">Exempt</option>
                                        <option value="nilRated">Nil Rated</option>
                                        <option value="nonGst">Non-GST</option>
                                        <option value="taxable">Taxable</option>
                                    </select>
                                </div>

                                <div className='input-ldgr flex ml-2' id='natureOfTransaction'>
                                    <label htmlFor="natureOfTransaction" className='mr-[114.5px]'>Nature of Transaction</label>
                                    : <select name="natureOfTransaction" id="natureOfTransaction" value={natureOfTransaction} onChange={(e) => setNatureOfTransaction(e.target.value)} className='w-[355px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 '>
                                        <option value="systemInferred">&diams;System Inferred</option>
                                        <option value="localPurchaseTaxable">Local Purchase - Taxable</option>
                                        <option value="interstatePurchaseTaxable">Interstate Purchase - Taxable</option>
                                        <option value="localPurchaseDeemedExportsTaxable">Local Purchase Deemed Exports - Taxable</option>
                                        <option value="interstatePurchaseDeemedExportsTaxable">Interstate Purchase Deemed Exports - Taxable</option>
                                        <option value="importsTaxable">Imports - Taxable</option>
                                        <option value="purchaseFromSezTaxable">Purchase from SEZ - Taxable</option>
                                        <option value="purchaseFromSezWithoutBillOfEntryTaxable">Purchase from SEZ (Without Bill of Entry) - Taxable</option>
                                    </select>
                                </div>
 
                                <div className='input-ldgr flex ml-2' id='igstRate'>
                                    <label htmlFor="igstRate" className='mr-[190px]'>IGST Rate</label>
                                    : <input type="text" id='igstRate' name='igstRate' value={igstRate} onChange={(e) => setIgstRate(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' />
                                </div>

                                <div className='input-ldgr flex ml-2' id='cgstRate'>
                                    <label htmlFor="cgstRate" className='mr-[185px]'>CGST Rate</label>
                                    : <input type="text" id='cgstRate' name='cgstRate' value={cgstRate} onChange={(e) => setCgstRate(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' />
                                </div>

                                <div className='input-ldgr flex ml-2' id='utgstRate'>
                                    <label htmlFor="utgstRate" className='mr-[140px]'>SGST/UTGST Rate</label>
                                    : <input type="text" id='utgstRate' name='utgstRate' value={utgstRate} onChange={(e) => setUtgstRate(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' />
                                </div>

                                <div className='input-ldgr flex ml-2' id='typeOfSupply'>
                                    <label htmlFor="typeOfSupply" className='mr-[159px]'>Type of Supply</label>
                                    : <select name="typeOfSupply" id="typeOfSupply" value={typeOfSupply} onChange={(e) => setTypeOfSupply(e.target.value)} className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 '>
                                        <option value="capitalGoods">Capital Goods</option>
                                        <option value="goods">Goods</option>
                                        <option value="services">Services</option>
                                    </select>
                                </div>

                                <div className='headUnderTHree input-ldgr ml-2' id='headUnderThree'>
                                    <h2 className='headUnderThree underline font-semibold '>Bank Account Details</h2>
                                </div>
                                
                                

                                <div className='input-ldgr flex ml-2' id='accountHoldersName'>
                                    <label htmlFor="accountHoldersName" className='mr-[134px]'>A/c Holder's Name</label>
                                    : <input type="text" id='accountHoldersName' name='accountHoldersName' value={accountHoldersName} onChange={(e) => setAccountHoldersName(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' />
                                </div>

                                <div className='input-ldgr flex ml-2' id='accountNumber'>
                                    <label htmlFor="accountNumber" className='mr-[204px]'>A/c No.</label>
                                    : <input type="number" id='accountNumber' name='accountNumber' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' />
                                </div>

                                <div className='input-ldgr flex ml-2' id='ifscCode'>
                                    <label htmlFor="ifscCode" className='mr-[188px]'>IFSC Code</label>
                                    : <input type="text" id='ifscCode' name='ifscCode' value={ifscCode} onChange={(e) => setIfscCode(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' />
                                </div>

                                <div className='input-ldgr flex ml-2' id='swiftCode'>
                                    <label htmlFor="swiftCode" className='mr-[176px]'>SWIFT Code</label>
                                    : <input type="text" id='swiftCode' name='swiftCode' value={swiftCode} onChange={(e) => setSwiftCode(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' />
                                </div>

                                <div className='input-ldgr flex ml-2' id='bankName'>
                                    <label htmlFor="bankName" className='mr-[180px]'>Bank Name</label>
                                    : <input type="text" id='bankName' name='bankName' value={bankName} onChange={(e) => setBankName(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' />
                                </div>

                                <div className='input-ldgr flex ml-2' id='branchName'> 
                                    <label htmlFor="branchName" className='mr-[209px]'>Branch</label>
                                    : <input type="text" id='branchName' name='branchName' value={branchName} onChange={(e) => setBranchName(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' />
                                </div>

                                <div className=' input-ldgr headUnderFour' id='headUnderFour'>
                                    <h2 className='headUnderFour underline font-semibold ml-2' id='headUnderFour'>Bank Configuration</h2>
                                </div>

                                

                                <div className='input-ldgr flex ml-2' id='alterRangeForChequeBooks'>
                                    <label htmlFor="alterRangeForChequeBooks" className='mr-[44px]'>Set/Alter range for Cheque Books</label>
                                    : <select name="alterRangeForChequeBooks" id="alterRangeForChequeBooks" value={alterRangeForChequeBooks} onChange={(e) => setAlterRangeForChequeBooks(e.target.value)} className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 '>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>

                                <div className=' input-ldgr flex ml-2' id='enableChequePrinting'>
                                    <label htmlFor="enableChequePrinting" className='mr-[106px]'>Enable Cheque Printing</label>
                                    : <select name="enableChequePrinting" id="enableChequePrinting" value={enableChequePrinting} onChange={(e) => setEnableChequePrinting(e.target.value)} className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 '>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                
                            </div>

                            

                            <div className='h-[70vh] w-1/2 border text-sm'>
                                <h2 className='underline font-semibold p-1'>Mailing Details</h2>

                                <div className='input-ldgr ml-2'>
                                    <label htmlFor="mailingName" className='mr-[152px]'>Name</label>
                                    : <input type="text" id='mailingName' name='mailingName' value={mailingName} onChange={(e) => {handleMailingNameChange(e); setMailingName(e.target.value)}} className=' w-[400px] h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' autoComplete='off' />
                                </div>

                                <div className='input-ldgr ml-2'>
                                    <label htmlFor="address" className='mr-[140px]'>Address</label>
                                    : <input type="text" id='addressOne' name='addressOne' value={addressOne} onChange={(e) => {setAddressOne(e.target.value)}} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' autoComplete='off' />
                                </div>

                                <div className='input-ldgr ml-2'>
                                    <label htmlFor="" className='mr-[195px]'></label>
                                    <input type="text" id='addressTwo' name='addressTwo' value={addressTwo} onChange={(e) => {setAddressTwo(e.target.value)}} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' autoComplete='off' />
                                </div>

                                <div className='input-ldgr ml-2'>
                                    <label htmlFor="" className='mr-[195px]'></label>
                                    <input type="text" id='addressThree' name='addressThree' value={addressThree} onChange={(e) => {setAddressThree(e.target.value)}} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' autoComplete='off' />
                                </div>

                                <div className='input-ldgr ml-2'>
                                    <label htmlFor="" className='mr-[195px]'></label>
                                    <input type="text" id='addressFour' name='addressFour' value={addressFour} onChange={(e) => {setAddressFour(e.target.value)}} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' autoComplete='off' />
                                </div>

                                <div className='input-ldgr ml-2'>
                                    <label htmlFor="" className='mr-[195px]'></label>
                                    <input type="text" id='addressFive' name='addressFive' value={addressFive} onChange={(e) => {setAddressFive(e.target.value)}} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' autoComplete='off' />
                                </div>

                                <div className='input-ldgr ml-2'>
                                    <label htmlFor="stateName" className='mr-[158px]'>State</label>
                                    : <select name="stateName" id="stateName" className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 ' value={stateName} onChange={(e) => setStateName(e.target.value)}>
                                        <option value="New State">New State</option>
                                        <option value="Change Country">Change Country</option>
                                        <option value="Not Applicable">&diams;Not Applicable</option>
                                        <option value="Andaman & Nicobar Islands">Andaman & Nicobar Islands</option>
                                        <option value="Andra Pradesh">Andra Pradesh</option>
                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Chandigarh">Chandigarh</option>
                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                        <option value="Dadra & Nagar Haveli & Daman & Diu">Dadra & Nagar Haveli & Daman & Diu</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Ladakh">Ladakh</option>
                                        <option value="Lakshadweep">Lakshadweep</option>
                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Puducherry">Puducherry</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="TamilNadu">TamilNadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="West Bengal">West Bengal</option>
                                    </select>
                                </div>

                                <div className='input-ldgr ml-2'>
                                    <label htmlFor="countryName" className='mr-[140px]'>Country</label>
                                    : <select name="countryName" id="countryName" className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 ' value={countryName} onChange={(e) => setCountryName(e.target.value)}>
                                        <option value="New Country">New Country</option>
                                        <option value="Show More">Show More</option>
                                        <option value="Not Applicable">&diams;Not Applicable</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Bhutan">Bhutan</option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Hong Kong">Hong Kong</option>
                                        <option value="India">India</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="Kingdom of Bahrain">Kingdom of Bahrain</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Liberia">Liberia</option>
                                        <option value="Malawi">Malawi</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Myanmar (Burma)">Myanmar (Burma)</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="Sri Lanka">Sri Lanka</option>
                                        <option value="Sultanate of Oman">Sultanate of Oman</option>
                                        <option value="Tanzania">Tanzania</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="UAE">UAE</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="UK">UK</option>
                                        <option value="United Staes of America">United Staes of America</option>
                                        <option value="Zambia">Zambia</option>
                                    </select>
                                </div>

                                <div className='input-ldgr ml-2'>
                                    <label htmlFor="pinCode" className='mr-[140px]'>Pincode</label>
                                    : <input type="number" id='pinCode' name='pinCode' value={pinCode} onChange={(e) => setPinCode(e.target.value)} className='h-5 outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' autoComplete='off' />
                                </div>

                                <div className='input-ldgr p-1'>
                                    <h2 className='underline font-semibold mt-5'>Banking Details</h2>
                                </div>

                                <div className='input-ldgr ml-2'>
                                    <label htmlFor="provideBankDetails" className='mr-[67px]'>Provide bank details</label>
                                    : <select name="provideBankDetails" id="provideBankDetails" value={provideBankDetails} onChange={(e) => setProvideBankDetails(e.target.value)} className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500'>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>

                                <div className='input-ldgr p-1'>
                                    <h2 className='underline font-semibold mt-5'>Tax Registration Details</h2>
                                </div>

                                <div className='input-ldgr ml-2'>
                                    <label htmlFor="panOrItNumber" className='mr-[123px]'>PAN/IT No.</label>
                                    : <input type="text" id='panOrItNumber' name='panOrItNumber' value={panOrItNumber} onChange={(e) => setPanOrItNumber(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' autoComplete='off' />
                                </div>

                                <div className='input-ldgr ml-2'>
                                    <label htmlFor="registrationType" className='mr-[85px]'>Registration Type</label>
                                    : <select name="registrationType" id="registrationType" value={registrationType} onChange={(e) => setRegistrationType(e.target.value)} className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500'>
                                        <option value="Unknown">&diams;Unknown</option>
                                        <option value="Composition">Composition</option>
                                        <option value="Regular">Regular</option>
                                        <option value="UnregisteredOrConsumer">Unregistered/Consumer</option>
                                    </select>
                                </div>

                                <div className='input-ldgr ml-2'>
                                    <label htmlFor="gstOrUin" className='mr-[124px]'>GSTIN/UIN</label>
                                    : <input type="text" id='gstOrUin' name='gstOrUin' value={gstOrUin} onChange={(e) => setGstOrUin(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' autoComplete='off' />
                                </div>

                                <div className='input-ldgr ml-2'>
                                    <label htmlFor="setOrAlterGstDetails">Set/Alter additional GST details</label>
                                    : <select name="setOrAlterGstDetails" id="setOrAlterGstDetails" value={setOrAlterGstDetails} onChange={(e) => setSetOrAlterGstDetails(e.target.value)} className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500'>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>


                            </div>

                            

                        </div>

                        <div className='open-balance flex justify-center p-[2px]'>
                            <h3 className='text-sm'>Opening Balance <span className='pl-5'>( on 1-Apr-24):</span> Rs.<input type="text" id='openingBalance' name='openingBalance' value={openingBalance} onChange={(e) => setOpeningBalance(e.target.value)} className='h-5 w-[80px] outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' autoComplete='off' /></h3>
                        </div>

                        <div className='flex justify-center'>

                            {/* <input className='text-sm px-8 py-1 border hover:bg-slate-400' type="submit" value="A: Accept" /> */}

                            <button type='submit' className='text-sm px-8 py-1 mt-3 border-none hover:bg-slate-400' onClick={saveLedger}>A: Accept</button>

                        </div>   

                        
                        


                    </form>    
                </div>

                <div className='w-[15%] border-l'></div>
            </div>
            
        </div>
        
    </div>
  )
}

export default NewLedgerCreate