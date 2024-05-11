package com.example.TallyNewErp.controller;

import com.example.TallyNewErp.dto.NewLedgerCreateDto;
import com.example.TallyNewErp.service.NewLedgerCreateService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@CrossOrigin("http://localhost:3000")
@AllArgsConstructor
@RestController
@RequestMapping("/api/ledgerData")
public class TallyController {

    private NewLedgerCreateService newledgercreateservice;


    //Build ADD LedgerData REST API
    @PostMapping("/add")
    public ResponseEntity<NewLedgerCreateDto> createNewLedger(@RequestBody NewLedgerCreateDto newledgercreatedto){

        NewLedgerCreateDto savedNewLedgerCreate = newledgercreateservice.createLedger(newledgercreatedto);

        return new ResponseEntity<>(savedNewLedgerCreate, HttpStatus.CREATED);

    }

    //Build GET LedgerData REST API
    @GetMapping("{ledgerName}")
    public ResponseEntity<NewLedgerCreateDto> getDataByLedgerName(@PathVariable("ledgerName") String ledgerName){
        NewLedgerCreateDto newledgercreatedto = newledgercreateservice.getLedger(ledgerName);

        return ResponseEntity.ok(newledgercreatedto);
    }

    //Build GET All Ledger REST API
    @GetMapping
    public ResponseEntity<List<NewLedgerCreateDto>> getAllLedgers(){
        List<NewLedgerCreateDto> allLedger = newledgercreateservice.getAllLedgerNames();

        return ResponseEntity.ok(allLedger);
    }

    //Build UPDATE Ledger REST API
    @PutMapping("{ledgerName}")
    public ResponseEntity<NewLedgerCreateDto> updateLedger(@PathVariable("ledgerName") String ledgerName,@RequestBody NewLedgerCreateDto updatedLedger){

        NewLedgerCreateDto newLedgerCreateDto = newledgercreateservice.updateLedger(ledgerName, updatedLedger);

        return ResponseEntity.ok(newLedgerCreateDto);
    }

    //Build DELETE Ledger REST API
    @DeleteMapping("{ledgerName}")
    public ResponseEntity<String> deleteLedger(@PathVariable("ledgerName") String ledgerName){
        newledgercreateservice.deleteLedger(ledgerName);

        return ResponseEntity.ok("Ledger Deleted Successfully!.");
    }





}
