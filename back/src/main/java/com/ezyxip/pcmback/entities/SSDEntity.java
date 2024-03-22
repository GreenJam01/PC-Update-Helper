package com.ezyxip.pcmback.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.hibernate.annotations.Cascade;

import java.util.List;

@Entity
@Table(name = "ssd")
public class SSDEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "Title")
    private  String title;

    public SSDEntity() {
    }

    public SSDEntity(String title, String brand, String memory, String anInterface, String maxReadingSpeed, String maxRecordingSpeed, Integer price) {
        this.title = title;
        this.brand = brand;
        this.memory = memory;
        this.Interface = anInterface;
        this.maxReadingSpeed = maxReadingSpeed;
        this.maxRecordingSpeed = maxRecordingSpeed;
        this.price = price;
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

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getMemory() {
        return memory;
    }

    public void setMemory(String memory) {
        this.memory = memory;
    }

    public String getInterface() {
        return Interface;
    }

    public void setInterface(String anInterface) {
        Interface = anInterface;
    }

    public String getMaxReadingSpeed() {
        return maxReadingSpeed;
    }

    public void setMaxReadingSpeed(String maxReadingSpeed) {
        this.maxReadingSpeed = maxReadingSpeed;
    }

    public String getMaxRecordingSpeed() {
        return maxRecordingSpeed;
    }

    public void setMaxRecordingSpeed(String maxRecordingSpeed) {
        this.maxRecordingSpeed = maxRecordingSpeed;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    @Column(name = "Brand")
    private String brand;

    @Column(name = "Memory")
    private String memory;

    @Column(name = "Interface")
    private String Interface;

    @Column(name = "MaxReadingSpeed")
    private String maxReadingSpeed;

    @Column(name = "maxRecordingSpeed")
    private String maxRecordingSpeed;
    @Column(name = "Price")
    private Integer price;
    @JsonIgnore
    @OneToMany(mappedBy = "ssdEntity")
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private List<AssemblyEntity> assemblies;

    public List<AssemblyEntity> getAssemblies() {
        return assemblies;
    }
    @Override
    public String toString() {
        return "SSD {" +
                "id=" + id +
                "title" + title +
                '}';
    }
}
