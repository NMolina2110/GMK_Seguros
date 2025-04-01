package com.gmkseguros.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gmkseguros.model.Poliza; 
import com.gmkseguros.repository.PolizaRepository;

@Service
public class PolizaService {

    @Autowired
    private PolizaRepository polizaRepository;

    public List<Poliza> obtenerTodas() {
        return polizaRepository.findAll();
    }

    public Optional<Poliza> obtenerPorId(Long id) {
        return polizaRepository.findById(id);
    }

    public Poliza guardarPoliza(Poliza poliza) {
        return polizaRepository.save(poliza);
    }

    public void eliminarPoliza(Long id) {
        polizaRepository.deleteById(id);
    }
}
