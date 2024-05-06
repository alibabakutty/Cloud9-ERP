import React from 'react'

const SalesVoucherCreate = () => {
  return (
    <div>

<div class="container">
        <div class="master-creation">
            <p>Sales Voucher Creation</p>
        </div>

        <div class="content">
            
                <form id="myForm" action="addSales" method="post" onsubmit="return confirmSubmission();">

                    <div class="left-part">

                        <div class="input-grp">
                            <label for="voucherName">Name  </label>
                            :<input type="text" id="voucherName" name="voucherName" required value="Sales" />
                        </div>

                        <div class="input-grp">
                            <label for="voucherAlias">Alias  </label>
                            :<input type="text" id="voucherAlias" name="voucherAlias" required autocomplete="off" />
                        </div>

                    </div>

                <div class="right-part">

                    <div class="general">

                        <div class="input-grp">
                            <label id="heading" for="">General  </label>
                        </div>
                        

                        <div class="input-grp">
                            <label for="typeOfVoucher">Type Of Voucher  </label>
                            :<input type="text" id="typeOfVoucher" name="typeOfVoucher" required value="Sales" />
                        </div>

                        <div class="input-grp">
                            <label for="abbreviation">Abbreviation  </label>
                            :<input type="text" id="abbreviation" name="abbreviation" required value="Sale" />
                        </div>

                        <div class="input-grp">
                            <label for="activateThisVoucherType">Active This Voucher Type  </label>
                            :<input type="text" id="activateThisVoucherType" name="activateThisVoucherType" required value="Yes" />
                        </div>

                        <hr class="hr-2" />

                        <div class="input-grp">
                            <label for="methodOfVoucherNumbering">Method Of Voucher Numbering </label>
                            :<select name="methodOfVoucherNumbering" id="methodOfVoucherNumbering">
                                <option value="Automatic">Automatic</option>
                                <option value="Manual">Manual</option>
                            </select>
                        </div>

                        <div class="input-grp">
                            <label for="numberingBehaviourOnInsertionOrDeletion">Numbering Behaviour On Insertion Or Deletion  </label>
                            :<input type="text" id="numberingBehaviourOnInsertionOrDeletion" name="numberingBehaviourOnInsertionOrDeletion" required value="Retain Original Voucher No." />
                        </div>

                        <div class="input-grp">
                            <label for="setOrAlterAdditionalNumberingDetails">Set/Alter additional numbering details  </label>
                            :<input type="text" id="setOrAlterAdditionalNumberingDetails" name="setOrAlterAdditionalNumberingDetails" required value="No" />
                        </div>

                        <div class="input-grp">
                            <label for="showUnusedVoucherNumbersInTransactions">Show Unused Vch Nos. In Transactions for <br />Retain Original Voucher No. behavour </label>
                            :<input type="text" id="showUnusedVoucherNumbersInTransactions" name="showUnusedVoucherNumbersInTransactions" required value="Yes" />
                        </div>

                        <hr class="hr-2" />

                        <div class="input-grp">
                            <label for="useEffectiveDatesForVouchers">Use Effective Dates For Vouchers  </label>
                            :<input type="text" id="useEffectiveDatesForVouchers" name="useEffectiveDatesForVouchers" required value="No" />
                        </div>

                        <div class="input-grp">
                            <label for="allowZeroValuesTransactions">Allow Zero Valued Transactions  </label>
                            :<input type="text" id="allowZeroValuesTransactions" name="allowZeroValuesTransactions" required value="No" />
                        </div>

                        <div class="input-grp">
                            <label for="makeThisVoucherTypeAsOptionalByDefault">Make This Voucher Type As Optional By Default  </label>
                            :<input type="text" id="makeThisVoucherTypeAsOptionalByDefault" name="makeThisVoucherTypeAsOptionalByDefault" required value="No" />
                        </div>

                        <div class="input-grp">
                            <label for="allowNarrationInVoucher">Allow Narration In Voucher  </label>
                            :<input type="text" id="allowNarrationInVoucher" name="allowNarrationInVoucher" required value="Yes" />
                        </div>

                        <div class="input-grp">
                            <label for="provideNarrationsForEachLedgerInVoucher">Provide Narrations For Each Ledger In Voucher  </label>
                            :<input type="text" id="provideNarrationsForEachLedgerInVoucher" name="provideNarrationsForEachLedgerInVoucher" required value="No" />
                        </div>

                        <div class="input-grp">
                            <label for="enableDefaultAccountingAllocations">Enable Default Accounting Allocations  </label>
                            :<input type="text" id="enableDefaultAccountingAllocations" name="enableDefaultAccountingAllocations" required value="No" />
                        </div>

                        <div class="input-grp">
                            <label for="whatsappVoucherAfterSaving">Whatsapp Voucher After Saving </label>
                            :<input type="text" id="whatsappVoucherAfterSaving" name="whatsappVoucherAfterSaving" required value="No" />
                        </div>

                    </div>

                    <div class="printing">

                        <div class="input-grp">
                            <label id="heading" for="">Printing  </label>
                        </div>

                        <div class="input-grp">
                            <label for="printVoucherAfterSaving">Print Voucher After Saving </label>
                            :<input type="text" id="printVoucherAfterSaving" name="printVoucherAfterSaving" required value="No" />
                        </div>
    
                        
                        <div class="input-grp">
                            <label for="useForPosInvoicing">Use for POS Invoicing </label>
                            :<input type="text" id="useForPosInvoicing" name="useForPosInvoicing" required value="No" />
                        </div>
    
                        
                        <div class="input-grp">
                            <label for="defaultTitleToPrint">Default Title to Print </label>
                            :<input type="text" id="defaultTitleToPrint" name="defaultTitleToPrint" required autocomplete="off" />
                        </div>
    
                        
                        <div class="input-grp">
                            <label for="defaultBank">Default Bank </label>
                            :<input type="text" id="defaultBank" name="defaultBank" required value="Not Applicable" />
                        </div>
    
                        
                        <div class="input-grp">
                            <label for="defaultJurisdiction">Default Jurisdiction </label>
                            :<input type="text" id="defaultJurisdiction" name="defaultJurisdiction" required autocomplete="off"/>
                        </div>
    
                        
                        <div class="input-grp">
                            <label for="setOrAlterDeclaration">Set/Alter Declaration </label>
                            :<input type="text" id="setOrAlterDeclaration" name="setOrAlterDeclaration" required value="No" />
                        </div>

                    </div>

                    <div class="name-of-class">

                        <div class="input-grp">
                            <label id="heading" for="">Name of Class </label>
                        </div>

                        <div class="input-grp">
                            <input type="text" id="nameOfClass" name="nameOfClass" required autocomplete="off" />
                        </div>

                    </div>

                </div>


                    <input type="submit" value="A : Accept" onclick="showConfirmationModal(); return false;" />
                
                </form>
            </div>
            
           
        </div>

        
   

    

    

    {/* Modal */}
    <div id="confirmationModal" className="modal">
        {/* Modal content */}
        <div class="modal-content">
        <span class="close" onclick="hideConfirmationModal();">&times;</span>
        <p>Are you sure you want to submit?</p>
        <button onclick="hideConfirmationModal(); document.getElementById('myForm').submit();">Yes</button>
        <button onclick="hideConfirmationModal();">No</button>
    </div>   
    </div> 
    </div>
  )
}

export default SalesVoucherCreate