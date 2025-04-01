package com.gmkseguros.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gmkseguros.model.PQRS;

@Repository
public interface PQRSRepository extends JpaRepository<PQRS, Long> {
}
