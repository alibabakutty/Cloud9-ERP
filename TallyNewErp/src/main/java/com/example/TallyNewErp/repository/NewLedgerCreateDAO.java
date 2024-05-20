package com.example.TallyNewErp.repository;

import com.example.TallyNewErp.model.NewLedgerCreate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewLedgerCreateDAO extends JpaRepository<NewLedgerCreate,String> {
    boolean existsByLedgerName(String ledgerName);
}
