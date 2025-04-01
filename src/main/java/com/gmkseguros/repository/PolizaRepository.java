package com.gmkseguros.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gmkseguros.model.Poliza;

@Repository
public interface PolizaRepository extends JpaRepository<Poliza, Long> {
}
