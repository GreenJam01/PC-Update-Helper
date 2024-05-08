package com.ezyxip.pcmback.entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;

import java.util.List;
@Data
@NoArgsConstructor
@Entity
@Table(name = "gpu")
public class GPUEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Title")
    private  String title;

    @Column(name = "Brand")
    private String Brand;

    @Column(name = "MemoryVolume")
    private String MemoryVolume;

    @Column(name = "MemoryFrequency")
    private String memoryFrequency;

    @Column(name = "BusWidth")
    private String busWidth;

    @Column(name = "Price")
    private Integer price;

    @Column(name = "ImgLink")
    private  String imgLink;

    public void setImgLink(String imgLink) {
        this.imgLink = imgLink;
    }

    public String getImgLink() {
        return imgLink;
    }

    @JsonIgnore
    @OneToMany(mappedBy = "gpu")
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private List<AssemblyEntity> assemblies;

    public List<AssemblyEntity> getAssemblies() {
        return assemblies;
    }

    public void setAssemblies(List<AssemblyEntity> assemblies) {
        this.assemblies = assemblies;
    }

    public GPUEntity(String title, String brand, String memoryVolume, String memoryFrequency, String busWidth, Integer price, String imgLink) {
        this.title = title;
        this.Brand = brand;
        this.MemoryVolume = memoryVolume;
        this.memoryFrequency = memoryFrequency;
        this.busWidth = busWidth;
        this.price = price;

        this.imgLink = imgLink;
    }

    public String getBrand() {
        return Brand;
    }

    public void setBrand(String brand) {
        Brand = brand;
    }

    public String getMemoryVolume() {
        return MemoryVolume;
    }

    public void setMemoryVolume(String memoryVolume) {
        MemoryVolume = memoryVolume;
    }

    public String getMemoryFrequency() {
        return memoryFrequency;
    }

    public void setMemoryFrequency(String memoryFrequency) {
        this.memoryFrequency = memoryFrequency;
    }

    public String getBusWidth() {
        return busWidth;
    }

    public void setBusWidth(String busWidth) {
        this.busWidth = busWidth;
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
        return "GPU {" +
                "id=" + id +
                '}';
    }

}
