import React from 'react'

const ProductItemCreation = () => {
  return (
    <div>

<div class="container">
        <div class="master-creation">
            <p>Product Items</p>
        </div>

        <div class="content">
            <form id="myForm" action="addStockItem" method="post" onsubmit="return confirmSubmission();">
               <div class="left-part">
                    <div class="input-grp">
                        <label for="stockItemName">Name  </label>
                        :<input type="text" id="stockItemName" name="stockItemName" required autocomplete="off" oninput="capitalizeFirstLetter(this)" />
                    </div>

                    <div class="input-grp">
                        <label for="stockItemName">(alias)  </label>
                        :<input type="text" id="stockItemName" name="stockItemName" required autocomplete="off" />
                    </div>
               </div>

                <div class="right-part">
                    <div class="general">
                        <div class="input-grp">
                            <label for="stockItemParentName">Under  </label>
                            :<input type="text" id="stockItemParentName" name="stockItemParentName" required value="&diams; Primary" />
                        </div>
        
                        <div class="input-grp">
                            <label for="stockItemUnits">Units  </label>
                            :<input type="text" id="stockItemUnits" name="stockItemUnits" required value="&diams; Not Applicable" />
                        </div>

                        <div class="input-grp">
                            <label id="heading" for="">Statuory Details </label>
                        </div>
        
                        <div class="input-grp">
                            <label for="stockItemHsnAndSacDetails">GST Applicability : </label>
                            <input type="text" id="stockItemHsnAndSacDetails" name="stockItemHsnAndSacDetails" required value="&diams; Applicable" />
                        </div>

                        <div class="input-grp">
                            <label id="heading" for="">HSN/SAC Related Details </label>
                        </div>
        
                        <div class="input-grp">
                            <label for="stockItemHsnAndSacDetails">HSN/SAC Details : </label>
                            <input type="text" id="stockItemHsnAndSacDetails" name="stockItemHsnAndSacDetails" required value="As per Company/Stock Group" />
                        </div>
        
                        <div class="input-grp">
                            <label for="stockItemHsnAndSacSourceOfDetails">Source Of Details : </label>
                            <input type="text" id="stockItemHsnAndSacSourceOfDetails" name="stockItemHsnAndSacSourceOfDetails" required value="Not Available" />
                        </div>
        
                        <div class="input-grp">
                            <label for="stockItemHsnAndSac">HSN/SAC : </label>
                            <input type="number" id="stockItemHsnAndSac" name="stockItemHsnAndSac" required autocomplete="off" />
                        </div>
        
                        <div class="input-grp">
                            <label for="stockItemDescribtion">Describtion : </label>
                            <input type="text" id="stockItemDescribtion" name="stockItemDescribtion" required autocomplete="off" />
                        </div>
        
                        
                    </div>

                    <div class="printing">

                        
        
                        <div class="input-grp">
                            <label id="heading" for="">GST Rate & Related Details </label>
                        </div>
        
                        <div class="input-grp">
                            <label for="stockItemGstRateDetails">GST RATE DETAILS : </label>
                            <input type="text" id="stockItemGstRateDetails" name="stockItemGstRateDetails" required value="As per Company/Stock Group" />
                        </div>
        
                        <div class="input-grp">
                            <label for="stockItemGstSourceOfDetails">Source Of Details : </label>
                            <input type="text" name="stockItemGstSourceOfDetails" id="stockItemGstSourceOfDetails" required value="Not Available" />
                        </div>
        
                        <div class="input-grp">
                            <label for="stockItemGstTaxabilityType">Taxability Type : </label>
                            <input type="text" id="stockItemGstTaxabilityType" name="stockItemGstTaxabilityType" required autocomplete="off" />
                        </div>
        
                        <div class="input-grp">
                            <label for="stockItemIgstRate">IGST Rate : </label>
                            <input type="text" id="stockItemIgstRate" name="stockItemIgstRate" required value="0 %" />
                        </div>
        
                        <div class="input-grp">
                            <label for="stockItemCgstRate">CGST Rate : </label>
                            <input type="text" id="stockItemCgstRate" name="stockItemCgstRate" required value="0 %" />
                        </div>
        
                        <div class="input-grp">
                            <label for="stockItemSgstAndUtgstRate">SGST/UTGST Rate : </label>
                            <input type="text" id="stockItemSgstAndUtgstRate" name="stockItemSgstAndUtgstRate" required value="0 %" />
                        </div>

                        <div class="input-grp">
                            <label for="stockItemSgstAndUtgstRate">Type of Supply : </label>
                            <input type="text" id="stockItemSgstAndUtgstRate" name="stockItemSgstAndUtgstRate" required value="Goods" />
                        </div>

                        <div class="input-grp">
                            <label for="stockItemSgstAndUtgstRate">Is inclusive of Duties and Taxes : </label>
                            <input type="text" id="stockItemSgstAndUtgstRate" name="stockItemSgstAndUtgstRate" required autocomplete="off" />
                        </div>

                        <div class="input-grp">
                            <label for="stockItemSgstAndUtgstRate">Rate of Duty (eg 5) : </label>
                            <input type="text" id="stockItemSgstAndUtgstRate" name="stockItemSgstAndUtgstRate" required autocomplete="off" />
                        </div>
        
                        <div class="input-grp">
                            <label for="stockItemCessValueType">Cess Valuation Type : </label>
                            <input type="text" id="stockItemCessValueType" name="stockItemCessValueType" required autocomplete="off" />
                        </div>
        
                        <div class="input-grp">
                            <label for="stockItemCessRate">Cess Rate : </label>
                            <input type="text" id="stockItemCessRate" name="stockItemCessRate" required autocomplete="off" />
                        </div>
        
                        <div class="input-grp">
                            <label for="stockItemApplicableForReverseCharge">Applicable for Reverse Charge : </label> 
                            <input type="text" id="stockItemApplicableForReverseCharge" name="stockItemApplicableForReverseCharge" required autocomplete="off" />
                        </div>
        
                        <div class="input-grp">
                            <label for="stockItemEligibleForInputTaxCredit">Eligible For Input Tax Credit :</label>
                            <input type="text" id="stockItemEligibleForInputTaxCredit" name="stockItemEligibleForInputTaxCredit" required autocomplete="off" />
                        </div>
        
                        <div class="input-grp">
                            <label for="stockItemGstApplicability">GST Applicability :</label>
                            <input type="text" id="stockItemGstApplicability" name="stockItemGstApplicability" required autocomplete="off" />
                        </div>
                    </div>
                </div>

                <div class="balance">
                    <label for="openingBalance">Opening Balance</label>
                        <input type="text" required value="1-Apr-24" />
                        <input type="number" />
                        <select id="stockGroupHsnAndSacDetails" name="stockGroupHsnAndSacDetails" required>
                            <option value="Cr">Cr</option>
                            <option value="Dr">Dr</option>
                        </select>
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

export default ProductItemCreation