package com.example.demo.Entitites;

import java.util.*;

public class GPU extends Hardware {

    public GPU( int id, String name, String manufacturer, String architecture, int videoMemory, int graphicCoreFrequancy, List<String> tecknologySupport, int cost, int rate) {
        super(id, name, cost, rate);
        this.manufacturer = manufacturer;
        this.architecture = architecture;
        this.videoMemory = videoMemory;
        this.graphicCoreFrequancy = graphicCoreFrequancy;
        this.tecknologySupport = tecknologySupport;
    }

    public String getManufacturer() {return manufacturer;}
    public void setManufacturer(String manufacturer) {this.manufacturer = manufacturer;}
    public String getArchitecture() {return architecture;}
    public void setArchitecture(String architecture) {this.architecture = architecture;}
    public int getVideoMemory() {return videoMemory;}
    public void setVideoMemory(int videoMemory) {this.videoMemory = videoMemory;}
    public int getGraphicCoreFrequancy() {return graphicCoreFrequancy;}
    public void setGraphicCoreFrequancy(int graphicCoreFrequancy) {this.graphicCoreFrequancy = graphicCoreFrequancy;}
    public List<String> getTecknologySupport() {return tecknologySupport;}
    public void setTecknologySupport(List<String> tecknologySupport) {this.tecknologySupport = tecknologySupport;}

    String manufacturer;
    String architecture;
    int videoMemory;
    int graphicCoreFrequancy;
    List<String> tecknologySupport;
}
