package com.gmkseguros.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gmkseguros.model.Seguro;
import com.gmkseguros.service.SeguroService;

@RestController
@RequestMapping("/api/seguros")
public class SeguroController {

    @Autowired
    private SeguroService seguroService;

    @GetMapping
    public List<Seguro> obtenerSeguros() {
        return seguroService.obtenerTodos();
    }

    @GetMapping("/{id}")
    public Optional<Seguro> obtenerSeguroPorId(@PathVariable Long id) {
        return seguroService.obtenerPorId(id);
    }

    @PostMapping
    public Seguro guardarSeguro(@RequestBody Seguro seguro) {
        return seguroService.guardarSeguro(seguro);
    }
    

    @DeleteMapping("/{id}")
    public void eliminarSeguro(@PathVariable Long id) {
        seguroService.eliminarSeguro(id);
    }
}
