package com.gmkseguros.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gmkseguros.model.Contacto;

@Repository
public interface ContactoRepository extends JpaRepository<Contacto, Long> {
}
