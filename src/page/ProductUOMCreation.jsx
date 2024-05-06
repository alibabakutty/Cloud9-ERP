import React from 'react'

const ProductUOMCreation = () => {
  return (
    <div>

<div class="stock-group">
        <div class="master-creation">
            <p>Unit Creation</p>
        </div>

        <div class="content">
            <div class="left-part">
                <form id="myForm" action="addUnitVariables" method="post" onsubmit="return confirmSubmission();">
                    <div class="input-grp">
                        <label for="unitType">Type </label>
                        :<input type="text" id="unitType" name="unitType" required value="Simple"  />
                    </div>

                    <div class="input-grp">
                        <label for="unitSymbol">Symbol </label>
                        :<input type="text" id="unitSymbol" name="unitSymbol" required autocomplete="off" />
                    </div>

                    <div class="input-grp">
                        <label for="unitFormalName">Formal Name </label>
                        :<input type="text" id="unitFormalName" name="unitFormalName" required autocomplete="off" />
                    </div>

                    <div class="input-grp">
                        <label for="unitQuantityCode">Unit Quantity Code (UQC) </label>
                        <select id="unitQuantityCode" name="unitQuantityCode" required>
                            <option value="Not Applicable">&diams; Not Applicable</option>
                            <option value="BAG-BAGS">BAG-BAGS</option>
                            <option value="BAL-BALE">BAL-BALE</option>
                            <option value="BDL-BUNDLES">BDL-BUNDLES</option>
                            <option value="BKL-BUCKLES">BKL-BUCKLES</option>
                            <option value="BOU-BILLION OF UNITS">BOU-BILLION OF UNITS</option>
                            <option value="BOX-BOX">BOX-BOX</option>
                            <option value="BTL-BOTTLES">BTL-BOTTLES</option>
                            <option value="BUN-BUNCHES">BUN-BUNCHES</option>
                            <option value="CAN-CANS">CAN-CANS</option>
                            <option value="CBM-CUBIC METERS">CBM-CUBIC METERS</option>
                            <option value="CCM-CUBIC CENTIMETERS">CCM-CUBIC CENTIMETERS</option>
                            <option value="CMS-CENTIMETERS">CMS-CENTIMETERS</option>
                            <option value="CTN-CARTONS">CTN-CARTONS</option>
                            <option value="DOZ-DOZENS">DOZ-DOZENS</option>
                            <option value="DRM-DRUMS">DRM-DRUMS</option>
                            <option value="GGK-GREAT GROSS">GGK-GREAT GROSS</option>
                            <option value="GMS-GRAMMES">GMS-GRAMMES</option>
                            <option value="GRS-GROSS">GRS-GROSS</option>
                            <option value="GYD-GROSS YARDS">GYD-GROSS YARDS</option>
                            <option value="KGS-KILOGRAMS">KGS-KILOGRAMS</option>
                            <option value="KLR-KILOLITRE">KLR-KILOLITRE</option>
                            <option value="KME-KILOMETRE">KME-KILOMETRE</option>
                            <option value="LTR-LITRES">LTR-LITRES</option>
                            <option value="MLT-MILILITRE">MLT-MILILITRE</option>
                            <option value="MTR-METERS">MTR-METERS</option>
                            <option value="MTS-METRIC TON">MTS-METRIC TON</option>
                            <option value="NOS-NUMBERS">NOS-NUMBERS</option>
                            <option value="OTH-OTHERS">OTH-OTHERS</option>
                            <option value="PAC-PACKS">PAC-PACKS</option>
                            <option value="PCS-PIECES">PCS-PIECES</option>
                            <option value="PRS-PAIRS">PRS-PAIRS</option>
                            <option value="QTL-QUNITAL">QTL-QUNITAL</option>
                            <option value="ROL-ROLLS">ROL-ROLLS</option>
                            <option value="SET-SETS">SET-SETS</option>
                            <option value="SQF-SQUARE FEET">SQF-SQUARE FEET</option>
                            <option value="SQM-SQUARE METERS">SQM-SQUARE METERS</option>
                            <option value="SQY-SQUARE YARDS">SQY-SQUARE YARDS</option>
                            <option value="TBS-TABLETS">TBS-TABLETS</option>
                            <option value="TGM-TEN GROSS">TGM-TEN GROSS</option>
                            <option value="THD-THOUSANDS">THD-THOUSANDS</option>
                            <option value="TON-TONNES">TON-TONNES</option>
                            <option value="TUB-TUBES">TUB-TUBES</option>
                            <option value="UGS-US GALLONS">UGS-US GALLONS</option>
                            <option value="UNIT-UNITS">UNIT-UNITS</option>
                            <option value="YDS-YARDS">YDS-YARDS</option>
                        </select>
                    </div>


                    <div class="input-grp">
                        <label for="unitNumberOfDecimalPlaces">Number of Decimal Places </label>
                        :<input type="number" id="unitNumberOfDecimalPlaces" name="unitNumberOfDecimalPlaces" required value="0" />
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

export default ProductUOMCreation