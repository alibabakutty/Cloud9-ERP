import React from 'react'

const ProductLocation = () => {
  return (
    <div>

<div class="stock-group">
        <div class="master-creation">
            <p>Location Creation</p>
        </div>

        <div class="content">
            <div class="left-part">
                <form id="myForm" action="addLocation" method="post" onsubmit="return confirmSubmission();">
                    <div class="input-grp">
                        <label for="locationName">Name </label>
                        :<input type="text" id="locationName" name="locationName" required autocomplete="off" oninput="capitalizeFirstLetter(this)" />
                    </div>

                    <div class="input-grp">
                        <label for="locationName">(alias) </label>
                        :<input type="text" id="locationName" name="locationName" required />
                    </div>

                    <div class="input-grp">
                        <label for="locationNameParent">Under </label>
                        :<input type="text" id="locationNameParent" name="locationNameParent" required value="&diams; Primary" />
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

export default ProductLocation