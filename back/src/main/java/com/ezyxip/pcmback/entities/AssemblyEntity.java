package com.ezyxip.pcmback.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "ASSEMBLIES")
public class AssemblyEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "CPU")
    private String CPU;
    @Column(name = "GPU")
    private String GPU;
    @Column(name = "RAM")
    private String RAM;
    @Column(name = "Motherboard")
    private String motherboard;
    @Column(name = "HDD")
    private String HDD;

    public AssemblyEntity() {
    }

    public AssemblyEntity(String CPU, String GPU, String RAM, String motherboard, String HDD) {
        this.CPU = CPU;
        this.GPU = GPU;
        this.RAM = RAM;
        this.motherboard = motherboard;
        this.HDD = HDD;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCPU() {
        return CPU;
    }

    public void setCPU(String CPU) {
        this.CPU = CPU;
    }

    public String getGPU() {
        return GPU;
    }

    public void setGPU(String GPU) {
        this.GPU = GPU;
    }

    public String getRAM() {
        return RAM;
    }

    public void setRAM(String RAM) {
        this.RAM = RAM;
    }

    public String getMotherboard() {
        return motherboard;
    }

    public void setMotherboard(String motherboard) {
        this.motherboard = motherboard;
    }

    public String getHDD() {
        return HDD;
    }

    public void setHDD(String HDD) {
        this.HDD = HDD;
    }

    @Override
    public String toString() {
        return "AssemblyEntity{" +
                "id=" + id +
                ", CPU='" + CPU + '\'' +
                ", GPU='" + GPU + '\'' +
                ", RAM='" + RAM + '\'' +
                ", motherboard='" + motherboard + '\'' +
                ", HDD='" + HDD + '\'' +
                '}';
    }
}
