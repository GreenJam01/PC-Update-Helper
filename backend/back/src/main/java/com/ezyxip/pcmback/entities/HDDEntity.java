package com.ezyxip.pcmback.entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;

import java.util.List;
@NoArgsConstructor
@Data
@Entity
@Table(name = "hdd")
public class HDDEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Title")
    private  String title;

    @Column(name = "Brand")
    private String brand;

    @Column(name = "Memory")
    private String memory;

    @Column(name="Interface")
    private String Interface;

    @Column(name="Price")
    private Integer price;

    @Column(name="maxRecordingSpeed")
    private String maxRecordingSpeed;

    @Column(name="maxReadingSpeed")
    private String maxReadingSpeed;

    @Column(name="isSSD")
    private boolean isSSD;

    @Column(name = "ImgLink")
    private  String imgLink;

    @Column(name = "Visible")
    private boolean visible;
    @Transient
    private boolean isFavorite;

    public void setImgLink(String imgLink) {
        this.imgLink = imgLink;
    }

    public String getImgLink() {
        return imgLink;
    }

    public HDDEntity(String title, String brand, String memory, String anInterface,
                     String maxRecordingSpeed, String maxReadingSpeed, Boolean isSSD,Integer price, String imgLink) {
        this.title = title;
        this.brand = brand;
        this.memory = memory;
        Interface = anInterface;
        this.price = price;
        this.maxReadingSpeed = maxReadingSpeed;
        this.maxRecordingSpeed = maxRecordingSpeed;
        this.isSSD= isSSD;

        this.imgLink = imgLink;
    }
    @JsonIgnore
    @OneToMany(mappedBy = "hdd")
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
