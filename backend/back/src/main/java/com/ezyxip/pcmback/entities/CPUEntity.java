package com.ezyxip.pcmback.entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jdk.jfr.Frequency;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;

import java.util.List;
@Data
@NoArgsConstructor
@Entity
@Table(name = "cpu")
public class CPUEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Title")
    private  String title;

    @Column(name = "Visible")
    private boolean visible;

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
        return coresNumber;
    }

    public void setCoresNumber(String coresNumber) {
        coresNumber = coresNumber;
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
    private String coresNumber;

    @Column(name = "ThreadsNumber")
    private  String threadsNumber;

    @Column(name = "ImgLink")
    private  String imgLink;
    @Transient
    private boolean isFavorite;

    public void setFavorite(boolean favorite) {
        isFavorite = favorite;
    }

    public void setImgLink(String imgLink) {
        this.imgLink = imgLink;
    }

    public String getImgLink() {
        return imgLink;
    }

    @JsonIgnore
    @OneToMany(mappedBy = "cpu")
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private List<AssemblyEntity> assemblies;

    public List<AssemblyEntity> getAssemblies() {
        return assemblies;
    }

    public CPUEntity(String title, String brand, String frequency, String coresNumber,
                     String threadsNumber, Integer price, String imgLink,
                     boolean visible
    ) {
        this.title = title;
        this.brand = brand;
        this.frequency = frequency;
        this.coresNumber = coresNumber;
        this.threadsNumber = threadsNumber;
        Price = price;
        this.imgLink = imgLink;
        this.visible = visible;
    }

    @Column(name = "Price")
    private Integer Price;



    @Override
    public String toString() {
        return "CPU {" +
                "id=" + id +
                "title" + title +
                '}';
    }

}
