package com.ezyxip.pcmback.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "CPU")
public class CPUEntity {
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

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    public CPUEntity(String title) {
        this.title = title;
    }

    private  String title;

}
