package com.ezyxip.pcmback.entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.hibernate.annotations.Cascade;

import java.util.List;

@Entity
@Table(name = "motherboard")
public class MotherboardEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "Title")
    private  String title;

    @Column(name = "Brand")
    private String brand;

    @Column(name = "Socket")
    private String socket;

    @Column(name ="MemoryType")
    private String memoryType;
    @JsonIgnore
    @OneToMany(mappedBy = "motherboardEntity")
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private List<AssemblyEntity> assemblies;

    public List<AssemblyEntity> getAssemblies() {
        return assemblies;
    }


    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getSocket() {
        return socket;
    }

    public void setSocket(String socket) {
        this.socket = socket;
    }

    public String getMemoryType() {
        return memoryType;
    }

    public void setMemoryType(String memoryType) {
        this.memoryType = memoryType;
    }

    public String getMaxMemory() {
        return maxMemory;
    }

    public void setMaxMemory(String maxMemory) {
        this.maxMemory = maxMemory;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public MotherboardEntity(String title, String brand, String socket, String memoryType, String maxMemory, Integer price) {
        this.title = title;
        this.brand = brand;
        this.socket = socket;
        this.memoryType = memoryType;
        this.maxMemory = maxMemory;
        this.price = price;
    }

    @Column(name = "MaxMemory")
    private String maxMemory;

    @Column(name = "Price")
    private Integer price;

    public MotherboardEntity() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public String toString() {
        return "Motherboard {" +
                "id=" + id +
                "title" + title +
                '}';
    }

}
