package com.ezyxip.pcmback.entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import jakarta.persistence.*;
@Entity
@Table(name = "HDD")
public class HDDEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "Title")
    private  String title;

    @Column(name = "Brand")
    private String brand;

    @Column(name = "Memory")
    private String memory;

    public HDDEntity(String title, String brand, String memory, String anInterface, Integer price) {
        this.title = title;
        this.brand = brand;
        this.memory = memory;
        Interface = anInterface;
        this.price = price;
    }


    @Column(name="Interface")
    private String Interface;

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

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    @Column(name="Price")
    private Integer price;

    public HDDEntity() {
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
        return "HDD {" +
                "id=" + id +
                "title" + title +
                '}';
    }

}
