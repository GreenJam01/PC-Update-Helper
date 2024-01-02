package com.ezyxip.pcmback.entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import jakarta.persistence.*;
@Entity
@Table(name = "GPU")
public class GPUEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "Title")
    private  String title;
    @JsonCreator
    public GPUEntity(String title) {
        this.title= title;
    }

    public GPUEntity() {
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
        return "GPU {" +
                "id=" + id +
                '}';
    }

}
