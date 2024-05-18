package com.example.TallyNewErp.service.impl;

import com.example.TallyNewErp.dto.NewLedgerCreateDto;
import com.example.TallyNewErp.exception.ResourceNotFoundException;
import com.example.TallyNewErp.mapper.NewLedgerCreateMapper;
import com.example.TallyNewErp.model.NewLedgerCreate;
import com.example.TallyNewErp.repository.NewLedgerCreateDAO;
import com.example.TallyNewErp.service.NewLedgerCreateService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class NewLedgerCreateServiceImpl implements NewLedgerCreateService {

    @Autowired
    private NewLedgerCreateDAO newledgercreatedao;

    @Override
    public NewLedgerCreateDto createLedger(NewLedgerCreateDto newledgercreatedto) {

        // Validate the ledger object
        validateLedger(newledgercreatedto);

        // Check for duplicate entry
        if(newledgercreatedao.existsByLedgerName(newledgercreatedto.getLedgerName())){
            throw new DuplicateKeyException("Duplicate entry for unique field: " + newledgercreatedto.getLedgerName());
        }



        NewLedgerCreate newledgercreate = NewLedgerCreateMapper.mapToNewLedgerCreate(newledgercreatedto);

           NewLedgerCreate savedNewLedgerCreate = newledgercreatedao.save(newledgercreate);

        return NewLedgerCreateMapper.mapToNewLedgerCreateDto(savedNewLedgerCreate);
    }


    private void validateLedger(NewLedgerCreateDto newLedgerCreateDto){
        if(newLedgerCreateDto.getLedgerName() == null || newLedgerCreateDto.getLedgerName().isEmpty()){
            throw new IllegalArgumentException("Unique field cannot be empty");
        }
    }



    @Override
    public NewLedgerCreateDto getLedger(String ledgerName) {

        NewLedgerCreate newledgercreate = newledgercreatedao.findById(ledgerName).orElseThrow(() ->
                new ResourceNotFoundException("Ledger is not exists with this name:" + ledgerName));

        return NewLedgerCreateMapper.mapToNewLedgerCreateDto(newledgercreate);

    }

    @Override
    public List<NewLedgerCreateDto> getAllLedgerNames() {

        List<NewLedgerCreate> newLedgerCreate =  newledgercreatedao.findAll();
        return newLedgerCreate.stream().map(NewLedgerCreateMapper::mapToNewLedgerCreateDto).toList();
    }

    @Override
    public NewLedgerCreateDto updateLedger(String ledgerName, NewLedgerCreateDto updatedLedger) {

        NewLedgerCreate newLedgerCreate = newledgercreatedao.findById(ledgerName).orElseThrow(() -> new ResourceNotFoundException("Ledger is not exists with given name: " + ledgerName));

        newLedgerCreate.setLedgerName(updatedLedger.getLedgerName());
        newLedgerCreate.setTallySerialNo(updatedLedger.getTallySerialNo());
        newLedgerCreate.setAliasName(updatedLedger.getAliasName());
        newLedgerCreate.setUnderGroup(updatedLedger.getUnderGroup());
        newLedgerCreate.setSubUnder(updatedLedger.getSubUnder());
        newLedgerCreate.setTypeOfLedger(updatedLedger.getTypeOfLedger());
        newLedgerCreate.setMaintainBalancesBillByBill(updatedLedger.getMaintainBalancesBillByBill());
        newLedgerCreate.setDefaultCreditPeriod(updatedLedger.getDefaultCreditPeriod());
        newLedgerCreate.setCheckForCreditDaysDuringVoucherEntry(updatedLedger.getCheckForCreditDaysDuringVoucherEntry());
        newLedgerCreate.setTypeOfDutyOrTax(updatedLedger.getTypeOfDutyOrTax());
        newLedgerCreate.setCostsCentresAreApplicable(updatedLedger.getCostsCentresAreApplicable());
        newLedgerCreate.setPercentageOfCalculation(updatedLedger.getPercentageOfCalculation());
        newLedgerCreate.setOdLimit(updatedLedger.getOdLimit());
        newLedgerCreate.setIncludeInAssessableValueCalculation(updatedLedger.getIncludeInAssessableValueCalculation());
        newLedgerCreate.setGstApplicability(updatedLedger.getGstApplicability());
        newLedgerCreate.setHsnOrSacAndRelatedDetails(updatedLedger.getHsnOrSacAndRelatedDetails());
        newLedgerCreate.setSourceOfDetails(updatedLedger.getSourceOfDetails());
        newLedgerCreate.setHsnOrSac(updatedLedger.getHsnOrSac());
        newLedgerCreate.setHsnOrSacDescription(updatedLedger.getHsnOrSacDescription());
        newLedgerCreate.setClassification(updatedLedger.getClassification());
        newLedgerCreate.setGstRateDetails(updatedLedger.getGstRateDetails());
        newLedgerCreate.setTaxabilityType(updatedLedger.getTaxabilityType());
        newLedgerCreate.setNatureOfTransaction(updatedLedger.getNatureOfTransaction());
        newLedgerCreate.setIgstRate(updatedLedger.getIgstRate());
        newLedgerCreate.setCgstRate(updatedLedger.getCgstRate());
        newLedgerCreate.setUtgstRate(updatedLedger.getUtgstRate());
        newLedgerCreate.setTypeOfSupply(updatedLedger.getTypeOfSupply());
        newLedgerCreate.setAccountHoldersName(updatedLedger.getAccountHoldersName());
        newLedgerCreate.setAccountNumber(updatedLedger.getAccountNumber());
        newLedgerCreate.setIfscCode(updatedLedger.getIfscCode());
        newLedgerCreate.setSwiftCode(updatedLedger.getSwiftCode());
        newLedgerCreate.setBankName(updatedLedger.getBankName());
        newLedgerCreate.setBranchName(updatedLedger.getBranchName());
        newLedgerCreate.setAlterRangeForChequeBooks(updatedLedger.getAlterRangeForChequeBooks());
        newLedgerCreate.setEnableChequePrinting(updatedLedger.getEnableChequePrinting());
        newLedgerCreate.setAlterChequePrintingConfiguration(updatedLedger.getAlterChequePrintingConfiguration());
        newLedgerCreate.setContactPerson(updatedLedger.getContactPerson());
        newLedgerCreate.setContactPhoneNumber(updatedLedger.getContactPhoneNumber());
        newLedgerCreate.setMobileNumber(updatedLedger.getMobileNumber());
        newLedgerCreate.setEmail(updatedLedger.getEmail());
        newLedgerCreate.setMailingName(updatedLedger.getMailingName());
        newLedgerCreate.setAddressOne(updatedLedger.getAddressOne());
        newLedgerCreate.setAddressTwo(updatedLedger.getAddressTwo());
        newLedgerCreate.setAddressThree(updatedLedger.getAddressThree());
        newLedgerCreate.setAddressFour(updatedLedger.getAddressFour());
        newLedgerCreate.setAddressFive(updatedLedger.getAddressFive());
        newLedgerCreate.setStateName(updatedLedger.getStateName());
        newLedgerCreate.setCountryName(updatedLedger.getCountryName());
        newLedgerCreate.setPinCode(updatedLedger.getPinCode());
        newLedgerCreate.setProvideBankDetails(updatedLedger.getProvideBankDetails());
        newLedgerCreate.setPanOrItNumber(updatedLedger.getPanOrItNumber());
        newLedgerCreate.setRegistrationType(updatedLedger.getRegistrationType());
        newLedgerCreate.setGstOrUin(updatedLedger.getGstOrUin());
        newLedgerCreate.setSetOrAlterGstDetails(updatedLedger.getSetOrAlterGstDetails());
        newLedgerCreate.setOpeningBalance(updatedLedger.getOpeningBalance());

        NewLedgerCreate newLedgerCreateObj = newledgercreatedao.save(newLedgerCreate);

        return NewLedgerCreateMapper.mapToNewLedgerCreateDto(newLedgerCreateObj);
    }

    @Override
    public void deleteLedger(String ledgerName) {


        NewLedgerCreate newLedgerCreate = newledgercreatedao.findById(ledgerName).orElseThrow(
                () -> new ResourceNotFoundException("Ledger is not exists with given name: " + ledgerName)
        );

        newledgercreatedao.deleteById(ledgerName);
    }
}
