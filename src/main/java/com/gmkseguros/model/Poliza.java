package com.gmkseguros.model;

import jakarta.persistence.*;

@Entity
@Table(name = "polizas")
public class Poliza {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tipo;
    private String cobertura;
    private double costo;
    private String estado;

    // Constructor vacío
    public Poliza() {}

    // Constructor con parámetros
    public Poliza(String tipo, String cobertura, double costo, String estado) {
        this.tipo = tipo;
        this.cobertura = cobertura;
        this.costo = costo;
        this.estado = estado;
    }

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTipo() { return tipo; }
    public void setTipo(String tipo) { this.tipo = tipo; }

    public String getCobertura() { return cobertura; }
    public void setCobertura(String cobertura) { this.cobertura = cobertura; }

    public double getCosto() { return costo; }
    public void setCosto(double costo) { this.costo = costo; }

    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }
}
