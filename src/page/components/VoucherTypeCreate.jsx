import React from 'react'

const VoucherTypeCreate = () => {
  return (
    <div>


      <div className=' container w-[1200px] h-[400px] bg-[#fff] m-0 border border-none' >
        <form action="">

          <div className='top-part m-1'>

            <div className='top-grp'> 
              <label className='label-form mr-11' htmlFor="voucherName">Name</label>
              : <input className='input-form w-72 h-4 bg-[#F8D082] ' type="text" id='voucherName' name='voucherName' required /><br />
            </div>
            
            <div className='top-grp'>
              <label className='label-form mr-11' htmlFor="alias">(alias)</label>
              : <input className='input-form w-72 h-4 bg-[#F8D082]' type="text" id='alias' name='alias' required />
            </div>

            
            
          </div>

          <div className='middle'>
            <div className='general'>

              <div className='input-grp' id='heading'>
                <label htmlFor="">General</label>
              </div>

              <div className='input-grp' id='selectTypeOfVoucher'>
                <label htmlFor="selectTypeOfVoucher">Select type of voucher</label>
                : <input type="text" id='selectTypeOfVoucher' name='selectTypeOfVoucher' required /><br />
              </div>

              <div className='input-grp' id='abbreviation'>
                <label htmlFor="abbreviation">Abbreviation</label>
                : <input type="text" id='abbreviation' name='abbreviation' required /><br />
              </div>
              
              <div className='input-grp' id='activateThisVoucherType'>
                <label htmlFor="activateThisVoucherType">Activate this voucher type</label>
                : <input type="text" id='activateThisVoucherType' name='activateThisVoucherType' required /><br />
              </div>
              
              
              <hr />


              <div className='input-grp' id='methodOfVoucherNumbering'>
                <label htmlFor="methodOfVoucherNumbering">Method of voucher numbering</label>
                : <input type="text" id='methodOfVoucherNumbering' name='methodOfVoucherNumbering' required /><br />
              </div>

              <div className='input-grp' id='preventCreateDuplicateVoucherNo'>
                <label htmlFor="preventCreateDuplicateVoucherNo">Prevent creating duplicate voucher nos.</label>
                : <input type="text" id='preventCreateDuplicateVoucherNo' name='preventCreateDuplicateVoucherNo' required /><br />
              </div>

              <div className='input-grp' id='setOrAlterAdditionalNumberingDetails'>
                <label htmlFor="setOrAlterAdditionalNumberingDetails">Set/Alter ddditional numbering details</label>
                : <input type="text" id='setOrAlterAdditionalNumberingDetails' name='setOrAlterAdditionalNumberingDetails' required /><br />
              </div>

              <div className='input-grp' id='showUnusedVoucherNumbersInTransactions'>
                <label htmlFor="showUnusedVoucherNumbersInTransactions">Show unused vch nos. in transactions for <br />Retain original voucher no. behaviour</label>
                : <input type="text" id='showUnusedVoucherNumbersInTransactions' name='showUnusedVoucherNumbersInTransactions' required /><br />
              </div>

              <hr />

              <div className='input-grp' id='useEffectiveDatesForVouchers'>
                <label htmlFor="useEffectiveDatesForVouchers">Use effective dates for vouchers</label>
                : <input type="text" id='useEffectiveDatesForVouchers' name='useEffectiveDatesForVouchers' required /><br />
              </div>

              <div className='input-grp' id='allowZeroValuesTransactions'>
                <label htmlFor="allowZeroValuesTransactions">Allow zero-valued transactions</label>
                : <input type="text" id='allowZeroValuesTransactions' name='allowZeroValuesTransactions' required /><br />
              </div>

              <div className='input-grp' id='makeThisVoucherTypeAsOptionalByDefault'>
                <label htmlFor="makeThisVoucherTypeAsOptionalByDefault">Make this voucher type as 'Optional' by default</label>
                : <input type="text" id='makeThisVoucherTypeAsOptionalByDefault' name='makeThisVoucherTypeAsOptionalByDefault' required /><br />
              </div>

              <div className='input-grp' id='allowNarrationInVoucher'>
                <label htmlFor="allowNarrationInVoucher">Allow narration in voucher</label>
                : <input type="text" id='allowNarrationInVoucher' name='allowNarrationInVoucher' required /><br />
              </div>

              <div className='input-grp' id='provideNarrationsForEachLedgerInVoucher'>
                <label htmlFor="provideNarrationsForEachLedgerInVoucher">Provide narrations for each ledger in voucher</label>
                : <input type="text" id='provideNarrationsForEachLedgerInVoucher' name='provideNarrationsForEachLedgerInVoucher' required /><br />
              </div>

              <div className='input-grp' id='useAsManufacturingJournal'>
                <label htmlFor="useAsManufacturingJournal">Use as a manufacturing journal</label>
                : <input type="text" id='useAsManufacturingJournal' name='useAsManufacturingJournal' required /><br />
              </div>

              <div className='input-grp' id='trackAdditionalCoastsForPurchases'>
                <label htmlFor="trackAdditionalCoastsForPurchases">Track additional costs for purchases</label>
                : <input type="text" id='trackAdditionalCoastsForPurchases' name='trackAdditionalCoastsForPurchases' required /><br />
              </div>

              <div className='input-grp' id='useForJobWork'>
                <label htmlFor="useForJobWork">Use for job work</label>
                : <input type="text" id='useForJobWork' name='useForJobWork' required /><br />
              </div>

              <div className='input-grp' id='enableDefaultAccountingAllocations'>
                <label htmlFor="enableDefaultAccountingAllocations">Enable default accounting allocations</label>
                : <input type="text" id='enableDefaultAccountingAllocations' name='enableDefaultAccountingAllocations' required /><br />
              </div>

              <div className='input-grp' id='whatsappVoucherAfterSaving'>
                <label htmlFor="whatsappVoucherAfterSaving">Whatsapp voucher after saving</label>
                : <input type="text" id='whatsappVoucherAfterSaving' name='whatsappVoucherAfterSaving' />
              </div>
              
             
              
            </div>

            <div className='printing'>

              <div className='input-grp' id='heading'>
                <label htmlFor="">Printing</label>
              </div>

              <div className='input-grp' id='printVoucherAfterSaving'>
                <label for="printVoucherAfterSaving">Print voucher after saving</label>
                : <input type="text" id="printVoucherAfterSaving" name="printVoucherAfterSaving" required value="No" /><br />
              </div>

              <div className='input-grp' id='useForPosInvoicing'>
                <label for="useForPosInvoicing">Use for POS invoicing</label>
                : <input type="text" id="useForPosInvoicing" name="useForPosInvoicing" required autocomplete="off" /><br />
              </div>

              <div className='input-grp' id='defaultBank'>
                <label for="defaultBank">Default bank </label>
                : <input type="text" id="defaultBank" name="defaultBank" required value="&diams; Not Applicable" /><br />
              </div>

              <div className='input-grp' id='defaultJurisdiction'>
                <label for="defaultJurisdiction">Default jurisdiction </label>
                : <input type="text" id="defaultJurisdiction" name="defaultJurisdiction" required autocomplete="off" /><br />
              </div>

              <div className='input-grp' id='defaultTitleToPrint'>
                <label for="defaultTitleToPrint">Default title to print </label>
                : <input type="text" id="defaultTitleToPrint" name="defaultTitleToPrint" required autocomplete="off" /><br />
              </div>

              <div className='input-grp' id='setOrAlterDeclaration'>
                <label for="setOrAlterDeclaration">Set/Alter declaration </label>
                : <input type="text" id="setOrAlterDeclaration" name="setOrAlterDeclaration" required value="No" /><br />
              </div>

              <div className='input-grp' id='printFormalReceiptAfterSaving'>
                <label for="printFormalReceiptAfterSaving">Print formal receipt after saving </label>
                : <input type="text" id="printFormalReceiptAfterSaving" name="printFormalReceiptAfterSaving" required value="No" /><br />
              </div>
          

            </div>


            <div className='nameOfClass'>

              <div className='input-grp' id='heading'>
                <label htmlFor="">Name of Class</label>
              </div>
              <div class="input-grp" id='nameOfClass'>
                  <input type="text" id="nameOfClass" name="nameOfClass" required autocomplete="off" />
              </div>
            </div>

          </div>

          <input type="submit"  />

        </form>
      </div>



    </div>
  )
}

export default VoucherTypeCreate