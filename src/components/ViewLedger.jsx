import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";


const ViewLedger = ({ledgerName}) => {


    const [ledgerDetails, setLedgerDetails] = useState(null);

   useEffect(() => {
    const getLedgerDataByLedgerName = async () => {
        try{
            const response = await axios.get(`api/ledger/${ledgerName}`);
            setLedgerDetails(response.data);
        }catch (error) {
            console.error('Error fetching ledger details: ' , error);

        }
    };

    getLedgerDataByLedgerName();
   }, [ledgerName])
   
    


  return (
    <div>
       {ledgerDetails && (
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
                                    <label htmlFor="ledgerName" className='text-sm mr-12'>Name</label>:
                                    : <input type="text" id='ledgerName' name='ledgerName' value={ledgerDetails.ledgerName} className='ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200 w-[500px] focus:border focus:border-blue-500 focus:outline-none '   /> 
                                    
                                </div>

                                <div className='input-ldgr flex items-start mr-4 mt-1 ' style={{ width: '40%' }}>
                                    <label htmlFor="tallySerialNo" className='text-sm mr-7' style={{ color: 'blue' }}>Tally Serial No</label>
                                    : <input type="text" id='tallySerialNo' name='tallySerialNo' value={ledgerDetails.tallySerialNo} className='ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200 w-1/3 focus:border focus:border-blue-500 focus:outline-none' />
                                    
                                </div>
                                

                                <div className='input-ldgr flex items-start w-full -mt-11 '  >
                                    <label htmlFor="aliasName" className='text-sm italic mr-12'>(alias)</label>
                                    : <input type="text" id='aliasName' name='aliasName' value={ledgerDetails.aliasName} className='ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200 w-1/3 focus:border focus:border-blue-500 focus:outline-none'  />
                                </div>
                                

                            </div>

                            <div className='right-side-opening-balance h-[17vh] w-[20%] border'>
                                <h2 className='text-center underline font-semibold'>Total Opening Balance</h2>
                            </div>
                        </div>

                    </div>

                    <div className='middle-box flex'>
                        <div className='input-ldgr h-[70vh] border w-1/2 text-sm'>
                            <label htmlFor="underGroup" >Under</label>
                            : <select name="underGroup" id="underGroup" value={ledgerDetails.underGroup} className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 '  >
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

                        <div className='h-[70vh] w-1/2 border p-2 text-sm'>
                            <h2 className='underline font-semibold'>Mailing Details</h2>

                            <div className='input-ldgr'>
                                <label htmlFor="mailingName" className='mr-[152px]'>Name</label>
                                : <input type="text" id='mailingName' name='mailingName' value={ledgerDetails.mailingName}  className=' w-[400px] h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500'  />
                            </div>

                            <div className='input-ldgr'>
                                <label htmlFor="address" className='mr-[140px]'>Address</label>
                                : <input type="text" id='addressOne' name='addressOne' value={ledgerDetails.addressOne} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500'  />
                            </div>

                            <div className='input-ldgr'>
                                <label htmlFor="" className='mr-[195px]'></label>
                                <input type="text" id='addressTwo' name='addressTwo' value={ledgerDetails.addressTwo} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500'  />
                            </div>

                            <div className='input-ldgr'>
                                <label htmlFor="" className='mr-[195px]'></label>
                                <input type="text" id='addressThree' name='addressThree' value={ledgerDetails.addressThree} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500'  />
                            </div>

                            <div className='input-ldgr'>
                                <label htmlFor="" className='mr-[195px]'></label>
                                <input type="text" id='addressFour' name='addressFour' value={ledgerDetails.addressFour} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500'  />
                            </div>

                            <div className='input-ldgr'>
                                <label htmlFor="" className='mr-[195px]'></label>
                                <input type="text" id='addressFive' name='addressFive' value={ledgerDetails.addressFive} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500'  />
                            </div>

                            <div className='input-ldgr'>
                                <label htmlFor="stateName" className='mr-[158px]'>State</label>
                                : <select name="stateName" id="stateName" value={ledgerDetails.stateName} className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 '  >
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

                            <div className='input-ldgr'>
                                <label htmlFor="countryName" className='mr-[140px]'>Country</label>
                                : <select name="countryName" id="countryName" value={ledgerDetails.countryName} className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500 '  >
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

                            <div className='input-ldgr'>
                                <label htmlFor="pinCode" className='mr-[140px]'>Pincode</label>
                                : <input type="number" id='pinCode' name='pinCode' value={ledgerDetails.pinCode} className='h-5 outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500'  />
                            </div>

                            <div className='input-ldgr'>
                                <h2 className='underline font-semibold mt-5'>Banking Details</h2>
                            </div>

                            <div className='input-ldgr'>
                                <label htmlFor="provideBankDetails" className='mr-[67px]'>Provide bank details</label>
                                : <select name="provideBankDetails" id="provideBankDetails" value={ledgerDetails.provideBankDetails} className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500'>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>

                            <div className='input-ldgr'>
                                <h2 className='underline font-semibold mt-5'>Tax Registration Details</h2>
                            </div>

                            <div className='input-ldgr'>
                                <label htmlFor="panOrItNumber" className='mr-[123px]'>PAN/IT No.</label>
                                : <input type="text" id='panOrItNumber' name='panOrItNumber' value={ledgerDetails.panOrItNumber} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500'  />
                            </div>

                            <div className='input-ldgr'>
                                <label htmlFor="registrationType" className='mr-[85px]'>Registration Type</label>
                                : <select name="registrationType" id="registrationType" value={ledgerDetails.registrationType} className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500'>
                                    <option value="Unknown">&diams;Unknown</option>
                                    <option value="Composition">Composition</option>
                                    <option value="Regular">Regular</option>
                                    <option value="UnregisteredOrConsumer">Unregistered/Consumer</option>
                                </select>
                            </div>

                            <div className='input-ldgr'>
                                <label htmlFor="gstOrUin" className='mr-[124px]'>GSTIN/UIN</label>
                                : <input type="text" id='gstOrUin' name='gstOrUin' value={ledgerDetails.gstOrUin} className='h-5 capitalize outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500'  />
                            </div>

                            <div className='input-ldgr'>
                                <label htmlFor="setOrAlterGstDetails">Set/Alter additional GST details</label>
                                : <select name="setOrAlterGstDetails" id="setOrAlterGstDetails" value={ledgerDetails.setOrAlterGstDetails} className='w-[165px] font-semibold h-5 outline-none focus:bg-yellow-200 focus:border border border-transparent focus:border-blue-500'>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>


                        </div>

                        

                    </div>

                    <div className='open-balance flex justify-center p-[2px]'>
                        <h3 className='text-sm'>Opening Balance <span className='pl-5'>( on 1-Apr-24):</span><input type="text" id='openingBalance' name='openingBalance' value={ledgerDetails.openingBalance} className='h-5 w-[80px] outline-none pl-1 focus:bg-yellow-200 focus:border focus:border-blue-500'  /></h3>
                    </div>

                    <div className='flex justify-center'>

                        {/* <input className='text-sm px-8 py-1 border hover:bg-slate-400' type="submit" value="A: Accept" /> */}

                        {/* <button type='submit' className='text-sm px-8 py-1 border-none hover:bg-slate-400' onClick={saveLedger}>A: Accept</button> */}

                    </div>   

                    
                    


                </form>    
            </div>

            <div className='w-[15%] border-l'></div>
        </div>
        
    </div>
       )}
    </div>
  )
}

export default ViewLedger