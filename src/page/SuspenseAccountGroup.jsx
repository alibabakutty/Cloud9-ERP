import React from 'react'

const SuspenseAccountGroup = () => {
  return (
    <div>
        <div class="stock-group">
        <div class="master-creation">
            <p>Suspense A/c Group</p>
        </div>

        <div class="content">
            <div class="left-part">
                <form id="myForm" action="addSuspenseAccount" method="post" onsubmit="return confirmSubmission();">
                    
                    <div class="input-grp">
                        <label for="groupName">Name </label>
                        :<input type="text" id="groupName" name="groupName" required value="Suspense A/c" />
                    </div>

                    <div class="input-grp">
                        <label for="groupAlias">Alias </label>
                        :<input type="text" id="groupAlias" name="groupAlias" required autocomplete="off" />
                    </div>

                    <div class="input-grp">
                        <label for="underGroup">Under </label>
                        :<input type="text" id="underGroup" name="underGroup" required value="&diams; Primary" />
                    </div>

                    <hr />

                    <div class="input-grp">
                        <label for="natureOfGroup">Nature of Group </label>
                        :<input type="text" id="natureOfGroup" name="natureOfGroup" required value="Liabilities" />
                    </div>

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
    </div>
  )
}

export default SuspenseAccountGroup