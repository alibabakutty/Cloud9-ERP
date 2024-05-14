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
    private String openingBalance;



}
