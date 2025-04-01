package com.gmkseguros.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.gmkseguros.service.PQRSService; 
import com.gmkseguros.model.PQRS;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pqrs")
@CrossOrigin(origins = "*") // Permite llamadas desde el frontend
public class PQRSController {

    @Autowired
    private PQRSService pqrsService;

    @GetMapping
    public List<PQRS> obtenerPQRS() {
        return pqrsService.obtenerTodas();
    }

    @GetMapping("/{id}")
    public Optional<PQRS> obtenerPQRSporId(@PathVariable Long id) {
        return pqrsService.obtenerPorId(id);
    }

    @PostMapping
    public PQRS guardarPQRS(@RequestBody PQRS pqrs) {
        return pqrsService.guardarPQRS(pqrs);
    }

    @DeleteMapping("/{id}")
    public void eliminarPQRS(@PathVariable Long id) {
        pqrsService.eliminarPQRS(id);
    }
}
