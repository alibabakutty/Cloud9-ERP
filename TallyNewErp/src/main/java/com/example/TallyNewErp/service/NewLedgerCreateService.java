package com.example.TallyNewErp.service;

import com.example.TallyNewErp.dto.NewLedgerCreateDto;

import java.util.List;

public interface NewLedgerCreateService {

    NewLedgerCreateDto createLedger(NewLedgerCreateDto newledgercreatedto);

    NewLedgerCreateDto getLedger(String LedgerName);

    List<NewLedgerCreateDto> getAllLedgerNames();

    NewLedgerCreateDto updateLedger(String ledgerName, NewLedgerCreateDto updatedLedger);

    void deleteLedger(String ledgerName);

}
