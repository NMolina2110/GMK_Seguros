package com.gmkseguros.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gmkseguros.model.Contacto;
import com.gmkseguros.repository.ContactoRepository;

@Service
public class ContactoService {

    @Autowired
    private ContactoRepository contactoRepository;

    public Contacto guardarContacto(Contacto contacto) {
        return contactoRepository.save(contacto);
    }
}
