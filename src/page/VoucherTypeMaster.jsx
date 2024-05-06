import React from 'react'

const VoucherTypeMaster = () => {
  return (
    <div>
        <div class="container">
        <div class="left-part">

            
        </div>

        <hr class="vertical-line" />

        <div class="right-part">

            <div class="ledger-master">
        
                <h1>Voucher Type Master</h1>
                <div><p><a href="NewVoucherCreate.jsp">Create</a></p></div>
                <div><p><a href="DisplayListOfVoucherTypes.jsp">Display</a></p></div>
                <div><p><a href="AlterListOfVoucherTypes.jsp">Alter</a></p></div>
            </div>

            <div id="backButton"><a href="#">Back</a></div>


        </div>
    </div>
    </div>
  )
}

export default VoucherTypeMaster