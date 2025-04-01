package com.gmkseguros.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gmkseguros.model.Seguro; 
import com.gmkseguros.repository.SeguroRepository; 

@Service
public class SeguroService {

    @Autowired
    private SeguroRepository seguroRepository;

    public List<Seguro> obtenerTodos() {
        return seguroRepository.findAll();
    }

    public Optional<Seguro> obtenerPorId(Long id) {
        return seguroRepository.findById(id);
    }

    public Seguro guardarSeguro(Seguro seguro) {
        return seguroRepository.save(seguro);
    }

    public void eliminarSeguro(Long id) {
        seguroRepository.deleteById(id);
    }
}
