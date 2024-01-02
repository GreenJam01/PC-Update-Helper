package com.ezyxip.pcmback.entities;

import jakarta.persistence.*;
@Entity
@Table(name = "CPU")
public class CPUEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "Title")
    private  String title;
    public CPUEntity(String title) {
        this.title= title;
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
                '}';
    }

}
