package com.gmkseguros.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.gmkseguros.model.Usuario;
import com.gmkseguros.service.UsuarioService;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*") // Permite llamadas desde cualquier frontend (modificar en producción)
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    // Obtener todos los usuarios
    @GetMapping
    public ResponseEntity<List<Usuario>> obtenerUsuarios() {
        List<Usuario> usuarios = usuarioService.obtenerTodos();
        return ResponseEntity.ok(usuarios);
    }

    // Registrar usuario con validaciones
    @PostMapping("/registro")
    public ResponseEntity<?> registrarUsuario(@RequestBody Usuario usuario) {
        if (usuario.getCorreo() == null || usuario.getContraseña() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Correo y contraseña son obligatorios");
        }
        Usuario nuevoUsuario = usuarioService.registrarUsuario(usuario);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevoUsuario);
    }

    // Iniciar sesión
    @PostMapping("/login")
    public ResponseEntity<?> iniciarSesion(@RequestBody Usuario usuario) {
        if (usuario.getCorreo() == null || usuario.getContraseña() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Correo y contraseña son obligatorios");
        }

        Usuario usuarioAutenticado = usuarioService.iniciarSesion(usuario.getCorreo(), usuario.getContraseña());
        if (usuarioAutenticado == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales incorrectas");
        }

        // Evitar enviar la contraseña en la respuesta
        usuarioAutenticado.setContraseña(null);
        return ResponseEntity.ok(usuarioAutenticado);
    }
}
