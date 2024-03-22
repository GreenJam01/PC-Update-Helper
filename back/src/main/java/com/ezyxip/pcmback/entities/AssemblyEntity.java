package com.ezyxip.pcmback.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "Assemblies")
public class AssemblyEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "cpu_id")
    private CPUEntity cpuEntity;

    @ManyToOne
    @JoinColumn(name = "gpu_id")
    private GPUEntity gpuEntity;

    @ManyToOne
    @JoinColumn(name = "hdd_id")
    private HDDEntity hddEntity;

    @ManyToOne
    @JoinColumn(name = "motherboard_id")
    private MotherboardEntity motherboardEntity;

    @ManyToOne
    @JoinColumn(name = "ram_id")
    private RAMEntity ramEntity;

    @ManyToOne
    @JoinColumn(name = "ssd_id")
    private SSDEntity ssdEntity;

    public Long getId() {
        return id;
    }

    public AssemblyEntity() {
    }

    public AssemblyEntity(CPUEntity cpuEntity, GPUEntity gpuEntity, HDDEntity hddEntity, MotherboardEntity motherboardEntity, RAMEntity ramEntity, SSDEntity ssdEntity) {
        this.cpuEntity = cpuEntity;
        this.gpuEntity = gpuEntity;
        this.hddEntity = hddEntity;
        this.motherboardEntity = motherboardEntity;
        this.ramEntity = ramEntity;
        this.ssdEntity = ssdEntity;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public CPUEntity getCPU() {
        return cpuEntity;
    }

    public void setCPU(CPUEntity cpuEntity) {
        this.cpuEntity = cpuEntity;
    }

    public GPUEntity getGPU() {
        return gpuEntity;
    }

    public void setGPU(GPUEntity gpuEntity) {
        this.gpuEntity = gpuEntity;
    }

    public HDDEntity getHDD() {
        return hddEntity;
    }

    public void setHDD(HDDEntity hddEntity) {
        this.hddEntity = hddEntity;
    }

    public MotherboardEntity getMotherboard() {
        return motherboardEntity;
    }

    public void setMotherboard(MotherboardEntity motherboardEntity) {
        this.motherboardEntity = motherboardEntity;
    }

    public RAMEntity getRAM() {
        return ramEntity;
    }

    public void setRAM(RAMEntity ramEntity) {
        this.ramEntity = ramEntity;
    }

    public SSDEntity getSSD() {
        return ssdEntity;
    }

    public void setSSD(SSDEntity ssdEntity) {
        this.ssdEntity = ssdEntity;
    }

    @Override
    public String toString() {
        return "AssemblyEntity{" +
                "id=" + id +
                ", CPU='" + cpuEntity + '\'' +
                ", GPU='" + gpuEntity + '\'' +
                ", RAM='" + ramEntity + '\'' +
                ", motherboard='" + motherboardEntity + '\'' +
                ", HDD='" + hddEntity + '\'' +
                ", HDD='" + ssdEntity + '\'' +
                '}';
    }
}
