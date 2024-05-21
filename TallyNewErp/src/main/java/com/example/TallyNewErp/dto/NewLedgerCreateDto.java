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

    private  String subUnder;

    private String typeOfLedger;

    private String maintainBalancesBillByBill;

    private String defaultCreditPeriod;

    private String checkForCreditDaysDuringVoucherEntry;

    private String typeOfDutyOrTax;

    private  String costsCentresAreApplicable;

    private  Long percentageOfCalculation;

    private  String odLimit;

    private String includeInAssessableValueCalculation;

    private  String gstApplicability;

    private String hsnOrSacAndRelatedDetails;

    private String sourceOfDetails;

    private String hsnOrSac;

    private String hsnOrSacDescription;

    private String classification;

    private String gstRateDetails;

    private String taxabilityType;

    private String natureOfTransaction;

    private Long igstRate;

    private Long cgstRate;

    private Long utgstRate;

    private String typeOfSupply;

    private String accountHoldersName;

    private Long accountNumber;

    private String ifscCode;

    private String swiftCode;

    private String bankName;

    private String branchName;

    private String alterRangeForChequeBooks;

    private String enableChequePrinting;

    private String alterChequePrintingConfiguration;

    private String contactPerson;

    private Long contactPhoneNumber;

    private Long mobileNumber;

    private String email;

    private String mailingName;

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

    private Long openingBalance;

}
