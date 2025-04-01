package com.gmkseguros.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gmkseguros.model.Poliza; // Importación de la clase Poliza
import com.gmkseguros.service.PolizaService; // Importación del servicio

@RestController
@RequestMapping("/api/polizas")
@CrossOrigin(origins = "*") // Permite llamadas desde el frontend
public class PolizaController {

    @Autowired
    private PolizaService polizaService;

    @GetMapping
    public List<Poliza> obtenerPolizas() {
        return polizaService.obtenerTodas();
    }

    @GetMapping("/{id}")
    public Optional<Poliza> obtenerPolizaPorId(@PathVariable Long id) {
        return polizaService.obtenerPorId(id);
    }

    @PostMapping
    public Poliza guardarPoliza(@RequestBody Poliza poliza) {
        return polizaService.guardarPoliza(poliza);
    }

    @DeleteMapping("/{id}")
    public void eliminarPoliza(@PathVariable Long id) {
        polizaService.eliminarPoliza(id);
    }
}
