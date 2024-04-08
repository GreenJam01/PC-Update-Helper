package com.ezyxip.pcmback.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
@Data
@NoArgsConstructor
@Entity
@Table(name = "Assemblies")
public class AssemblyEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "cpu_id")
    private CPUEntity cpu;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "gpu_id")
    private GPUEntity gpu;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "hdd_id")
    private HDDEntity hdd;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "motherboard_id")
    private MotherboardEntity motherboard;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "ram_id")
    private RAMEntity ram;

    public Long getId() {
        return id;
    }


    public AssemblyEntity(CPUEntity cpu,
                          GPUEntity gpu,
                          HDDEntity hdd,
                          MotherboardEntity motherboard,
                          RAMEntity ram) {
        this.cpu = cpu;
        this.gpu = gpu;
        this.hdd = hdd;
        this.motherboard = motherboard;
        this.ram = ram;
       // this.ssdEntity = ssdEntity;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public CPUEntity getCPU() {
        return cpu;
    }

    public void setCPU(CPUEntity cpuEntity) {
        this.cpu = cpuEntity;
    }

    public GPUEntity getGPU() {
        return gpu;
    }

    public void setGPU(GPUEntity gpuEntity) {
        this.gpu = gpuEntity;
    }

    public HDDEntity getHDD() {
        return hdd;
    }

    public void setHDD(HDDEntity hddEntity) {
        this.hdd = hddEntity;
    }

    public MotherboardEntity getMotherboard() {
        return motherboard;
    }

    public void setMotherboard(MotherboardEntity motherboardEntity) {
        this.motherboard = motherboardEntity;
    }

    public RAMEntity getRAM() {
        return ram;
    }

    public void setRAM(RAMEntity ramEntity) {
        this.ram = ramEntity;
    }

//    public SSDEntity getSSD() {
//        return ssdEntity;
//    }
//
//    public void setSSD(SSDEntity ssdEntity) {
//        this.ssdEntity = ssdEntity;
//    }

    @Override
    public String toString() {
        return "AssemblyEntity{" +
                "id=" + id +
                ", CPU='" + cpu + '\'' +
                ", GPU='" + gpu + '\'' +
                ", RAM='" + ram + '\'' +
                ", motherboard='" + motherboard + '\'' +
                ", HDD='" + hdd + '\'' +
                '}';
    }
}
