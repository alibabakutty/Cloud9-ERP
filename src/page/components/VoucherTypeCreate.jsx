import React from 'react'

const VoucherTypeCreate = () => {




  return (
    <div>


      <div className=' container text-sm w-[1200px] h-[600px] bg-[#fff] m-0 border border-[#ccc]' >

        <form action="">

          <div className='top-part border-b border-[#ccc] p-2'>

            <div className='top-grp mb-1'> 
              <label className='label-form mr-11' htmlFor="voucherName">Name</label>
              : <input className='w-60 h-5 focus:bg-[#F8D082] ' type="text" id='voucherName' name='voucherName' required /><br />
            </div>
            
            <div className='top-grp'>
              <label className='label-form mr-11' htmlFor="alias">(alias)</label>
              : <input className='w-60 h-5 mb-10 focus:bg-[#F8D082]' type="text" id='alias' name='alias' required />
            </div>
            
            
          </div>

          <div className='middle flex justify-between h-[503px] ' >
            <div className='general w-[500px] p-2 border-r border-[#ccc]'>

              <div className=' mt-2 text-center' id='heading'>
                <label className='border-b' htmlFor="">General</label>
              </div>

              <div className='input-grp' id='selectTypeOfVoucher'>
                <label className='mr-[178px]' htmlFor="selectTypeOfVoucher">Select type of voucher</label>
                  {/* : <input className=' h-5 focus:bg-[#F8D082] ' type="text" id='selectTypeOfVoucher' name='selectTypeOfVoucher' required /> */}
                   : <select className=' w-40 h-5 focus:bg-[#F8D082] ' name="selectTypeOfVoucher" id="selectTypeOfVoucher">
                    <option value="Attendance">Attendance</option>
                    <option value="Contra">Contra</option>
                    <option value="Credit Note">Credit Note</option>
                    <option value="Debit Note">Debit Note</option>
                    <option value="Delivery Note">Delivery Note</option>
                    <option value="Job Work In Order">Job Work In Order</option>
                    <option value="Job Work Out Order">Job Work Out Order</option>
                    <option value="Journal">Journal</option>
                    <option value="Material In">Material In</option>
                    <option value="Material Out">Material Out</option>
                    <option value="Memorandum">Memorandum</option>
                    <option value="Payment">Payment</option>
                    <option value="Payroll">Payroll</option>
                    <option value="Physical Stock">Physical Stock</option>
                    <option value="Purchase">Purchase</option>
                    <option value="Purchase Order">Purchase Order</option>
                    <option value="Receipt">Receipt</option>
                    <option value="Receipt Note">Receipt Note</option>
                    <option value="Rejections In">Rejections In</option>
                    <option value="Rejections Out">Rejections Out</option>
                    <option value="Reversing Journal">Reversing Journal</option>
                    <option value="Sales">Sales</option>
                    <option value="Sales Order">Sales Order</option>
                    <option value="Stock Journal">Stock Journal</option>
                  </select>
              </div>

              <div className='input-grp' id='abbreviation'>
                <label className='mr-[235px]' htmlFor="abbreviation">Abbreviation</label>
                : <input className=' h-5 focus:bg-[#F8D082] ' type="text" id='abbreviation' name='abbreviation' required />
              </div>
              
              <div className='input-grp flex justify-evenly items-center pb-3 border-b border-[#ccc]' id='activateThisVoucherType'>
                <label className='mr-[155px]' htmlFor="activateThisVoucherType">Activate this voucher type</label>
                {/* : <input className=' h-5 focus:bg-[#F8D082] ' type="text" id='activateThisVoucherType' name='activateThisVoucherType' required /> */}
                 : <select className='w-40 h-5 focus:bg-[#F8D082]' name="activateThisVoucherType" id="activateThisVoucherType">
                  <option  value="Yes">Yes</option>
                  <option  value="No">No</option>
                </select>
              </div>
              
              


              <div className='input-grp' id='methodOfVoucherNumbering'>
                <label className='mr-[122px]' htmlFor="methodOfVoucherNumbering">Method of voucher numbering</label>
                {/* : <input className=' h-5 focus:bg-[#F8D082] ' type="text" id='methodOfVoucherNumbering' name='methodOfVoucherNumbering' required /> */}
                : <select className='w-40 h-5 focus:bg-[#F8D082]' name="methodOfVoucherNumbering" id="methodOfVoucherNumbering">
                  <option  value="Automatic">Automatic</option>
                  <option  value="Manual">Manual</option>
                </select>
              </div>

              <div className='input-grp' id='preventCreateDuplicateVoucherNo'>
                <label className='mr-[70px]' htmlFor="preventCreateDuplicateVoucherNo">Prevent creating duplicate voucher nos.</label>
                : <input className='h-5 focus:bg-[#F8D082] ' type="text" id='preventCreateDuplicateVoucherNo' name='preventCreateDuplicateVoucherNo' required />
              </div>

              <div className='input-grp' id='setOrAlterAdditionalNumberingDetails'>
                <label className='mr-[77px]' htmlFor="setOrAlterAdditionalNumberingDetails">Set/Alter ddditional numbering details</label>
                {/* :<input className='h-5 focus:bg-[#F8D082] ' type="text" id='setOrAlterAdditionalNumberingDetails' name='setOrAlterAdditionalNumberingDetails' required /> */}
                : <select className='w-40 h-5 focus:bg-[#F8D082]' name="setOrAlterAdditionalNumberingDetails" id="setOrAlterAdditionalNumberingDetails">
                  <option  value="Yes">Yes</option>
                  <option  value="No">No</option>
                </select>
              </div>

              <div className='input-grp pb-2 border-b border-[#ccc]' id='showUnusedVoucherNumbersInTransactions'>
                <label className='mr-[59px]' htmlFor="showUnusedVoucherNumbersInTransactions">Show unused vch nos. in transactions for <br />Retain original voucher no. behaviour</label>
                {/* : <input className=' h-5 focus:bg-[#F8D082] ' type="text" id='showUnusedVoucherNumbersInTransactions' name='showUnusedVoucherNumbersInTransactions' required /> */}
                : <select className='w-40 h-5 focus:bg-[#F8D082]' name="showUnusedVoucherNumbersInTransactions" id="showUnusedVoucherNumbersInTransactions">
                  <option  value="Yes">Yes</option>
                  <option  value="No">No</option>
                </select>
              </div>

              

              <div className='input-grp' id='useEffectiveDatesForVouchers'>
                <label className='mr-[117px]' htmlFor="useEffectiveDatesForVouchers">Use effective dates for vouchers</label>
                {/* : <input className=' h-5 focus:bg-[#F8D082] ' type="text" id='useEffectiveDatesForVouchers' name='useEffectiveDatesForVouchers' required /> */}
                : <select className='w-40 h-5 focus:bg-[#F8D082]' name="useEffectiveDatesForVouchers" id="useEffectiveDatesForVouchers">
                  <option  value="Yes">Yes</option>
                  <option  value="No">No</option>
                </select>
              </div>

              <div className='input-grp' id='allowZeroValuesTransactions'>
                <label className='mr-[123px]' htmlFor="allowZeroValuesTransactions">Allow zero-valued transactions</label>
                {/* : <input className='h-5 focus:bg-[#F8D082] ' type="text" id='allowZeroValuesTransactions' name='allowZeroValuesTransactions' required /> */}
                : <select className='w-40 h-5 focus:bg-[#F8D082]' name="allowZeroValuesTransactions" id="allowZeroValuesTransactions">
                  <option  value="Yes">Yes</option>
                  <option  value="No">No</option>
                </select>
              </div>

              <div className='input-grp' id='makeThisVoucherTypeAsOptionalByDefault'>
                <label className='mr-[22px]' htmlFor="makeThisVoucherTypeAsOptionalByDefault">Make this voucher type as 'Optional' by default</label>
                {/* : <input className='h-5 focus:bg-[#F8D082] ' type="text" id='makeThisVoucherTypeAsOptionalByDefault' name='makeThisVoucherTypeAsOptionalByDefault' required /> */}
                : <select className='w-40 h-5 focus:bg-[#F8D082]' name="makeThisVoucherTypeAsOptionalByDefault" id="makeThisVoucherTypeAsOptionalByDefault">
                  <option  value="Yes">Yes</option>
                  <option  value="No">No</option>
                </select>
              </div>

              <div className='input-grp' id='allowNarrationInVoucher'>
                <label className='mr-[150px]' htmlFor="allowNarrationInVoucher">Allow narration in voucher</label>
                {/* : <input className='h-5 focus:bg-[#F8D082] ' type="text" id='allowNarrationInVoucher' name='allowNarrationInVoucher' required /> */}
                : <select className='w-40 h-5 focus:bg-[#F8D082]' name="allowNarrationInVoucher" id="allowNarrationInVoucher">
                  <option  value="Yes">Yes</option>
                  <option  value="No">No</option>
                </select>
              </div>

              <div className='input-grp' id='provideNarrationsForEachLedgerInVoucher'>
                <label className='mr-[35px]' htmlFor="provideNarrationsForEachLedgerInVoucher">Provide narrations for each ledger in voucher</label>
                {/* : <input className=' h-5 focus:bg-[#F8D082] ' type="text" id='provideNarrationsForEachLedgerInVoucher' name='provideNarrationsForEachLedgerInVoucher' required /> */}
                : <select className='w-40 h-5 focus:bg-[#F8D082]' name="provideNarrationsForEachLedgerInVoucher" id="provideNarrationsForEachLedgerInVoucher">
                  <option  value="Yes">Yes</option>
                  <option  value="No">No</option>
                </select>
              </div>

              <div className='input-grp' id='useAsManufacturingJournal'>
                <label className='mr-[121px]' htmlFor="useAsManufacturingJournal">Use as a manufacturing journal</label>
                {/* : <input className='wh-5 focus:bg-[#F8D082] ' type="text" id='useAsManufacturingJournal' name='useAsManufacturingJournal' required /> */}
                : <select className='w-40 h-5 focus:bg-[#F8D082]' name="useAsManufacturingJournal" id="useAsManufacturingJournal">
                  <option  value="Yes">Yes</option>
                  <option  value="No">No</option>
                </select>
              </div>

              <div className='input-grp' id='trackAdditionalCoastsForPurchases'>
                <label className='mr-[94px]' htmlFor="trackAdditionalCoastsForPurchases">Track additional costs for purchases</label>
                {/* : <input className='h-5 focus:bg-[#F8D082] ' type="text" id='trackAdditionalCoastsForPurchases' name='trackAdditionalCoastsForPurchases' required /> */}
                : <select className='w-40 h-5 focus:bg-[#F8D082]' name="trackAdditionalCoastsForPurchases" id="trackAdditionalCoastsForPurchases">
                  <option  value="Yes">Yes</option>
                  <option  value="No">No</option>
                </select>
              </div>

              <div className='input-grp' id='useForJobWork'>
                <label className='mr-[210px]' htmlFor="useForJobWork">Use for job work</label>
                {/* : <input className='h-5 focus:bg-[#F8D082] ' type="text" id='useForJobWork' name='useForJobWork' required /> */}
                : <select className='w-40 h-5 focus:bg-[#F8D082]' name="useForJobWork" id="useForJobWork">
                  <option  value="Yes">Yes</option>
                  <option  value="No">No</option>
                </select>
              </div>

              <div className='input-grp' id='enableDefaultAccountingAllocations'>
                <label className='mr-[81px]' htmlFor="enableDefaultAccountingAllocations">Enable default accounting allocations</label>
                {/* : <input className='h-5 focus:bg-[#F8D082] ' type="text" id='enableDefaultAccountingAllocations' name='enableDefaultAccountingAllocations' required /> */}
                : <select className='w-40 h-5 focus:bg-[#F8D082]' name="enableDefaultAccountingAllocations" id="enableDefaultAccountingAllocations">
                  <option  value="Yes">Yes</option>
                  <option  value="No">No</option>
                </select>
              </div>

              <div className='input-grp' id='whatsappVoucherAfterSaving'>
                <label className='mr-[120px]' htmlFor="whatsappVoucherAfterSaving">Whatsapp voucher after saving</label>
                : <input className=' h-5 focus:bg-[#F8D082] ' type="text" id='whatsappVoucherAfterSaving' name='whatsappVoucherAfterSaving' />
              </div>
            </div>

            <div className='printing w-[390px] p-2 border-r border-[#ccc]'>

              <div className=' mt-2 text-center' id='heading'>
                <label className='border-b' htmlFor="">Printing</label>
              </div>

              <div className='input-grp' id='printVoucherAfterSaving'>
                <label className='mr-[81px]' for="printVoucherAfterSaving">Print voucher after saving</label>
                : <input className='w-32 h-5 focus:bg-[#F8D082] ' type="text" id="printVoucherAfterSaving" name="printVoucherAfterSaving" required value="No" />
              </div>

              <div className='input-grp' id='useForPosInvoicing'>
                <label className='mr-[104px]' for="useForPosInvoicing">Use for POS invoicing</label>
                : <input className='w-32 h-5 focus:bg-[#F8D082] ' type="text" id="useForPosInvoicing" name="useForPosInvoicing" required autocomplete="off" />
              </div>

              <div className='input-grp' id='defaultBank'>
                <label className='mr-[158px]' for="defaultBank">Default bank </label>
                : <input className='w-32 h-5 focus:bg-[#F8D082] ' type="text" id="defaultBank" name="defaultBank" required value="&diams; Not Applicable" />
              </div>

              <div className='input-grp' id='defaultJurisdiction'>
                <label className='mr-[120px]' for="defaultJurisdiction">Default jurisdiction </label>
                : <input className='w-32 h-5 focus:bg-[#F8D082] ' type="text" id="defaultJurisdiction" name="defaultJurisdiction" required autocomplete="off" />
              </div>

              <div className='input-grp' id='defaultTitleToPrint'>
                <label className='mr-[114px]' for="defaultTitleToPrint">Default title to print </label>
                : <input className='w-32 h-5 focus:bg-[#F8D082] ' type="text" id="defaultTitleToPrint" name="defaultTitleToPrint" required autocomplete="off" />
              </div>

              <div className='input-grp' id='setOrAlterDeclaration'>
                <label className='mr-[107px]' for="setOrAlterDeclaration">Set/Alter declaration </label>
                : <input className='w-32 h-5 focus:bg-[#F8D082] ' type="text" id="setOrAlterDeclaration" name="setOrAlterDeclaration" required value="No" />
              </div>

              <div className='input-grp' id='printFormalReceiptAfterSaving'>
                <label className='mr-[40px]' for="printFormalReceiptAfterSaving">Print formal receipt after saving </label>
                : <input className='w-32 h-5 focus:bg-[#F8D082] ' type="text" id="printFormalReceiptAfterSaving" name="printFormalReceiptAfterSaving" required value="No" />
              </div>
          

            </div>


            <div className='nameOfClass w-[250px]'>

              <div className='mt-2' id='heading'>
                <label className='border-b ml-16' htmlFor="">Name of Class</label>
              </div>
              <div className="input-grp " id='nameOfClass'>
                  <input className='w-40 h-5 focus:bg-[#F8D082] mx-auto' type="text" id="nameOfClass" name="nameOfClass" required autocomplete="off" />
              </div>
            </div>

          </div>

          <input className='px-5 py-1 bg-slate-800 cursor-pointer text-white' type="submit" value="A: Accept"  />

        </form>
      </div>



    </div>
  )
}

export default VoucherTypeCreate