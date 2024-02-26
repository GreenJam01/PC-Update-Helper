package com.ezyxip.pcmback.entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import jakarta.persistence.*;
import jdk.jfr.Frequency;
import org.hibernate.annotations.Cascade;

import java.util.List;

@Entity
@Table(name = "CPU")
public class CPUEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "Title")
    private  String title;

    public String getBrand() {
        return brand;
    }

    public String getFrequency() {
        return frequency;
    }

    public void setFrequency(String frequency) {
        this.frequency = frequency;
    }

    public String getCoresNumber() {
        return CoresNumber;
    }

    public void setCoresNumber(String coresNumber) {
        CoresNumber = coresNumber;
    }

    public String getThreadsNumber() {
        return threadsNumber;
    }

    public void setThreadsNumber(String threadsNumber) {
        this.threadsNumber = threadsNumber;
    }

    @Column(name = "Brand")
    private String brand;

    @Column(name = "Frequency")
    private String frequency;

    @Column(name = "CoresNumber")
    private String CoresNumber;

    @Column(name = "ThreadsNumber")
    private  String threadsNumber;
    @OneToMany(mappedBy = "cpuEntity")
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private List<AssemblyEntity> assemblies;

    public List<AssemblyEntity> getAssemblies() {
        return assemblies;
    }

    public CPUEntity(String title, String brand, String frequency, String coresNumber, String threadsNumber, Integer price) {
        this.title = title;
        this.brand = brand;
        this.frequency = frequency;
        CoresNumber = coresNumber;
        this.threadsNumber = threadsNumber;
        Price = price;
    }

    @Column(name = "Price")
    private Integer Price;

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Integer getPrice() {
        return Price;
    }

    public void setPrice(Integer price) {
        Price = price;
    }

    public CPUEntity() {
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
        return "CPU {" +
                "id=" + id +
                "title" + title +
                '}';
    }

}
