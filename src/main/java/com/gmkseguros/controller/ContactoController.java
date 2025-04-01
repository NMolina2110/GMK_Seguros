package com.gmkseguros.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gmkseguros.model.Contacto;
import com.gmkseguros.service.ContactoService;

@RestController
@RequestMapping("/api/contacto")
@CrossOrigin(origins = "*") // Permite peticiones desde el frontend
public class ContactoController {

    @Autowired
    private ContactoService contactoService;

    @PostMapping("/enviar")
    public ResponseEntity<String> enviarMensaje(@RequestBody Contacto contacto) {
        contactoService.guardarContacto(contacto);
        return ResponseEntity.ok("Mensaje recibido correctamente");
    }
}
