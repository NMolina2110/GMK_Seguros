package com.gmkseguros.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gmkseguros.model.Seguro;

@Repository
public interface SeguroRepository extends JpaRepository<Seguro, Long> {
}
