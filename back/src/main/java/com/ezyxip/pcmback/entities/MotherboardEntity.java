package com.ezyxip.pcmback.entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import jakarta.persistence.*;
@Entity
@Table(name = "Motherboard")
public class MotherboardEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "Title")
    private  String title;
    @JsonCreator
    public MotherboardEntity(String title) {
        this.title= title;
    }

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
