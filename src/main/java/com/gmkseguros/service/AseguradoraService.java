package com.gmkseguros.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gmkseguros.model.Aseguradora;
import com.gmkseguros.repository.AseguradoraRepository;

@Service
public class AseguradoraService {

    @Autowired
    private AseguradoraRepository aseguradoraRepository;

    public List<Aseguradora> obtenerTodas() {
        return aseguradoraRepository.findAll();
    }

    public Optional<Aseguradora> obtenerPorId(Long id) {
        return aseguradoraRepository.findById(id);
    }

    public Aseguradora guardarAseguradora(Aseguradora aseguradora) {
        return aseguradoraRepository.save(aseguradora);
    }

    public Aseguradora actualizarAseguradora(Long id, Aseguradora aseguradoraActualizada) {
        return aseguradoraRepository.findById(id).map(aseguradora -> {
            aseguradora.setNombre(aseguradoraActualizada.getNombre());
            aseguradora.setTelefono(aseguradoraActualizada.getTelefono());
            // Agrega más campos si es necesario
            return aseguradoraRepository.save(aseguradora);
        }).orElseThrow(() -> new RuntimeException("Aseguradora no encontrada con id: " + id));
    }

    public void eliminarAseguradora(Long id) {
        aseguradoraRepository.deleteById(id);
    }
}

