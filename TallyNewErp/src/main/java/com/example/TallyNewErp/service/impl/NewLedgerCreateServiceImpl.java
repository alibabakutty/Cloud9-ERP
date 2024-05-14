package com.example.TallyNewErp.service.impl;

import com.example.TallyNewErp.dto.NewLedgerCreateDto;
import com.example.TallyNewErp.exception.ResourceNotFoundException;
import com.example.TallyNewErp.mapper.NewLedgerCreateMapper;
import com.example.TallyNewErp.model.NewLedgerCreate;
import com.example.TallyNewErp.repository.NewLedgerCreateDAO;
import com.example.TallyNewErp.service.NewLedgerCreateService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class NewLedgerCreateServiceImpl implements NewLedgerCreateService {

    private NewLedgerCreateDAO newledgercreatedao;

    @Override
    public NewLedgerCreateDto createLedger(NewLedgerCreateDto newledgercreatedto) {

        NewLedgerCreate newledgercreate = NewLedgerCreateMapper.mapToNewLedgerCreate(newledgercreatedto);

           NewLedgerCreate savedNewLedgerCreate = newledgercreatedao.save(newledgercreate);

        return NewLedgerCreateMapper.mapToNewLedgerCreateDto(savedNewLedgerCreate);
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
