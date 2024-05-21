import React, { useEffect, useRef, useState } from 'react'
import { IoClose } from "react-icons/io5";
import { createNewLedger } from '../services/NewLedgerCreateService';
import { Link, useNavigate } from 'react-router-dom';
import Bank from '../Bank';


const NewLedgerCreate = () => {


    // State Variables
    const [ledgerName, setLedgerName] = useState('')
    const [tallySerialNo, setTallySerialNo] = useState('')
    const [aliasName, setAliasName] = useState('')
    const [underGroup, setUnderGroup] = useState('Capital Account')
    const [subUnder, setSubUnder] = useState('')
    const [typeOfLedger, setTypeOfLedger] = useState('')
    const [maintainBalancesBillByBill, setMaintainBalancesBillByBill] = useState('')
    const [defaultCreditPeriod, setDefaultCreditPeriod] = useState('')
    const [checkForCreditDaysDuringVoucherEntry, setCheckForCreditDaysDuringVoucherEntry] = useState('No')
    const [typeOfDutyOrTax, setTypeOfDutyOrTax] = useState('Others')
    const [costsCentresAreApplicable, setCostsCentresAreAplicable] = useState('No')
    const [percentageOfCalculation, setPercentageOfCalculation] = useState('0')
    const [odLimit, setOdLimit] = useState('')
    const [includeInAssessableValueCalculation, setIncludeInAssessableValueCalculation] = useState('')
    const [gstApplicability, setGstApplicability] = useState('')
    const [hsnOrSacAndRelatedDetails, setHsnOrSacAndRelatedDetails] = useState('')
    const [sourceOfDetails, setSourceOfDetails] = useState('Not Available')
    const [hsnOrSac, setHasnOrSac] = useState('')
    const [hsnOrSacDescription, setHsnOrSacDescription] = useState('')
    const [classification, setClassification] = useState('')
    const [gstRateDetails, setGstRateDetails] = useState('')
    const [sourceOfDetailsGst, setSourceOfDetailsGst] = useState('Not Available')
    const [taxabilityType, setTaxabilityType] = useState('Taxable')
    const [natureOfTransaction, setNatureOfTransaction] = useState('')
    const [igstRate, setIgstRate] = useState('0')
    const [cgstRate, setCgstRate] = useState('0')
    const [utgstRate, setUtgstRate] = useState('0')
    const [typeOfSupply, setTypeOfSupply] = useState('Services')
    const [accountHoldersName, setAccountHoldersName] = useState('')
    const [accountNumber, setAccountNumber] = useState('')
    const [ifscCode, setIfscCode] = useState('')
    const [swiftCode, setSwiftCode] = useState('')
    const [bankName, setBankName] = useState('Not Applicable')
    const [branchName, setBranchName] = useState('')
    const [alterRangeForChequeBooks, setAlterRangeForChequeBooks] = useState('No')
    const [enableChequePrinting, setEnableChequePrinting] = useState('Yes')
    const [alterChequePrintingConfiguration, setAlterChequePrintingConfiguration] = useState('No')
    const [contactPerson, setContactPerson] = useState('')
    const [contactPhoneNumber, setContactPhoneNumber] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [email, setEmail] = useState('')
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

    function hideElements () {
        const elementsToHide = [
            "headUnder",
            "headUnderOne",
            "headUnderTwo",
            "headUnderThree",
            "headUnderFour",
            "typeOfLedger",
            "maintainBalancesBillByBill",
            "defaultCreditPeriod",
            "checkForCreditDaysDuringVoucherEntry",
            "typeOfDutyOrTax",
            "costsCentresAreApplicable",
            "percentageOfCalculation",
            "odLimit",
            "includeInAssessableValueCalculation",
            "gstApplicability",
            "hsnOrSacAndRelatedDetails",
            "hsnOrSacDetails",
            "sourceOfDetails",
            "hsnOrSac",
            "hsnOrSacDescription",
            "classification",
            "gstRateDetails",
            "sourceOfDetailsGst",
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
            "enableChequePrinting",
            "alterChequePrintingConfiguration",
            "contactPerson",
            "contactPhoneNumber",
            "mobileNumber",
            "email",
            "stateName",
            "countryName",
            "pinCode",
            "headUnderFive",
            "provideBankDetails",
            "panOrItNumber",
            "registrationType",
            "gstOrUin",
            "setOrAlterGstDetails"


        ];

        elementsToHide.forEach(id => {
            const element = document.getElementById(id);
            if(element){
                element.style.display = "none";
            }
        });

        
    }


    function showElements (ids){

        ids.forEach(id => {
            const element = document.getElementById(id);

            if(element){
                element.style.display = "flex";
            }
        });
        
    }

    useEffect(() => {
        hideElements();
        handleUnderGroupChange({ target: { value: underGroup } });
    }, []);

    const handleUnderGroupChange = (e) => {
        const newValue = e.target.value;
        setUnderGroup(newValue);
        setSubUnder("");
        updateSubUnder(newValue); // <-- Call the function like this

        hideElements();
       
        switch(newValue) {
            case "Capital Account":
                showElements(["costsCentresAreApplicable","stateName", "countryName", "pinCode", "headUnderFive", "provideBankDetails", "panOrItNumber", "registrationType", "gstOrUin", "setOrAlterGstDetails"]);
                break;
            case "Bank Accounts":
                showElements(["costsCentresAreApplicable", "headUnderThree", "accountHoldersName", "accountNumber", "ifscCode", "swiftCode", "bankName", "branchName", "headUnderFour", "alterRangeForChequeBooks", "enableChequePrinting", "alterChequePrintingConfiguration", "stateName", "countryName", "pinCode", "gstOrUin"]);
                break;
            case "Bank OCC A/c":
                showElements(["costsCentresAreApplicable", "odLimit", "headUnderThree", "accountHoldersName", "accountNumber", "ifscCode", "swiftCode", "bankName", "branchName", "headUnderFour", "alterRangeForChequeBooks", "enableChequePrinting", "alterChequePrintingConfiguration", "stateName", "countryName", "pinCode", "gstOrUin"]);
                break;
            case "Bank OD A/c":
                showElements(["costsCentresAreApplicable", "odLimit", "headUnderThree", "accountHoldersName", "accountNumber", "ifscCode", "swiftCode", "bankName", "branchName", "headUnderFour", "alterRangeForChequeBooks", "enableChequePrinting", "alterChequePrintingConfiguration", "stateName", "countryName", "pinCode", "gstOrUin"]);
                break;
            case "Branch / Divisions":
                showElements(["costsCentresAreApplicable", "stateName", "countryName", "pinCode", "headUnderFive", "provideBankDetails", "panOrItNumber", "registrationType", "gstOrUin", "setOrAlterGstDetails"]);
                break;
            case "Cash-in-Hand":
                showElements(["costsCentresAreApplicable", "headUnderFive", "provideBankDetails", "panOrItNumber"]);
                break;
                case "Current Assets":
                    showElements(["costsCentresAreApplicable", "headUnder", "includeInAssessableValueCalculation", "stateName", "countryName", "pinCode", "headUnderFive", "provideBankDetails", "panOrItNumber", "registrationType", "gstOrUin", "setOrAlterGstDetails"]);
                    break;
                case "Current Liabilities":
                    showElements(["costsCentresAreApplicable", "includeInAssessableValueCalculation", "stateName", "countryName", "pinCode", "headUnderFive", "provideBankDetails", "panOrItNumber", "registrationType", "gstOrUin", "setOrAlterGstDetails"]);
                    break;
                case "Deposits (Asset)":
                    showElements(["costsCentresAreApplicable", "stateName", "countryName", "pinCode", "headUnderFive", "provideBankDetails", "panOrItNumber", "registrationType", "gstOrUin", "setOrAlterGstDetails"]);
                    break;
                case "Direct Expenses":
                    showElements(["costsCentresAreApplicable", "typeOfLedger", "headUnder", "includeInAssessableValueCalculation", "gstApplicability", "headUnderOne", "hsnOrSacAndRelatedDetails", "sourceOfDetails", "hsnOrSac", "hsnOrSacDescription", "headUnderTwo", "gstRateDetails", "sourceOfDetailsGst", "taxabilityType", "natureOfTransaction", "igstRate", "cgstRate", "utgstRate", "typeOfSupply", "stateName", "countryName", "pinCode", "headUnderFive", "provideBankDetails", "panOrItNumber"]);
                    break;
                case "Direct Incomes":
                    showElements(["costsCentresAreApplicable", "typeOfLedger", "headUnder", "includeInAssessableValueCalculation", "gstApplicability", "headUnderOne", "hsnOrSacAndRelatedDetails", "sourceOfDetails", "hsnOrSac", "hsnOrSacDescription", "headUnderTwo", "gstRateDetails", "sourceOfDetailsGst", "taxabilityType", "natureOfTransaction", "igstRate", "cgstRate", "utgstRate", "typeOfSupply", "stateName", "countryName", "pinCode", "headUnderFive", "provideBankDetails", "panOrItNumber"]);
                    break;
                case "Duties & Taxes":
                    showElements(["costsCentresAreApplicable", "typeOfDutyOrTax", "percentageOfCalculation", "headUnder", "includeInAssessableValueCalculation", "headUnderFive", "provideBankDetails", "panOrItNumber"]);
                    break;
                case "Fixed Assets":
                    showElements(["costsCentresAreApplicable", "headUnder", "includeInAssessableValueCalculation", "gstApplicability", "headUnderOne", "hsnOrSacAndRelatedDetails", "sourceOfDetails", "hsnOrSac", "hsnOrSacDescription", "headUnderTwo", "gstRateDetails", "sourceOfDetailsGst", "taxabilityType", "natureOfTransaction", "igstRate", "cgstRate", "utgstRate", "typeOfSupply", "stateName", "countryName", "pinCode", "headUnderFive", "provideBankDetails", "panOrItNumber", "registrationType", "gstOrUin", "setOrAlterGstDetails"]);
                    break;
                case "Indirect Expenses":
                    showElements(["costsCentresAreApplicable", "typeOfLedger", "headUnder", "includeInAssessableValueCalculation","gstApplicability", "headUnderOne", "hsnOrSacAndRelatedDetails", "sourceOfDetails", "hsnOrSac", "hsnOrSacDescription", "headUnderTwo", "gstRateDetails", "sourceOfDetailsGst", "taxabilityType", "natureOfTransaction", "igstRate", "cgstRate", "utgstRate", "typeOfSupply", "stateName", "countryName", "pinCode", "headUnderFive", "provideBankDetails", "panOrItNumber"]);
                    break;
                case "Indirect Incomes":
                    showElements(["costsCentresAreApplicable", "typeOfLedger", "headUnder", "includeInAssessableValueCalculation", "gstApplicability", "headUnderOne", "hsnOrSacAndRelatedDetails", "sourceOfDetails", "hsnOrSac", "hsnOrSacDescription", "headUnderTwo", "gstRateDetails", "sourceOfDetailsGst", "taxabilityType", "natureOfTransaction", "igstRate", "cgstRate", "utgstRate", "typeOfSupply", "stateName", "countryName", "pinCode", "headUnderFive", "provideBankDetails", "panOrItNumber"]);
                    break;
                case "Investments":
                    showElements(["costsCentresAreApplicable", "includeInAssessableValueCalculation", "stateName", "countryName", "pinCode", "headUnderFive", "provideBankDetails", "panOrItNumber"]);
                    break;
                case "Loans & Advances (Asset)":
                    showElements(["costsCentresAreApplicable", "includeInAssessableValueCalculation", "stateName", "countryName", "pinCode", "headUnderFive", "provideBankDetails", "panOrItNumber", "registrationType", "gstOrUin", "setOrAlterGstDetails"]);
                    break;
                case "Loans (Liability)":
                    showElements(["costsCentresAreApplicable", "headUnder", "includeInAssessableValueCalculation", "stateName", "countryName", "pinCode", "headUnderFive", "provideBankDetails", "panOrItNumber", "registrationType", "gstOrUin", "setOrAlterGstDetails"]);
                    break;
                case "Misc. Expenses (ASSET)":
                    showElements(["costsCentresAreApplicable", "includeInAssessableValueCalculation", "headUnderFive", "provideBankDetails", "panOrItNumber"]);
                    break;
                case "Provisions":
                    showElements(["costsCentresAreApplicable", "includeInAssessableValueCalculation", "headUnderFive", "provideBankDetails", "panOrItNumber"]);
                    break;
                case "Purchase Accounts":
                    showElements(["costsCentresAreApplicable", "typeOfLedger","headUnder", "includeInAssessableValueCalculation", "gstApplicability", "headUnderOne", "hsnOrSacAndRelatedDetails", "sourceOfDetails", "hsnOrSac", "hsnOrSacDescription", "headUnderTwo", "gstRateDetails", "sourceOfDetailsGst", "taxabilityType", "natureOfTransaction", "igstRate", "cgstRate", "utgstRate", "typeOfSupply", "headUnderFive", "provideBankDetails", "panOrItNumber"]);
                    break;
                case "Reserves & Surplus":
                    showElements(["costsCentresAreApplicable", "headUnderFive", "provideBankDetails", "panOrItNumber"]);
                    break;
                case "Retained Earnings":
                    showElements(["costsCentresAreApplicable", "headUnderFive", "provideBankDetails", "panOrItNumber"]);
                    break;
                case "Sales Accounts":
                    showElements(["costsCentresAreApplicable", "typeOfLedger", "headUnder", "includeInAssessableValueCalculation", "gstApplicability", "headUnderOne", "hsnOrSacAndRelatedDetails", "sourceOfDetails", "hsnOrSac", "hsnOrSacDescription", "headUnderTwo", "gstRateDetails", "sourceOfDetailsGst", "taxabilityType", "natureOfTransaction", "igstRate", "cgstRate", "utgstRate", "typeOfSupply", "headUnderFive", "provideBankDetails", "panOrItNumber"]);
                    break;
                case "Secured Loans":
                    showElements(["costsCentresAreApplicable", "headUnder", "includeInAssessableValueCalculation", "stateName", "countryName", "pinCode", "panOrItNumber", "registrationType", "gstOrUin", "setOrAlterGstDetails", "headUnderFive", "provideBankDetails"]);
                    break;
                case "Stock-in-Hand":
                    showElements(["headUnderFive", "provideBankDetails", "panOrItNumber"]);
                    break;
                case "Sundry Creditors":
                    showElements(["maintainBalancesBillByBill", "defaultCreditPeriod", "checkForCreditDaysDuringVoucherEntry", "costsCentresAreApplicable", "stateName", "countryName", "pinCode", "headUnderFive", "provideBankDetails", "panOrItNumber", "registrationType", "gstOrUin", "setOrAlterGstDetails"]);
                    break;
                case "Sundry Debtors":
                    showElements(["maintainBalancesBillByBill", "defaultCreditPeriod", "checkForCreditDaysDuringVoucherEntry", "costsCentresAreApplicable", "contactPerson", "contactPhoneNumber", "mobileNumber", "email", "stateName", "countryName", "pinCode", "headUnderFive", "provideBankDetails", "panOrItNumber", "registrationType", "gstOrUin", "setOrAlterGstDetails"]);
                    break;
                case "Suspense A/c":
                    showElements(["costsCentresAreApplicable", "headUnderFive", "provideBankDetails", "panOrItNumber"]);
                    break;
                case "Unsecured Loans":
                    showElements(["costsCentresAreApplicable", "headUnder", "includeInAssessableValueCalculation", "stateName", "countryName", "pinCode", "headUnderFive", "provideBankDetails", "panOrItNumber", "registrationType", "gstOrUin", "setOrAlterGstDetails"
                    ]);
                    break;
            default:
                showElements([
                    "headUnder", "headUnderOne", "headUnderTwo", "headUnderThree",
                    "headUnderFour", "typeOfLedger", "maintainBalancesBillByBill",
                    "defaultCreditPeriod", "checkForCreditDaysDuringVoucherEntry",
                    "costsCentresAreApplicable", "odLimit", "includeInAssessableValueCalculation",
                    "gstApplicability", "hsnOrSacAndRelatedDetails", "hsnOrSacDetails",
                    "sourceOfDetails", "hsnOrSacDescription", "classification",
                    "gstRateDetails", "sourceOfDetailsGst", "taxabilityType", "natureOfTransaction", "igstRate",
                    "cgstRate", "utgstRate", "typeOfSupply", "accountHoldersName",
                    "accountNumber", "ifscCode", "swiftCode", "bankName", "branchName",
                    "alterRangeForChequeBooks", "enableChequePrinting", "contactPerson",
                    "contactPhoneNumber", "mobileNumber", "email", "stateName", "countryName",
                    "pinCode", "registrationType", "gstOrUin", "setOrAlterGstDetails"
                ]);
                break;
        }
        
    };


    window.onload = function () {
        const underGroupSelect = document.getElementById("underGroup");
    
        underGroupSelect.addEventListener("change", handleUnderGroupChange);
    
        // Initial hide/show based on the selected value
        handleUnderGroupChange({ target: { value: underGroupSelect.value } });
    }


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



    const [errors, setErrors] = useState({
        ledgerName: ''
        
    })

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






     // Refs
     const inputRef = useRef(null);
     const tallySerialNoRef = useRef(null);
     const aliasNameRef = useRef(null);
     const underGroupRef = useRef(null);
     const typeOfLedgerRef = useRef(null);
     const maintainBalancesBillByBillRef = useRef(null);
     const defaultCreditPeriodRef = useRef(null);
     const checkForCreditDaysDuringVoucherEntryRef = useRef(null);
     const typeOfDutyOrTaxRef = useRef(null);
     const costsCentresAreApplicableRef = useRef(null);
     const percentageOfCalculationRef = useRef(null);
     const odLimitRef = useRef(null);
     const includeInAssessableValueCalculationRef = useRef(null);
     const gstApplicabilityRef = useRef(null);
     const hsnOrSacAndRelatedDetailsRef = useRef(null);
     const sourceOfDetailsRef = useRef(null);
     const hsnOrSacRef = useRef(null);
     const hsnOrSacDescriptionRef = useRef(null);
     const classificationRef = useRef(null);
     const gstRateDetailsRef = useRef(null);
     const sourceOfDetailsGstRef = useRef(null);
     const taxabilityTypeRef = useRef(null);
     const natureOfTransactionRef = useRef(null);
     const igstRateRef = useState(null);
     const cgstRateRef = useState(null);
     const utgstRateRef = useState(null);
     const typeOfSupplyRef = useState(null);
     const accountHoldersNameRef = useRef(null);
     const accountNumberRef = useRef(null);
     const ifscCodeRef = useRef(null);
     const swiftCodeRef = useRef(null);
     const bankNameRef = useRef(null);
     const branchNameRef = useRef(null);
     const alterRangeForChequeBooksRef = useRef(null);
     const enableChequePrintingRef = useRef(null);
     const alterChequePrintingConfigurationRef = useRef(null);
     const contactPersonRef = useRef(null);
     const contactPhoneNumberRef = useRef(null);
     const mobileNumberRef = useRef(null);
     const emailRef = useRef(null);
     const mailingNameRef = useRef(null);
     const addressOneRef = useRef(null);
     const addressTwoRef = useRef(null);
     const addressThreeRef = useRef(null);
     const addressFourRef = useRef(null);
     const addressFiveRef = useRef(null);
     const stateNameRef = useRef(null);
     const countryNameRef = useRef(null);
     const pinCodeRef = useRef(null);
     const provideBankDetailsRef = useRef(null);
     const panOrItNumberRef = useRef(null);
     const registrationTypeRef = useRef(null);
     const gstOrUinRef = useRef(null);
     const setOrAlterGstDetailsRef = useRef(null);
     const openingBalanceRef = useRef(null);
     const submitButtonRef = useRef(null);
 
 
     const underGroupToNextInputRef = {
         'Bank Accounts': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, costsCentresAreApplicableRef, accountHoldersNameRef, accountNumberRef, ifscCodeRef, swiftCodeRef, bankNameRef, branchNameRef, alterRangeForChequeBooksRef, enableChequePrintingRef, alterChequePrintingConfigurationRef, mailingNameRef, addressOneRef, addressTwoRef, addressThreeRef, addressFourRef, addressFiveRef, stateNameRef, countryNameRef, pinCodeRef, gstOrUinRef, openingBalanceRef, submitButtonRef], 
         'Bank OCC A/c' : [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, costsCentresAreApplicableRef, odLimitRef, accountHoldersNameRef, accountNumberRef, ifscCodeRef, swiftCodeRef, bankNameRef, branchNameRef, alterRangeForChequeBooksRef, enableChequePrintingRef, alterChequePrintingConfigurationRef, mailingNameRef, addressOneRef, addressTwoRef, addressThreeRef, addressFourRef, addressFiveRef, stateNameRef, countryNameRef, pinCodeRef, gstOrUinRef, openingBalanceRef, submitButtonRef],
         'Bank OD A/c' : [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, costsCentresAreApplicableRef, odLimitRef, accountHoldersNameRef, accountNumberRef, ifscCodeRef, swiftCodeRef, bankNameRef, branchNameRef, alterRangeForChequeBooksRef, enableChequePrintingRef, alterChequePrintingConfigurationRef, mailingNameRef, addressOneRef, addressTwoRef, addressThreeRef, addressFourRef, addressFiveRef, stateNameRef, countryNameRef, pinCodeRef, gstOrUinRef, openingBalanceRef, submitButtonRef],        
         'Branch / Divisions': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, costsCentresAreApplicableRef, mailingNameRef, addressOneRef, addressTwoRef, addressThreeRef, addressFourRef, addressFiveRef, stateNameRef, countryNameRef, pinCodeRef, provideBankDetailsRef, panOrItNumberRef, registrationTypeRef, gstOrUinRef, setOrAlterGstDetailsRef, openingBalanceRef, submitButtonRef],
         'Capital Account': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, costsCentresAreApplicableRef, mailingNameRef, addressOneRef, addressTwoRef, addressThreeRef, addressFourRef, addressFiveRef, stateNameRef, countryNameRef, pinCodeRef, provideBankDetailsRef, panOrItNumberRef, registrationTypeRef, gstOrUinRef, setOrAlterGstDetailsRef, openingBalanceRef, submitButtonRef],
         'Cash-in-Hand': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, costsCentresAreApplicableRef, provideBankDetailsRef, panOrItNumberRef, openingBalanceRef, submitButtonRef],
         'Current Assets': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, costsCentresAreApplicableRef, includeInAssessableValueCalculationRef, mailingNameRef, addressOneRef, addressTwoRef, addressThreeRef, addressFourRef, addressFiveRef, stateNameRef, countryNameRef, pinCodeRef, provideBankDetailsRef, panOrItNumberRef, registrationTypeRef, gstOrUinRef, setOrAlterGstDetailsRef,  openingBalanceRef, submitButtonRef],
         'Current Liabilities': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, costsCentresAreApplicableRef, includeInAssessableValueCalculationRef, mailingNameRef, addressOneRef, addressTwoRef, addressThreeRef, addressFourRef, addressFiveRef, stateNameRef, countryNameRef, pinCodeRef, provideBankDetailsRef, panOrItNumberRef, registrationTypeRef, gstOrUinRef, setOrAlterGstDetailsRef, openingBalanceRef, submitButtonRef],
         'Deposits (Asset)': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, costsCentresAreApplicableRef, mailingNameRef, addressOneRef, addressTwoRef, addressThreeRef, addressFourRef, addressFiveRef, stateNameRef, countryNameRef, pinCodeRef, provideBankDetailsRef, panOrItNumberRef, registrationTypeRef, gstOrUinRef, setOrAlterGstDetailsRef, openingBalanceRef, submitButtonRef],
         'Direct Expenses': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, typeOfLedgerRef, costsCentresAreApplicableRef, includeInAssessableValueCalculationRef, gstApplicabilityRef, hsnOrSacAndRelatedDetailsRef, sourceOfDetailsRef, hsnOrSacRef, hsnOrSacDescriptionRef, gstRateDetailsRef, sourceOfDetailsGstRef, taxabilityTypeRef, natureOfTransactionRef, igstRateRef, cgstRateRef, utgstRateRef, typeOfSupplyRef, provideBankDetailsRef, openingBalanceRef, submitButtonRef],
         'Direct Incomes': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, typeOfLedgerRef, costsCentresAreApplicableRef, includeInAssessableValueCalculationRef, gstApplicabilityRef, hsnOrSacAndRelatedDetailsRef, sourceOfDetailsRef, hsnOrSacRef, hsnOrSacDescriptionRef, gstRateDetailsRef, sourceOfDetailsGstRef, taxabilityTypeRef, natureOfTransactionRef, igstRateRef, cgstRateRef, utgstRateRef, typeOfSupplyRef, provideBankDetailsRef, openingBalanceRef, submitButtonRef],
         'Duties & Taxes': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, typeOfDutyOrTaxRef, costsCentresAreApplicableRef, percentageOfCalculationRef, includeInAssessableValueCalculationRef, provideBankDetailsRef, openingBalanceRef, submitButtonRef],
         'Fixed Assets': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, costsCentresAreApplicableRef, includeInAssessableValueCalculationRef, gstApplicabilityRef, hsnOrSacAndRelatedDetailsRef, sourceOfDetailsRef, hsnOrSacRef, hsnOrSacDescriptionRef, gstRateDetailsRef, sourceOfDetailsGstRef, taxabilityTypeRef, natureOfTransactionRef, igstRateRef, cgstRateRef, utgstRateRef, typeOfSupplyRef, mailingNameRef, addressOneRef, addressTwoRef, addressThreeRef, addressFourRef, addressFiveRef, stateNameRef, countryNameRef, pinCodeRef, provideBankDetailsRef, panOrItNumberRef, registrationTypeRef, gstOrUinRef, setOrAlterGstDetailsRef, openingBalanceRef, submitButtonRef],
         'Indirect Expenses': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, typeOfLedgerRef, costsCentresAreApplicableRef, includeInAssessableValueCalculationRef, gstApplicabilityRef, hsnOrSacAndRelatedDetailsRef, sourceOfDetailsRef, hsnOrSacRef, hsnOrSacDescriptionRef, gstRateDetailsRef, sourceOfDetailsGstRef, taxabilityTypeRef, natureOfTransactionRef, igstRateRef, cgstRateRef, utgstRateRef, typeOfSupplyRef, provideBankDetailsRef, openingBalanceRef, submitButtonRef],
         'Indirect Incomes': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, typeOfLedgerRef, costsCentresAreApplicableRef, includeInAssessableValueCalculationRef, gstApplicabilityRef, hsnOrSacAndRelatedDetailsRef, sourceOfDetailsRef, hsnOrSacRef, hsnOrSacDescriptionRef, gstRateDetailsRef, sourceOfDetailsGstRef, taxabilityTypeRef, natureOfTransactionRef, igstRateRef, cgstRateRef, utgstRateRef, typeOfSupplyRef, provideBankDetailsRef, openingBalanceRef, submitButtonRef],
         'Investments': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, costsCentresAreApplicableRef, includeInAssessableValueCalculationRef, mailingNameRef, addressOneRef, addressTwoRef, addressThreeRef, addressFourRef, addressFiveRef, stateNameRef, countryNameRef, pinCodeRef, provideBankDetailsRef, panOrItNumberRef, openingBalanceRef, submitButtonRef],
         'Loans & Advances (Asset)': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, costsCentresAreApplicableRef, includeInAssessableValueCalculationRef, mailingNameRef, addressOneRef, addressTwoRef, addressThreeRef, addressFourRef, addressFiveRef, stateNameRef, countryNameRef, pinCodeRef, provideBankDetailsRef, panOrItNumberRef, openingBalanceRef, submitButtonRef],
         'Loans (Liability)': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, costsCentresAreApplicableRef, includeInAssessableValueCalculationRef, mailingNameRef, addressOneRef, addressTwoRef, addressThreeRef, addressFourRef, addressFiveRef, stateNameRef, countryNameRef, pinCodeRef, provideBankDetailsRef, panOrItNumberRef, openingBalanceRef, submitButtonRef],
         'Misc. Expenses (ASSET)': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, costsCentresAreApplicableRef, includeInAssessableValueCalculationRef, provideBankDetailsRef, openingBalanceRef, submitButtonRef],
         'Provisions': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, costsCentresAreApplicableRef, includeInAssessableValueCalculationRef, provideBankDetailsRef, openingBalanceRef, submitButtonRef],
         'Purchase Accounts': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, typeOfLedgerRef, costsCentresAreApplicableRef, includeInAssessableValueCalculationRef, gstApplicabilityRef, hsnOrSacAndRelatedDetailsRef, sourceOfDetailsRef, hsnOrSacRef, hsnOrSacDescriptionRef, gstRateDetailsRef, sourceOfDetailsGstRef, taxabilityTypeRef, natureOfTransactionRef, igstRateRef, cgstRateRef, utgstRateRef, typeOfSupplyRef, provideBankDetailsRef, openingBalanceRef, submitButtonRef],
         'Reserves & Surplus': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, costsCentresAreApplicableRef, provideBankDetailsRef, openingBalanceRef, submitButtonRef],
         'Retained Earnings': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, costsCentresAreApplicableRef, provideBankDetailsRef, openingBalanceRef, submitButtonRef],
         'Sales Accounts': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, typeOfLedgerRef, costsCentresAreApplicableRef, includeInAssessableValueCalculationRef, gstApplicabilityRef, hsnOrSacAndRelatedDetailsRef, sourceOfDetailsRef, hsnOrSacRef, hsnOrSacDescriptionRef, gstRateDetailsRef, sourceOfDetailsGstRef, taxabilityTypeRef, natureOfTransactionRef, igstRateRef, cgstRateRef, utgstRateRef, typeOfSupplyRef, provideBankDetailsRef, openingBalanceRef, submitButtonRef],
         'Secured Loans': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, costsCentresAreApplicableRef, includeInAssessableValueCalculationRef, mailingNameRef, addressOneRef, addressTwoRef, addressThreeRef, addressFourRef, addressFiveRef, stateNameRef, countryNameRef, pinCodeRef, provideBankDetailsRef, panOrItNumberRef, openingBalanceRef, submitButtonRef],
         'Stock-in-Hand': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, provideBankDetailsRef, openingBalanceRef, submitButtonRef],
         'Sundry Creditors': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, maintainBalancesBillByBillRef, defaultCreditPeriodRef, checkForCreditDaysDuringVoucherEntryRef, costsCentresAreApplicableRef, mailingNameRef, addressOneRef, addressTwoRef, addressThreeRef, addressFourRef, addressFiveRef, stateNameRef, countryNameRef, pinCodeRef, provideBankDetailsRef, panOrItNumberRef, registrationTypeRef, gstOrUinRef, setOrAlterGstDetailsRef, openingBalanceRef, submitButtonRef],
         'Sundry Debtors': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, maintainBalancesBillByBillRef, defaultCreditPeriodRef, checkForCreditDaysDuringVoucherEntryRef, costsCentresAreApplicableRef, contactPersonRef, contactPhoneNumberRef, mobileNumberRef, emailRef, mailingNameRef, addressOneRef, addressTwoRef, addressThreeRef, addressFourRef, addressFiveRef, stateNameRef, countryNameRef, pinCodeRef, provideBankDetailsRef, panOrItNumberRef, registrationTypeRef, gstOrUinRef, setOrAlterGstDetailsRef, openingBalanceRef, submitButtonRef],
         'Suspense A/c': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, costsCentresAreApplicableRef, provideBankDetailsRef, openingBalanceRef, submitButtonRef],
         'Unsecured Loans': [inputRef, tallySerialNoRef, aliasNameRef, underGroupRef, costsCentresAreApplicableRef, includeInAssessableValueCalculationRef, mailingNameRef, addressOneRef, addressTwoRef, addressThreeRef, addressFourRef, addressFiveRef, stateNameRef, countryNameRef, pinCodeRef, provideBankDetailsRef, panOrItNumberRef, registrationTypeRef, gstOrUinRef, setOrAlterGstDetailsRef, openingBalanceRef, submitButtonRef]
     };
 
 
 
     
     const hanldeTabPress = (e) => {
         if(e.key === 'Tab' && !validateForm()){
             e.preventDefault();
         }
     };
 
 
     
 
     const handleKeyPress = (e, currentInputRef, underGroup) => {
         console.log(currentInputRef.current); // Check the type of element
         if(e.key === 'Enter' || e.key === 'Escape'){
             e.preventDefault();
             
 
             const nextInputRefs = underGroupToNextInputRef[underGroup];
 
             if(nextInputRefs){
                 const currentIndex = nextInputRefs.findIndex(ref => ref === currentInputRef);
 
                 let nextIndex;
 
                 if(e.key === 'Enter' ){
                     if(validateForm()){
                         nextIndex = currentIndex + 1;
                     }
                 }else if(e.key === 'Escape'){
                     nextIndex = currentIndex - 1;
                 }
 
                 if(nextInputRefs[nextIndex] && typeof nextInputRefs[nextIndex].current.focus === 'function'){
                     nextInputRefs[nextIndex].current.focus();
                 }else{
                     console.log("Reached end of input refs!");
                 }
             }
         }
     };
 





    function saveLedger(e){
        e.preventDefault();


            if(validateForm()){
            const ledger = {ledgerName, tallySerialNo, aliasName, underGroup, subUnder, typeOfLedger, maintainBalancesBillByBill, defaultCreditPeriod, checkForCreditDaysDuringVoucherEntry, typeOfDutyOrTax, costsCentresAreApplicable, percentageOfCalculation, odLimit, includeInAssessableValueCalculation, gstApplicability, hsnOrSacAndRelatedDetails, sourceOfDetails, hsnOrSac, hsnOrSacDescription, classification, gstRateDetails, taxabilityType, natureOfTransaction, igstRate, cgstRate, utgstRate, typeOfSupply, accountHoldersName, accountNumber, ifscCode, swiftCode, bankName, branchName, alterRangeForChequeBooks, enableChequePrinting, alterChequePrintingConfiguration, contactPerson, contactPhoneNumber, mobileNumber, email, mailingName, addressOne, addressTwo, addressThree, addressFour, addressFive, stateName, countryName, pinCode, provideBankDetails, panOrItNumber, registrationType, gstOrUin, setOrAlterGstDetails, openingBalance};

            console.log(ledger);

            createNewLedger(ledger).then((response) => {
                console.log(response.data);
                navigator('/added')
            }).catch((error) => {
                console.error('Error creating Ledger:', error);
            })
        }

        
    };

    
   


    


   
    
   
    

    


   


  return (
    <div>
        <div className='container'>
            <div className='top-ldgr w-[1230px]'>
                <div className='ldgr-title bg-[#88bee6] flex justify-between h-4'>
                    <p className='text-[10px] font-semibold pl-4 text-black'>
                        Ledger Creation
                    </p>
                    <span className='cursor-pointer'>
                        <Link to={"/"}><IoClose /></Link> 
                    </span>
                </div>

                <div className='main-form '>
                    <form>
                        <div className='w-full'>
                            <div className='top-ldgr-main flex '>
                                <div className='top-ldgr border-b pl-2 h-[17vh] w-[80%] flex flex-wrap' >
                                    
                                    <div className='input-ldgr flex items-start mr-4 mt-1 ' style={{ width: '50%' }}>
                                        <label htmlFor="ledgerName" className='text-sm mr-12'>Name</label>
                                        : <input type="text" id='ledgerName' name='ledgerName' value={ledgerName} onChange={(e) => {handleLedgerNameChange(e); setLedgerName(e.target.value); setErrors({...errors, ledgerName: ''})}} className='ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200 w-[500px] focus:border focus:border-blue-500 focus:outline-none ' autoComplete='off' ref={inputRef} onFocus={() => inputRef.current = 'ledgerName'} onKeyDown={(e) => { if(e.key === 'Tab'){hanldeTabPress(e);}else if(e.key === 'Enter'){e.preventDefault(); handleKeyPress(e, inputRef, underGroup);} }} /> <br />
                                        
                                    </div>

                                    <div className='input-ldgr flex items-start mr-4 mt-1 ' style={{ width: '40%' }}>
                                        <label htmlFor="tallySerialNo" className='text-sm mr-7' style={{ color: 'blue' }}>Tally Serial No</label>
                                        : <input type="text" id='tallySerialNo' name='tallySerialNo' value={tallySerialNo} onChange={(e) => { setTallySerialNo(e.target.value) }} className='ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200 w-1/3 focus:border focus:border-blue-500 focus:outline-none' autoComplete='off' ref={tallySerialNoRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, tallySerialNoRef, underGroup); } }} />
                                        
                                    </div>
                                    

                                    <div className='input-ldgr flex items-start w-full -mt-11 '  >
                                        <label htmlFor="aliasName" className='text-sm italic mr-12'>(alias)</label>
                                        : <input type="text" id='aliasName' name='aliasName' value={aliasName} onChange={(e) => {setAliasName(e.target.value)}} className='ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200 w-1/3 focus:border focus:border-blue-500 focus:outline-none' autoComplete='off' ref={aliasNameRef} onFocus={() => inputRef.current = 'aliasName'} onKeyDown={(e) => { if (e.key === 'Tab') { hanldeTabPress(e); } else if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, aliasNameRef, underGroup); } }} />
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

                                    <label htmlFor="underGroup" className='mr-[225px]' >Under</label>
                                    : <select name="underGroup" id="underGroup" className='w-[185px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 ' value={underGroup} onChange={ handleUnderGroupChange} ref={underGroupRef} onKeyDown={(e) => { if (e.key === 'Tab') { hanldeTabPress(e); } else if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, underGroupRef, underGroup); } }}>
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
                                     <input type="text" id='subUnder' name='subUnder' value={subUnder}  readOnly className='ml-[274px] h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' />
                                </div>

                                <div className='input-ldgr flex ml-2' id='typeOfLedger' >
                                    <label htmlFor="typeOfLedger" className='mr-[171px]'>Type of Ledger</label>
                                    : <select name="typeOfLedger" id="typeOfLedger" value={typeOfLedger} onChange={(e) => setTypeOfLedger(e.target.value)} className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500' ref={typeOfLedgerRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, typeOfLedgerRef, underGroup); } }}>
                                        <option value="Not Applicable">&diams;Not Applicable</option>
                                        <option value="Discount">Discount</option>
                                        <option value="Invoice Rounding">Invoice Rounding</option>
                                    </select>
                                </div>

                                <div className='input-ldgr flex ml-2' id='maintainBalancesBillByBill'>
                                    <label htmlFor="maintainBalancesBillByBill" className='mr-[84px]'>Maintain balances bill-by-bill</label>
                                    : <select name="maintainBalancesBillByBill" id="maintainBalancesBillByBill" value={maintainBalancesBillByBill} onChange={(e) => setMaintainBalancesBillByBill(e.target.value)}  className='w-[65px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 ' ref={maintainBalancesBillByBillRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, maintainBalancesBillByBillRef, underGroup); } }} >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>

                                <div className='input-ldgr flex ml-2' id='defaultCreditPeriod'>
                                    <label htmlFor="defaultCreditPeriod" className='mr-[135px]'>Default credit period</label>
                                    : <input type="text" id='defaultCreditPeriod' name='defaultCreditPeriod' value={defaultCreditPeriod} onChange={(e) => setDefaultCreditPeriod(e.target.value)}  className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' ref={defaultCreditPeriodRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, defaultCreditPeriodRef, underGroup); } }} />
                                </div>

                                <div className='input-ldgr flex ml-2' id='checkForCreditDaysDuringVoucherEntry'>
                                    <label htmlFor="checkForCreditDaysDuringVoucherEntry" className='mr-[3px]'>Check for credit days during voucher entry</label>
                                    : <select name="checkForCreditDaysDuringVoucherEntry" id="checkForCreditDaysDuringVoucherEntry" value={checkForCreditDaysDuringVoucherEntry} onChange={(e) =>setCheckForCreditDaysDuringVoucherEntry(e.target.value)}  className='w-[65px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500' ref={checkForCreditDaysDuringVoucherEntryRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, checkForCreditDaysDuringVoucherEntryRef, underGroup); } }}  >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>

                                <div className='input-ldgr flex mt-1 ml-2' id='typeOfDutyOrTax'>
                                    <label htmlFor="typeOfDutyOrTax" className='mr-[159px]'>Type of Duty/Tax</label>
                                    : <select name="typeOfDutyOrTax" id="typeOfDutyOrTax" value={typeOfDutyOrTax} onChange={(e) => setTypeOfDutyOrTax(e.target.value)} className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500' ref={typeOfDutyOrTaxRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, typeOfDutyOrTaxRef, underGroup); } }} >
                                        <option value="Gst">GST</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>

                                <div className='input-ldgr flex mt-1 ml-2' id='costsCentresAreApplicable'>
                                    <label htmlFor="costsCentresAreApplicable" className='mr-[90px]'>Costs centres are applicable</label>
                                    : <select name="costsCentresAreApplicable" id="costsCentresAreApplicable" value={costsCentresAreApplicable} onChange={(e) => setCostsCentresAreAplicable(e.target.value)} className='w-[65px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 ' ref={costsCentresAreApplicableRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, costsCentresAreApplicableRef, underGroup); } }}  >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>

                                <div className='input-ldgr flex ml-2' id='percentageOfCalculation'>
                                    <label htmlFor="percentageOfCalculation" className='mr-[105px]'>Percentage of Calculation</label>
                                    : <input type="number" id='percentageOfCalculation' name='percentageOfCalculation' value={percentageOfCalculation} onChange={(e) => setPercentageOfCalculation(e.target.value)} className='w-[40px] h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' ref={percentageOfCalculationRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, percentageOfCalculationRef, underGroup); } }} />%
                                </div>

                                <div className='input-ldgr flex ml-2' id='odLimit'>
                                    <label htmlFor="odLimit" className='mr-[187px]'>Set OD limit</label>
                                    : <input type="text" id='odLimit' name='odLimit' value={odLimit} onChange={(e) => setOdLimit(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' ref={odLimitRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, odLimitRef, underGroup); } }}  />
                                </div>

                                <div className='headUnder input-ldgr flex ml-2' id='headUnder'>
                                    <h2 className='headUnder underline font-semibold mt-1'>Statutory Details</h2>
                                </div>

                                

                                <div className='input-ldgr flex mt-2 ml-2' id='includeInAssessableValueCalculation'>
                                    <label htmlFor="includeInAssessableValueCalculation" className='mr-[31px]'>Include in Assesable Value calculation</label>
                                    : <select name="includeInAssessableValueCalculation" id="includeInAssessableValueCalculation" value={includeInAssessableValueCalculation} onChange={(e) => setIncludeInAssessableValueCalculation(e.target.value)} className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 ' ref={includeInAssessableValueCalculationRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, includeInAssessableValueCalculationRef, underGroup); } }} >
                                        <option value="Not Applicable">&diams;Not Applicable</option>
                                        <option value="GST">GST</option>
                                    </select>
                                </div>

                                <div className='input-ldgr flex ml-2' id='gstApplicability'>
                                    <label htmlFor="gstApplicability" className='mr-[160px]'>GST Applicability</label>
                                    : <select name="gstApplicability" id="gstApplicability" value={gstApplicability} onChange={(e) => setGstApplicability(e.target.value)} className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 ' ref={gstApplicabilityRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, gstApplicabilityRef, underGroup); } }} >
                                        <option value="Applicable">&diams;Applicable</option>
                                        <option value="Not Applicable">&diams;Not Applicable</option>
                                    </select>
                                </div>

                                <div className='headUnderOne input-ldgr flex ml-2' id='headUnderOne'>
                                    <h2 className='headUnderOne underline font-semibold'>HSN/SAC & Related Details</h2>
                                </div>


                                <div className='input-ldgr flex ml-2' id='hsnOrSacAndRelatedDetails'>
                                    <label htmlFor="hsnOrSacAndRelatedDetails" className='mr-[159px]'>HSN/SAC Details</label>
                                    : <select name="hsnOrSacAndRelatedDetails" id="hsnOrSacAndRelatedDetails" value={hsnOrSacAndRelatedDetails} onChange={(e) => setHsnOrSacAndRelatedDetails(e.target.value)} className='w-[185px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 ' ref={hsnOrSacAndRelatedDetailsRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, hsnOrSacAndRelatedDetailsRef, underGroup); } }}  >
                                        <option value="asPerCompanyOrGroup">As per Company/Group</option>
                                        <option value="specifyDetailsHere">Specify Details Here</option>
                                        <option value="useGstClassification">Use GST Classification</option>
                                    </select>
                                </div>

                                <div className='input-ldgr flex ml-2' id='sourceOfDetails'>
                                    <label htmlFor="sourceOfDetails" className='mr-[158px]'>Source of Details</label>
                                    : <input type="text" id='sourceOfDetails' name='sourceOfDetails' value={sourceOfDetails} onChange={(e) => setSourceOfDetails(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' ref={sourceOfDetailsRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, sourceOfDetailsRef, underGroup); } }} />
                                </div>

                                <div className='input-ldgr flex ml-2' id='hsnOrSac'>
                                    <label htmlFor="hsnOrSac" className='mr-[204px]'>HSN/SAC</label>
                                    : <input type="text" id='hsnOrSac' name='hsnOrSac' value={hsnOrSac} onChange={(e) =>setHasnOrSac(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' ref={hsnOrSacRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, hsnOrSacRef, underGroup); } }} />
                                </div>

                                <div className='input-ldgr flex ml-2' id='hsnOrSacDescription'>
                                    <label htmlFor="hsnOrSacDescription" className='mr-[192px]'>Description</label>
                                    : <input type="text" id='hsnOrSacDescription' name='hsnOrSacDescription' value={hsnOrSacDescription} onChange={(e) => setHsnOrSacDescription(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500'  ref={hsnOrSacDescriptionRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, hsnOrSacDescriptionRef, underGroup); } }} />
                                </div>

                                

                                <div className='input-ldgr flex ml-2' id='classification'>
                                    <label htmlFor="classification" className='mr-[184px]'>Classification</label>
                                    : <input type="text" id='classification' name='classification' value={classification} onChange={(e) => setClassification(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' ref={classificationRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, classificationRef, underGroup); } }} />
                                </div>

                                <div className='headUnderTwo ml-2' id='headUnderTwo'>
                                    <h2 className='headUnderTwo underline font-semibold '>GST Rate & Related Details</h2>
                                </div>

                                

                                <div className='input-ldgr flex ml-2' id='gstRateDetails'>
                                    <label htmlFor="gstRateDetails" className='mr-[162px]'>GST Rate Details</label>
                                    : <select name="gstRateDetails" id="gstRateDetails" value={gstRateDetails} onChange={(e) => setGstRateDetails(e.target.value)} className='w-[185px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 '  ref={gstRateDetailsRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, gstRateDetailsRef, underGroup); } }} >
                                        <option value="asPerCompanyOrGroup">As per Company/Group</option>
                                        <option value="specifyDetailsHere">Specify Details Here</option>
                                        <option value="specifySlabBasedRates">Specify Slab-Based Rates</option>
                                        <option value="useGstClassification">Use GST Classification</option>
                                    </select>
                                </div>

                                <div className='input-ldgr flex ml-2' id='sourceOfDetailsGst'>
                                    <label htmlFor="sourceOfDetailsGst" className='mr-[158px]'>Source of Details</label>
                                    : <input type="text" id='sourceOfDetailsGst' name='sourceOfDetailsGst' value={sourceOfDetailsGst} onChange={(e) => setSourceOfDetailsGst(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' ref={sourceOfDetailsGstRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, sourceOfDetailsGstRef, underGroup); } }} />
                                </div>

                                <div className='input-ldgr flex ml-2' id='taxabilityType'>
                                    <label htmlFor="taxabilityType" className='mr-[174px]'>Taxability Type</label>
                                    : <select name="taxabilityType" id="taxabilityType" value={taxabilityType} onChange={(e) => setTaxabilityType(e.target.value)} className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 ' ref={taxabilityTypeRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, taxabilityTypeRef, underGroup); } }} >
                                        <option value="Exempt">Exempt</option>
                                        <option value="NilRated">Nil Rated</option>
                                        <option value="NonGst">Non-GST</option>
                                        <option value="Taxable">Taxable</option>
                                    </select>
                                </div>

                                <div className='input-ldgr flex ml-2' id='natureOfTransaction'>
                                    <label htmlFor="natureOfTransaction" className='mr-[129px]'>Nature of Transaction</label>
                                    : <select name="natureOfTransaction" id="natureOfTransaction" value={natureOfTransaction} onChange={(e) => setNatureOfTransaction(e.target.value)} className='w-[340px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 ' ref={natureOfTransactionRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, natureOfTransactionRef, underGroup); } }} >
                                        <option value="systemInferred">&diams;System Inferred</option>
                                        <option value="localPurchaseTaxable">Local Purchase-Taxable</option>
                                        <option value="interstatePurchaseTaxable">Interstate Purchase-Taxable</option>
                                        <option value="localPurchaseDeemedExportsTaxable">Local Purchase Deemed Exports-Taxable</option>
                                        <option value="interstatePurchaseDeemedExportsTaxable">Interstate Purchase Deemed Exports-Taxable</option>
                                        <option value="importsTaxable">Imports-Taxable</option>
                                        <option value="purchaseFromSezTaxable">Purchase from SEZ-Taxable</option>
                                        <option value="purchaseFromSezWithoutBillOfEntryTaxable">Purchase from SEZ (Without Bill of Entry)-Taxable</option>
                                    </select>
                                </div>
 
                                <div className='input-ldgr flex ml-2' id='igstRate'>
                                    <label htmlFor="igstRate" className='mr-[203px]'>IGST Rate</label>
                                    : <input type="number" id='igstRate' name='igstRate' value={igstRate} onChange={(e) => setIgstRate(e.target.value)} className='w-[40px] h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500'  ref={igstRateRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, igstRateRef, underGroup); } }} />%
                                </div>

                                <div className='input-ldgr flex ml-2' id='cgstRate'>
                                    <label htmlFor="cgstRate" className='mr-[198px]'>CGST Rate</label>
                                    : <input type="number" id='cgstRate' name='cgstRate' value={cgstRate} onChange={(e) => setCgstRate(e.target.value)} className='w-[40px] h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' ref={cgstRateRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, cgstRateRef, underGroup); } }} />%
                                </div>

                                <div className='input-ldgr flex ml-2' id='utgstRate'>
                                    <label htmlFor="utgstRate" className='mr-[153px]'>SGST/UTGST Rate</label>
                                    : <input type="number" id='utgstRate' name='utgstRate' value={utgstRate} onChange={(e) => setUtgstRate(e.target.value)} className='w-[40px] h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' ref={utgstRateRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, utgstRateRef, underGroup); } }} />%
                                </div>

                                <div className='input-ldgr flex ml-2' id='typeOfSupply'>
                                    <label htmlFor="typeOfSupply" className='mr-[171px]'>Type of Supply</label>
                                    : <select name="typeOfSupply" id="typeOfSupply" value={typeOfSupply} onChange={(e) => setTypeOfSupply(e.target.value)} className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 ' ref={typeOfSupplyRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, typeOfSupplyRef, underGroup); } }} >
                                        <option value="CapitalGoods">Capital Goods</option>
                                        <option value="Goods">Goods</option>
                                        <option value="Services">Services</option>
                                    </select>
                                </div>

                                <div className='headUnderThree input-ldgr ml-2' id='headUnderThree'>
                                    <h2 className='headUnderThree underline font-semibold mt-4 mb-2 '>Bank Account Details</h2>
                                </div>
                                
                                

                                <div className='input-ldgr flex ml-2' id='accountHoldersName'>
                                    <label htmlFor="accountHoldersName" className='mr-[145px]'>A/c Holder's Name</label>
                                    : <input type="text" id='accountHoldersName' name='accountHoldersName' value={accountHoldersName} onChange={(e) => setAccountHoldersName(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' ref={accountHoldersNameRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, accountHoldersNameRef, underGroup); } }} />
                                </div>

                                <div className='input-ldgr flex ml-2' id='accountNumber'>
                                    <label htmlFor="accountNumber" className='mr-[215px]'>A/c No.</label>
                                    : <input type="number" id='accountNumber' name='accountNumber' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' ref={accountNumberRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, accountNumberRef, underGroup); } }} />
                                </div>

                                <div className='input-ldgr flex ml-2' id='ifscCode'>
                                    <label htmlFor="ifscCode" className='mr-[199px]'>IFSC Code</label>
                                    : <input type="text" id='ifscCode' name='ifscCode' value={ifscCode} onChange={(e) => setIfscCode(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500'  ref={ifscCodeRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, ifscCodeRef, underGroup); } }} />
                                </div>

                                <div className='input-ldgr flex ml-2' id='swiftCode'>
                                    <label htmlFor="swiftCode" className='mr-[187px]'>SWIFT Code</label>
                                    : <input type="text" id='swiftCode' name='swiftCode' value={swiftCode} onChange={(e) => setSwiftCode(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500'  ref={swiftCodeRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, swiftCodeRef, underGroup); } }} />
                                </div>

                                <div className='input-ldgr flex ml-2' id='bankName'>
                                    <label htmlFor="bankName" className='mr-[191px]'>Bank Name</label>
                                    : <select name="bankName" id="bankName" value={bankName} onChange={(e) => setBankName(e.target.value)} className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 ' ref={bankNameRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, bankNameRef, underGroup); } }} >
                                        <option value="Not Applicable">&diams;Not Applicable</option>
                                        {
                                            Bank.map((ban)=>(
                                                <option value={ban.value} key={ban.id}>{ban.label}</option>
                                            ))
                                        }
                                        
                                        
                                    </select>
                                </div>

                                <div className='input-ldgr flex ml-2' id='branchName'> 
                                    <label htmlFor="branchName" className='mr-[220px]'>Branch</label>
                                    : <input type="text" id='branchName' name='branchName' value={branchName} onChange={(e) => setBranchName(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500'  ref={branchNameRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, branchNameRef, underGroup); } }} />
                                </div>

                                <div className=' input-ldgr headUnderFour ml-2 ' id='headUnderFour'>
                                    <h2 className='headUnderFour underline font-semibold mt-4 mb-2' id='headUnderFour'>Bank Configuration</h2>
                                </div>

                                

                                <div className='input-ldgr flex ml-2' id='alterRangeForChequeBooks'>
                                    <label htmlFor="alterRangeForChequeBooks" className='mr-[55px]'>Set/Alter range for Cheque Books</label>
                                    : <select name="alterRangeForChequeBooks" id="alterRangeForChequeBooks" value={alterRangeForChequeBooks} onChange={(e) => setAlterRangeForChequeBooks(e.target.value)} className='w-[65px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 ' ref={alterRangeForChequeBooksRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, alterRangeForChequeBooksRef, underGroup); } }} >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>

                                <div className=' input-ldgr flex ml-2' id='enableChequePrinting'>
                                    <label htmlFor="enableChequePrinting" className='mr-[117px]'>Enable Cheque Printing</label>
                                    : <select name="enableChequePrinting" id="enableChequePrinting" value={enableChequePrinting} onChange={(e) => setEnableChequePrinting(e.target.value)} className='w-[65px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 ' ref={enableChequePrintingRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, enableChequePrintingRef, underGroup); } }} >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>

                                <div className='input-ldgr flex ml-2' id='alterChequePrintingConfiguration'>
                                    <label htmlFor="alterChequePrintingConfiguration" className='mr-[15px]'>Set/Alter Cheque Printing Configuration</label>
                                    : <select name="alterChequePrintingConfiguration" id="alterChequePrintingConfiguration" value={alterChequePrintingConfiguration} onChange={(e) => setAlterChequePrintingConfiguration(e.target.value)} className='w-[65px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500' ref={alterChequePrintingConfigurationRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, alterChequePrintingConfigurationRef, underGroup); } }} >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>

                                <div className='input-ldgr flex ml-2 mt-3' id='contactPerson'>
                                    <label htmlFor="contactPerson" className='text-blue-800 font-semibold mr-[166px]'>Contact Person</label>
                                    : <input type="text" id='contactPerson' name='contactPerson' value={contactPerson} onChange={(e) =>setContactPerson(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' ref={contactPersonRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, contactPersonRef, underGroup); } }} />
                                </div>

                                <div className='input-ldgr flex ml-2' id='contactPhoneNumber'>
                                    <label htmlFor="contactPhoneNumber" className='text-blue-800 font-semibold mr-[146px]'>Contact Phone No</label>
                                    : <input type="number" id='contactPhoneNumber' name='contactPhoneNumber' value={contactPhoneNumber} onChange={(e) =>setContactPhoneNumber(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' ref={contactPhoneNumberRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, contactPhoneNumberRef, underGroup); } }} />
                                </div>

                                <div className='input-ldgr flex ml-2' id='mobileNumber'>
                                    <label htmlFor="mobileNumber" className='text-blue-800 font-semibold mr-[195px]'>Mobile No</label>
                                    : <input type="number" id='mobileNumber' name='mobileNumber' value={mobileNumber} onChange={(e) =>setMobileNumber(e.target.value)} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' ref={mobileNumberRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, mobileNumberRef, underGroup); } }} />
                                </div>

                                <div className='input-ldgr flex ml-2' id='email'>
                                    <label htmlFor="email" className='text-blue-800 font-semibold mr-[228px]'>Email</label>
                                    : <input type="text" id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='h-5 outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' autoComplete='off' ref={emailRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, emailRef, underGroup); } }} />
                                </div>

                                
                                
                            </div>

                            

                            <div className='h-[70vh] w-1/2 border text-sm'>
                                <h2 className='underline font-semibold p-1'>Mailing Details</h2>

                                <div className='input-ldgr ml-2' id='mailingName'>
                                    <label htmlFor="mailingName" className='mr-[152px]'>Name</label>
                                    : <input type="text" id='mailingName' name='mailingName' value={mailingName} onChange={(e) => {handleMailingNameChange(e); setMailingName(e.target.value)}} className=' w-[400px] h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' autoComplete='off'   ref={mailingNameRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, mailingNameRef, underGroup); } }} />
                                </div>

                                <div className='input-ldgr ml-2' id='address'>
                                    <label htmlFor="address" className='mr-[140px]'>Address</label>
                                    : <input type="text" id='addressOne' name='addressOne' value={addressOne} onChange={(e) => {setAddressOne(e.target.value)}} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' autoComplete='off' ref={addressOneRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, addressOneRef, underGroup); } }} />
                                </div>

                                <div className='input-ldgr ml-2'>
                                    <label htmlFor="" className='mr-[195px]'></label>
                                    <input type="text" id='addressTwo' name='addressTwo' value={addressTwo} onChange={(e) => {setAddressTwo(e.target.value)}} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' autoComplete='off' ref={addressTwoRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, addressTwoRef, underGroup); } }} />
                                </div>

                                <div className='input-ldgr ml-2'>
                                    <label htmlFor="" className='mr-[195px]'></label>
                                    <input type="text" id='addressThree' name='addressThree' value={addressThree} onChange={(e) => {setAddressThree(e.target.value)}} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' autoComplete='off'  ref={addressThreeRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, addressThreeRef, underGroup); } }} />
                                </div>

                                <div className='input-ldgr ml-2'>
                                    <label htmlFor="" className='mr-[195px]'></label>
                                    <input type="text" id='addressFour' name='addressFour' value={addressFour} onChange={(e) => {setAddressFour(e.target.value)}} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' autoComplete='off'  ref={addressFourRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, addressFourRef, underGroup); } }} />
                                </div>

                                <div className='input-ldgr ml-2'>
                                    <label htmlFor="" className='mr-[195px]'></label>
                                    <input type="text" id='addressFive' name='addressFive' value={addressFive} onChange={(e) => {setAddressFive(e.target.value)}} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' autoComplete='off' ref={addressFiveRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, addressFiveRef, underGroup); } }} />
                                </div>

                                <div className='input-ldgr ml-2' id='stateName'>
                                    <label htmlFor="stateName" className='mr-[158px]'>State</label>
                                    : <select name="stateName" id="stateName" className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 ' value={stateName} onChange={(e) => setStateName(e.target.value)}  ref={stateNameRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, stateNameRef, underGroup); } }}  >
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

                                <div className='input-ldgr ml-2' id='countryName'>
                                    <label htmlFor="countryName" className='mr-[140px]'>Country</label>
                                    : <select name="countryName" id="countryName" className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 ' value={countryName} onChange={(e) => setCountryName(e.target.value)}  ref={countryNameRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, countryNameRef, underGroup); } }} >
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

                                <div className='input-ldgr ml-2' id='pinCode'>
                                    <label htmlFor="pinCode" className='mr-[140px]'>Pincode</label>
                                    : <input type="number" id='pinCode' name='pinCode' value={pinCode} onChange={(e) => setPinCode(e.target.value)} className='h-5 outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' autoComplete='off' ref={pinCodeRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, pinCodeRef, underGroup); } }} />
                                </div>

                                <div className='input-ldgr p-1' id='headUnderFive'>
                                    <h2 className='headUnderFive underline font-semibold mt-5'>Banking Details</h2>
                                </div>

                                <div className='input-ldgr ml-2' id='provideBankDetails'>
                                    <label htmlFor="provideBankDetails" className='mr-[67px]'>Provide bank details</label>
                                    : <select name="provideBankDetails" id="provideBankDetails" value={provideBankDetails} onChange={(e) => setProvideBankDetails(e.target.value)} className='w-[65px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500'  ref={provideBankDetailsRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, provideBankDetailsRef, underGroup); } }} >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>

                                <div className='input-ldgr p-1' id='headUnderSix'>
                                    <h2 className='headUnderSix underline font-semibold mt-5'>Tax Registration Details</h2>
                                </div>

                                <div className='input-ldgr ml-2' id='panOrItNumber'>
                                    <label htmlFor="panOrItNumber" className='mr-[123px]'>PAN/IT No.</label>
                                    : <input type="text" id='panOrItNumber' name='panOrItNumber' value={panOrItNumber} onChange={(e) => setPanOrItNumber(e.target.value.toUpperCase())} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' autoComplete='off'  ref={panOrItNumberRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, panOrItNumberRef, underGroup); } }} />
                                </div>

                                <div className='input-ldgr ml-2' id='registrationType'>
                                    <label htmlFor="registrationType" className='mr-[85px]'>Registration Type</label>
                                    : <select name="registrationType" id="registrationType" value={registrationType} onChange={(e) => setRegistrationType(e.target.value)} className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500' ref={registrationTypeRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, registrationTypeRef, underGroup); } }} >
                                        <option value="Unknown">&diams;Unknown</option>
                                        <option value="Composition">Composition</option>
                                        <option value="Regular">Regular</option>
                                        <option value="UnregisteredOrConsumer">Unregistered/Consumer</option>
                                    </select>
                                </div>

                                <div className='input-ldgr ml-2' id='gstOrUin'>
                                    <label htmlFor="gstOrUin" className='mr-[124px]'>GSTIN/UIN</label>
                                    : <input type="text" id='gstOrUin' name='gstOrUin' value={gstOrUin} onChange={(e) => {setGstOrUin(e.target.value.toUpperCase()); makeUpperCase(e);}} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' autoComplete='off'  ref={gstOrUinRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, gstOrUinRef, underGroup); } }} />
                                </div>

                                <div className='input-ldgr ml-2' id='setOrAlterGstDetails'>
                                    <label htmlFor="setOrAlterGstDetails">Set/Alter additional GST details</label>
                                    : <select name="setOrAlterGstDetails" id="setOrAlterGstDetails" value={setOrAlterGstDetails} onChange={(e) => setSetOrAlterGstDetails(e.target.value)} className='w-[65px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500'  ref={setOrAlterGstDetailsRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, setOrAlterGstDetailsRef, underGroup); } }} >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>


                            </div>

                            

                        </div>

                        <div className='open-balance flex justify-center p-[2px]'>
                            <h3 className='text-sm'>Opening Balance <span className='pl-5'>( on 1-Apr-24):</span> Rs.<input type="number" id='openingBalance' name='openingBalance' value={openingBalance} onChange={(e) => setOpeningBalance(e.target.value)} className='h-5 w-[80px] outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500' autoComplete='off'  ref={openingBalanceRef} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleKeyPress(e, openingBalanceRef, underGroup); } }} />/-</h3>
                        </div>

                        <div className='flex justify-center'>

                            {/* <input className='text-sm px-8 py-1 border hover:bg-slate-400' type="submit" value="A: Accept" /> */}

                            <button type='submit' className='text-sm px-8 py-1 mt-3 border-none hover:bg-slate-400' onClick={saveLedger} ref={submitButtonRef}   >A: Accept</button>

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