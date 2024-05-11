package com.example.TallyNewErp.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class NewLedgerCreateDto {

    private String ledgerName;

    private String tallySerialNo;

    private String aliasName;

    private String underGroup;

    private String addressOne;

    private String addressTwo;

    private String addressThree;

    private String addressFour;

    private String addressFive;

    private String stateName;

    private String countryName;

    private Long pinCode;

    private String provideBankDetails;

    private String panOrItNumber;

    private String registrationType;

    private String gstOrUin;

    private String setOrAlterGstDetails;

    private String openingBalance;

}
