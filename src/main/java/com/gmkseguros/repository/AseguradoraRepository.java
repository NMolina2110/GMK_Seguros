package com.gmkseguros.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gmkseguros.model.Aseguradora;

@Repository
public interface AseguradoraRepository extends JpaRepository<Aseguradora, Long> {
}
