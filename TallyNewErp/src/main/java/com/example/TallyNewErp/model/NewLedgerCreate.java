package com.example.TallyNewErp.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name="ledger")
public class NewLedgerCreate {


    @Id
    @Column(name = "ledger_name")
    private String ledgerName;

    @Column(name = "tally_serial_no", nullable = false, unique = true)
    private String tallySerialNo;

    @Column(name = "alias_name")
    private String aliasName;

    @Column(name = "under_group")
    private String underGroup;

    @Column(name = "sub_under")
    private  String subUnder;

    @Column(name = "type_of_ledger")
    private String typeOfLedger;

    @Column(name = "maintain_balances_bill_by_bill")
    private String maintainBalancesBillByBill;

    @Column(name = "default_credit_period")
    private String defaultCreditPeriod;

    @Column(name = "check_for_credit_days_during_voucher_entry")
    private String checkForCreditDaysDuringVoucherEntry;

    @Column(name = "type_of_duty_or_tax")
    private String typeOfDutyOrTax;

    @Column(name = "costs_centres_are_applicable")
    private  String costsCentresAreApplicable;

    @Column(name = "percentage_of_calculation")
    private  Long percentageOfCalculation;

    @Column(name = "od_limit")
    private  String odLimit;

    @Column(name = "include_in_assessable_value_calculation")
    private String includeInAssessableValueCalculation;

    @Column(name = "gst_applicability")
    private  String gstApplicability;

    @Column(name = "hsn_or_sac_and_related_details")
    private String hsnOrSacAndRelatedDetails;

    @Column(name = "source_of_details")
    private String sourceOfDetails;

    @Column(name = "hsn_or_sac")
    private String hsnOrSac;

    @Column(name = "hsn_or_sac_description")
    private String hsnOrSacDescription;

    @Column(name = "classification")
    private String classification;

    @Column(name = "gst_rate_details")
    private String gstRateDetails;

    @Column(name = "taxability_type")
    private String taxabilityType;

    @Column(name = "nature_of_transaction")
    private String natureOfTransaction;

    @Column(name = "igst_rate")
    private Long igstRate;

    @Column(name = "cgst_rate")
    private Long cgstRate;

    @Column(name = "utgst_rate")
    private Long utgstRate;

    @Column(name = "type_of_supply")
    private String typeOfSupply;

    @Column(name = "account_holders_name")
    private String accountHoldersName;

    @Column(name = "account_Number")
    private Long accountNumber;

    @Column(name = "ifsc_code")
    private String ifscCode;

    @Column(name = "swift_code")
    private String swiftCode;

    @Column(name = "bank_name")
    private String bankName;

    @Column(name = "branch_name")
    private String branchName;

    @Column(name = "alter_range_for_cheque_books")
    private String alterRangeForChequeBooks;

    @Column(name = "enable_cheque_printing")
    private String enableChequePrinting;

    @Column(name = "alter_cheque_printing_configuration")
    private String alterChequePrintingConfiguration;

    @Column(name = "contact_person")
    private String contactPerson;

    @Column(name = "contact_phone_number")
    private Long contactPhoneNumber;

    @Column(name = "mobile_number")
    private Long mobileNumber;

    @Column(name = "email")
    private String email;

    @Column(name = "mailing_name")
    private String mailingName;

    @Column(name = "address_one")
    private String addressOne;

    @Column(name = "address_two")
    private String addressTwo;

    @Column(name = "address_three")
    private String addressThree;

    @Column(name = "address_four")
    private String addressFour;

    @Column(name = "address_five")
    private String addressFive;


    @Column(name = "state_name")
    private String stateName;

    @Column(name = "country_name")
    private String countryName;

    @Column(name = "pin_code")
    private Long pinCode;

    @Column(name = "provide_bank_details")
    private String provideBankDetails;

    @Column(name = "pan_or_it_number")
    private String panOrItNumber;

    @Column(name = "registration_type")
    private String registrationType;

    @Column(name = "gst_or_uin")
    private String gstOrUin;

    @Column(name = "set_or_alter_gst_details")
    private String setOrAlterGstDetails;

    @Column(name = "opening_balance")
    private Long openingBalance;



}
