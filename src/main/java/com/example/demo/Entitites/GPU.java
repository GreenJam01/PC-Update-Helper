package com.example.demo.Entitites;

import java.util.*;

public class GPU extends Hardware {

    public GPU( int id, String name, String manufacturer, String architecture, int videoMemory, int graphicCoreFrequency, List<String> technologySupport, int cost, int rate) {
        super(id, name, cost, rate);
        this.manufacturer = manufacturer;
        this.architecture = architecture;
        this.videoMemory = videoMemory;
        this.graphicCoreFrequency = graphicCoreFrequency;
        this.technologySupport = technologySupport;
    }
    public GPU() {
        super();

    }
    public String getManufacturer() {return manufacturer;}
    public void setManufacturer(String manufacturer) {this.manufacturer = manufacturer;}
    public String getArchitecture() {return architecture;}
    public void setArchitecture(String architecture) {this.architecture = architecture;}
    public int getVideoMemory() {return videoMemory;}
    public void setVideoMemory(int videoMemory) {this.videoMemory = videoMemory;}
    public int getgraphicCoreFrequency() {return graphicCoreFrequency;}
    public void setgraphicCoreFrequency(int graphicCoreFrequency) {this.graphicCoreFrequency = graphicCoreFrequency;}
    public List<String> getTecknologySupport() {return technologySupport;}
    public void setTecknologySupport(List<String> tecknologySupport) {this.technologySupport = tecknologySupport;}

    String manufacturer;
    String architecture;
    int videoMemory;
    int graphicCoreFrequency;
    List<String> technologySupport;
}
