package com.example.TallyNewErp.mapper;

import com.example.TallyNewErp.dto.NewLedgerCreateDto;
import com.example.TallyNewErp.model.NewLedgerCreate;

public class NewLedgerCreateMapper {


//    this both functions works as dto for client and server


    public static NewLedgerCreateDto mapToNewLedgerCreateDto(NewLedgerCreate newledgercreate){
        return new NewLedgerCreateDto(
                newledgercreate.getLedgerName(),
                newledgercreate.getTallySerialNo(),
                newledgercreate.getAliasName(),
                newledgercreate.getUnderGroup(),
                newledgercreate.getAddressOne(),
                newledgercreate.getAddressTwo(),
                newledgercreate.getAddressThree(),
                newledgercreate.getAddressFour(),
                newledgercreate.getAddressFive(),
                newledgercreate.getStateName(),
                newledgercreate.getCountryName(),
                newledgercreate.getPinCode(),
                newledgercreate.getProvideBankDetails(),
                newledgercreate.getPanOrItNumber(),
                newledgercreate.getRegistrationType(),
                newledgercreate.getGstOrUin(),
                newledgercreate.getSetOrAlterGstDetails()
        );
    }


    public static NewLedgerCreate mapToNewLedgerCreate(NewLedgerCreateDto newledgercreatedto){

        return new NewLedgerCreate(
                newledgercreatedto.getLedgerName(),
                newledgercreatedto.getTallySerialNo(),
                newledgercreatedto.getAliasName(),
                newledgercreatedto.getUnderGroup(),
                newledgercreatedto.getAddressOne(),
                newledgercreatedto.getAddressTwo(),
                newledgercreatedto.getAddressThree(),
                newledgercreatedto.getAddressFour(),
                newledgercreatedto.getAddressFive(),
                newledgercreatedto.getStateName(),
                newledgercreatedto.getCountryName(),
                newledgercreatedto.getPinCode(),
                newledgercreatedto.getProvideBankDetails(),
                newledgercreatedto.getPanOrItNumber(),
                newledgercreatedto.getRegistrationType(),
                newledgercreatedto.getGstOrUin(),
                newledgercreatedto.getSetOrAlterGstDetails()
        );
    }
}
