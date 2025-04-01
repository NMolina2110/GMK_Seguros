package com.gmkseguros.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gmkseguros.model.Aseguradora;
import com.gmkseguros.service.AseguradoraService;

@RestController
@RequestMapping("/api/aseguradoras")
@CrossOrigin(origins = "*") // Permite llamadas desde el frontend
public class AseguradoraController {

    @Autowired
    private AseguradoraService aseguradoraService;

    @GetMapping
    public List<Aseguradora> obtenerAseguradoras() {
        return aseguradoraService.obtenerTodas();
    }

    @GetMapping("/{id}")
    public Optional<Aseguradora> obtenerAseguradoraPorId(@PathVariable Long id) {
        return aseguradoraService.obtenerPorId(id);
    }

    @PostMapping
    public Aseguradora guardarAseguradora(@RequestBody Aseguradora aseguradora) {
        return aseguradoraService.guardarAseguradora(aseguradora);
    }

    @PutMapping("/{id}") // Nuevo método para actualizar
    public Aseguradora actualizarAseguradora(@PathVariable Long id, @RequestBody Aseguradora aseguradora) {
        return aseguradoraService.actualizarAseguradora(id, aseguradora);
    }

    @DeleteMapping("/{id}")
    public void eliminarAseguradora(@PathVariable Long id) {
        aseguradoraService.eliminarAseguradora(id);
    }
}
