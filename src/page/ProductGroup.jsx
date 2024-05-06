import React from 'react'

const ProductGroup = () => {
  return (
    <div>


<div class="container">
        <div class="master-creation">
            <p>Product Group Creation</p>
        </div>

        <div class="content">
            <div class="left-part">
                <form id="myForm" action="addStockGroup" method="post" onsubmit="return confirmSubmission();">
                    <div class="input-grp">
                        <label for="stockGroupName">Name </label>
                        :<input type="text" id="stockGroupName" name="stockGroupName" required autocomplete="off" oninput="capitalizeFirstLetter(this)" />
                    </div>

                    <div class="input-grp">
                        <label for="stockGroupName">(alias) </label>
                        :<input type="text" id="stockGroupName" name="stockGroupName" required autocomplete="off" />
                    </div>

                    <div class="input-grp">
                        <label for="stockGroupParentName">Under </label>
                        :<input type="text" id="stockGroupParentName" name="stockGroupParentName" required value="&diams; Primary" />
                    </div>

                    <div class="input-grp">
                        <label for="stockGroupQuantityOfItems">Should Quantity of Items to be Added </label>
                        :<input type="text" id="stockGroupQuantityOfItems" name="stockGroupQuantityOfItems" required value="No"/>
                    </div>

                    <div class="input-grp">
                        <label for="">Statuory Details </label>
                    </div>

                    <div class="input-grp">
                        <label for="">HSN/SAC Related Details </label>
                    </div>

                    <div class="input-grp">
                        <label for="stockGroupHsnAndSacDetails">HSN/SAC Details </label>
                        :<input type="text" id="stockGroupHsnAndSacDetails" name="stockGroupHsnAndSacDetails" required value="As per Company/Stock Group" />
                    </div>

                    <div class="input-grp">
                        <label for="stockGroupHsnAndSacSourceOfDetails">Source Of Details </label>
                        :<input type="text" id="stockGroupHsnAndSacSourceOfDetails" name="stockGroupHsnAndSacSourceOfDetails" required value="Not Available" />
                    </div>

                    <div class="input-grp">
                        <label for="stockGroupHsnAndSac">HSN/SAC </label>
                        :<input type="number" id="stockGroupHsnAndSac" name="stockGroupHsnAndSac" required />
                    </div>

                    <div class="input-grp">
                        <label for="stockGroupDescribtion">Describtion </label>
                        :<input type="text" id="stockGroupDescribtion" name="stockGroupDescribtion" required autocomplete="off" />
                    </div>

                    <div class="input-grp">
                        <label for="">GST RATE & Related Details </label>
                    </div>

                    <div class="input-grp">
                        <label for="stockGroupGstRateDetails">GST RATE DETAILS </label>
                        :<input type="text" id="stockGroupGstRateDetails" name="stockGroupGstRateDetails" required value="As per Company/Stock Group" />
                    </div>

                    <div class="input-grp">
                        <label for="stockGroupGstSourceOfDetails">Source Of Details </label>
                        :<input type="text" name="stockGroupGstSourceOfDetails" id="stockGroupGstSourceOfDetails" required value="Not Available" />
                    </div>

                    <div class="input-grp">
                        <label for="stockGroupGstTaxabilityType">Taxability Type </label>
                        :<input type="text" id="stockGroupGstTaxabilityType" name="stockGroupGstTaxabilityType" required autocomplete="off" />
                    </div>

                    <div class="input-grp">
                        <label for="stockGroupIgstRate">IGST Rate </label>
                        :<input type="text" id="stockGroupIgstRate" name="stockGroupIgstRate" required value="0 %" />
                    </div>

                    <div class="input-grp">
                        <label for="stockGroupCgstRate">CGST Rate </label>
                        :<input type="text" id="stockGroupCgstRate" name="stockGroupCgstRate" required value="0 %" />
                    </div>

                    <div class="input-grp">
                        <label for="stockGroupSgstAndUtgstRate">SGST/UTGST Rate </label>
                        :<input type="text" id="stockGroupSgstAndUtgstRate" name="stockGroupSgstAndUtgstRate" required value="0 %" />
                    </div>

                    <div class="input-grp">
                        <label for="stockGroupCessValueType">Cess Valuation Type </label>
                        :<input type="text" id="stockGroupCessValueType" name="stockGroupCessValueType" required />
                    </div>

                    <div class="input-grp">
                        <label for="stockGroupCessRate">Cess Rate </label>
                        :<input type="text" id="stockGroupCessRate" name="stockGroupCessRate" required autocomplete="off" />
                    </div>

                    <div class="input-grp">
                        <label for="stockGroupApplicableForReverseCharge">Applicable for Reverse Charge </label>
                        :<input type="text" id="stockGroupApplicableForReverseCharge" name="stockGroupApplicableForReverseCharge" required autocomplete="off" />
                    </div>

                    <div class="input-grp">
                        <label for="stockGroupEligibleForInputTaxCredit">Eligible For Input Tax Credit </label>
                        :<input type="text" id="stockGroupEligibleForInputTaxCredit" name="stockGroupEligibleForInputTaxCredit" required autocomplete="off" />
                    </div>
                    
                    <input type="submit" value="Accept" onclick="showConfirmationModal(); return false;" />
                


                </form>
            </div>
            
            
        </div>

    </div>

    Modal
    <div id="confirmationModal" class="modal">
        Modal content
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

export default ProductGroup