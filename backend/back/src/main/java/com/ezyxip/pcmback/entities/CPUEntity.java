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

    @Column(name = "coresNumber")
    private String coresNumber;

    @Column(name = "ThreadsNumber")
    private  String threadsNumber;

    ############################# типа для картинок добавил
    @Column(name = "imgLink")
    private  String imgLink;

    public void setImgLink(String imgLink) {
        this.imgLink = imgLink;
    }

    public String getImgLink() {
        return imgLink;
    }
    #############################

    @JsonIgnore
    @OneToMany(mappedBy = "cpu")
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private List<AssemblyEntity> assemblies;

    public List<AssemblyEntity> getAssemblies() {
        return assemblies;
    }

    public CPUEntity(String title, String brand, String frequency, String coresNumber, String threadsNumber, Integer price, String imgLink) {
        this.title = title;
        this.brand = brand;
        this.frequency = frequency;
        this.coresNumber = coresNumber;
        this.threadsNumber = threadsNumber;
        Price = price;

        ######################### тоже новое
        this.imgLink = imgLink;
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
