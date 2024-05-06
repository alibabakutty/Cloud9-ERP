import React from 'react'

const PhysicalStockVoucherCreate = () => {
  return (
    <div>

<div class="container">
        <div class="master-creation">
            <p>Physical Stock Voucher Creation</p>
        </div>

        <div class="content">
            <form id="myForm" action="addPhysicalStock" method="post" onsubmit="return confirmSubmission();">
                    
                <div class="left-part">
                    <div class="input-grp">
                        <label for="voucherName">Name </label>
                        :<input type="text" id="voucherName" name="voucherName" required value="Physical Stock" />
                    </div>
    
                    <div class="input-grp">
                        <label for="voucherAlias">Alias </label>
                        :<input type="text" id="voucherAlias" name="voucherAlias" required autocomplete="off" />
                    </div>
                </div>

                <div class="right-part">
                    <div class="general">

                        <div class="input-grp">
                            <label id="heading" for="">General  </label>
                        </div>
                        
                        <div class="input-grp">
                            <label for="typeOfVoucher">Type Of Voucher </label>
                            :<input type="text" id="typeOfVoucher" name="typeOfVoucher" required value="Physical Stock" />
                        </div>
        
                        <div class="input-grp">
                            <label for="abbreviation">Abbreviation </label>
                            :<input type="text" id="abbreviation" name="abbreviation" required value="Phy Stk" />
                        </div>
        
                        <div class="input-grp">
                            <label for="activateThisVoucherType">Active This Voucher Type </label>
                            :<input type="text" id="activateThisVoucherType" name="activateThisVoucherType" required value="Yes" />
                        </div>

                        <hr />
        
                        <div class="input-grp">
                            <label for="methodOfVoucherNumbering">Method Of Voucher Numbering </label>
                            :<select name="methodOfVoucherNumbering" id="methodOfVoucherNumbering">
                                <option value="Automatic">Automatic</option>
                                <option value="Manual">Manual</option>
                            </select>
                        </div>
        
                        <div class="input-grp">
                            <label for="numberingBehaviourOnInsertionOrDeletion">Numbering Behaviour On Insertion Or Deletion </label>
                            :<input type="text" id="numberingBehaviourOnInsertionOrDeletion" name="numberingBehaviourOnInsertionOrDeletion" required value="Retain Original Voucher No." />
                        </div>
        
                        <div class="input-grp">
                            <label for="setOrAlterAdditionalNumberingDetails">Set/Alter additional numbering details </label>
                            :<input type="text" id="setOrAlterAdditionalNumberingDetails" name="setOrAlterAdditionalNumberingDetails" required value="No" />
                        </div>
        
                        <div class="input-grp">
                            <label for="showUnusedVoucherNumbersInTransactions">Show Unused Voucher Numbers In Transactions <br />Retain Original Voucher </label>
                            :<input type="text" id="showUnusedVoucherNumbersInTransactions" name="showUnusedVoucherNumbersInTransactions" required value="Yes" />
                        </div>

                        <hr />
        
                        <div class="input-grp">
                            <label for="useEffectiveDatesForVouchers">Use Effective Dates For Vouchers </label>
                            :<input type="text" id="useEffectiveDatesForVouchers" name="useEffectiveDatesForVouchers" required value="No" />
                        </div>
        
                        <div class="input-grp">
                            <label for="allowZeroValuesTransactions">Allow Zero Valued Transactions </label>
                            :<input type="text" id="allowZeroValuesTransactions" name="allowZeroValuesTransactions" required value="No" />
                        </div>
        
                        <div class="input-grp">
                            <label for="allowNarrationInVoucher">Allow Narration In Voucher </label>
                            :<input type="text" id="allowNarrationInVoucher" name="allowNarrationInVoucher" required value="Yes" />
                        </div>
        
                        <div class="input-grp">
                            <label for="trackAdditionalCostsForPurchases">Track Additional Costs for Purchases </label>
                            :<input type="text" id="trackAdditionalCostsForPurchases" name="trackAdditionalCostsForPurchases" required value="No" />
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
                
                <input type="submit" value="Accept" onclick="showConfirmationModal(); return false;" />
            


            </form>
            
            
        </div>

        
    </div>

    {/* Modal */}
    <div id="confirmationModal" class="modal">
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

export default PhysicalStockVoucherCreate