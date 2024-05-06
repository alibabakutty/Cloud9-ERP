import React from 'react'

const UnsecuredLoanGroups = () => { 

  return (
    <>
        <div class="stock-group">
            <div class="master-creation">
                <p>Unsecured Loans Group</p>
            </div>

            <div class="content">
                <div class="left-part">
                    <form id="myForm" action="addUnsecuredLoan" method="post" onsubmit="return confirmSubmission();">
                        
                        <div class="input-grp">
                            <label for="groupName">Name </label>
                            :<input type="text" id="groupName" name="groupName" required value="Unsecured Loans" />
                        </div>

                        <div class="input-grp">
                            <label for="groupAlias">Alias </label>
                            :<input type="text" id="groupAlias" name="groupAlias" required autocomplete="off" />
                        </div>

                        <div class="input-grp">
                            <label for="underGroup">Under </label>
                            :<input type="text" id="underGroup" name="underGroup" required value="Loans (Liability)" />
                        </div>

                        <hr />

                        <div class="input-grp">
                            <label for="groupBehavesLikeASubledger">Group Behaves Like a Sub-Ledger </label>
                            :<input type="text" id="groupBehavesLikeASubledger" name="groupBehavesLikeASubledger" required value="No" />
                        </div>

                        <div class="input-grp">
                            <label for="nettDebitOrCreditBalancesForReporting">Nett Debit/Credit Balances for Reporting </label>
                            :<input type="text" id="nettDebitOrCreditBalancesForReporting" name="nettDebitOrCreditBalancesForReporting" required value="No" />
                        </div>

                        <div class="input-grp">
                            <label for="usedForCalculation">Used for Calculation (for example: taxes, discounts) <br /> (for sales invoice entries) </label>
                            :<input type="text" id="usedForCalculation" name="usedForCalculation" required value="No" />
                        </div>

                        <div class="input-grp">
                            <label for="methodToAllocate">Method to Allocate When Used in Purchase Invoice </label>
                            :<input type="text" id="methodToAllocate" name="methodToAllocate" required value="&diams; Not Applicable" />
                        </div>

                        <div class="input-grp">
                            <label id="heading" for="">Statuory Details : </label>  
                        </div>

                        <div class="input-grp">
                            <label id="heading" for="">HSN/SAC & Related Details : </label>  
                        </div>

                        <div class="input-grp">
                            <label for="hsnOrSacDetails">HSN/SAC Details </label>
                            :<input type="text" id="hsnOrSacDetails" name="hsnOrSacDetails" required value="As Per Company/Group" />
                        </div>

                        <div class="input-grp">
                            <label for="sourceOfDetails">Source of Details </label>
                            :<input type="text" id="sourceOfDetails" name="sourceOfDetails" required value="Not Available" />
                        </div>

                        <div class="input-grp">
                            <label for="hsnOrSacDescribtion">HSN/SAC Describtion </label>
                            :<input type="text" id="hsnOrSacDescribtion" name="hsnOrSacDescribtion" required autocomplete="off" />
                        </div>

                        <div class="input-grp">
                            <label id="heading" for="">GST Rate & Related Details : </label>  
                        </div>

                        <div class="input-grp">
                            <label for="gstRateDetails">GST Rate Details </label>
                            :<input type="text" id="gstRateDetails" name="gstRateDetails" required value="As per Company/Group" />
                        </div>

                        <div class="input-grp">
                            <label for="sourceOfDetailss">Source of Details </label>
                            :<input type="text" id="sourceOfDetailss" name="sourceOfDetailss" required value="Not Available" />
                        </div>

                        <div class="input-grp">
                            <label for="taxabilityType">Taxability Type </label>
                            :<input type="text" id="taxabilityType" name="taxabilityType" required autocomplete="off" />
                        </div>

                        <div class="input-grp">
                            <label for="natureOfTransaction">Nature of Transaction </label>
                            :<input type="text" id="natureOfTransaction" name="natureOfTransaction" required value="&diams; System Inferred" />
                        </div>

                        <div class="input-grp">
                            <label for="igstRate">IGST Rate </label>
                            :<input type="text" id="igstRate" name="igstRate" required value="0 %" />
                        </div>

                        <div class="input-grp">
                            <label for="cgstRate">CGST Rate </label>
                            :<input type="text" id="cgstRate" name="cgstRate" required value="0 %" />
                        </div>

                        <div class="input-grp">
                            <label for="sgstAndUtgstRate">SGST & UTGST Rate </label>
                            :<input type="text" id="sgstAndUtgstRate" name="sgstAndUtgstRate" required value="0 %" />
                        </div>
                        
                        <input type="submit" value="Accept" onclick="showConfirmationModal(); return false;" />
                    


                    </form>
                </div>
                
                
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
        
    </>
  )
}

export default UnsecuredLoanGroups