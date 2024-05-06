import React from 'react'

const ProductCategories = () => {
  return (
    <div>

<div class="stock-group">
        <div class="master-creation">
            <p>Product Categories Creation</p>
        </div>

        <div class="content">
            <div class="left-part">
                <form id="myForm" action="addStockCategories" method="post" onsubmit="return confirmSubmission();">
                    <div class="input-grp">
                        <label for="stockCategoriesName">Name </label>
                        :<input type="text" id="stockCategoriesName" name="stockCategoriesName" required autocomplete="off" oninput="capitalizeFirstLetter(this)" />
                    </div>

                    <div class="input-grp">
                        <label for="stockCategoriesName">(alias) </label>
                        :<input type="text" id="stockCategoriesName" name="stockCategoriesName" required autocomplete="off" />
                    </div>

                    <div class="input-grp">
                        <label for="stockCategoriesParentName">Under </label>
                        :<input type="text" id="stockCategoriesParentName" name="stockCategoriesParentName" required value="&diams; Primary" />
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

export default ProductCategories