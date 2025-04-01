package com.gmkseguros.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gmkseguros.model.PQRS; 
import com.gmkseguros.repository.PQRSRepository;

@Service
public class PQRSService {

    @Autowired
    private PQRSRepository pqrsRepository;

    public List<PQRS> obtenerTodas() {
        return pqrsRepository.findAll();
    }

    public Optional<PQRS> obtenerPorId(Long id) {
        return pqrsRepository.findById(id);
    }

    public PQRS guardarPQRS(PQRS pqrs) {
        return pqrsRepository.save(pqrs);
    }

    public void eliminarPQRS(Long id) {
        pqrsRepository.deleteById(id);
    }
}
