package com.ezyxip.pcmback.entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import jakarta.persistence.*;
@Entity
@Table(name = "RAM")
public class RAMEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "Title")
    private  String title;
    @JsonCreator
    public RAMEntity(String title) {
        this.title= title;
    }

    public RAMEntity() {
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
