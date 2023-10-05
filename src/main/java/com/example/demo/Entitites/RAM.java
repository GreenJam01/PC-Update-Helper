package com.example.demo.Entitites;

import com.example.demo.Entitites.Hardware;

public class RAM extends Hardware {
    public RAM(int id, String name, String memoryType, String manufacturer, int memoryVolume, int memoryFrequancy, int memoryTimings, int cost, int rate) {
        super(id, name, cost, rate);
        this.memoryType = memoryType;
        this.manufacturer = manufacturer;
        this.memoryVolume = memoryVolume;
        this.memoryFrequancy = memoryFrequancy;
        this.memoryTimings = memoryTimings;
    }

    public String getMemoryType() {return memoryType;}
    public void setMemoryType(String memoryType) {this.memoryType = memoryType;}
    public String getManufacturer() {return manufacturer;}
    public void setManufacturer(String manufacturer) {this.manufacturer = manufacturer;}
    public int getMemoryVolume() {return memoryVolume;}
    public void setMemoryVolume(int memoryVolume) {this.memoryVolume = memoryVolume;}
    public int getMemoryFrequancy() {return memoryFrequancy;}
    public void setMemoryFrequancy(int memoryFrequancy) {this.memoryFrequancy = memoryFrequancy;}
    public int getMemoryTimings() {return memoryTimings;}
    public void setMemoryTimings(int memoryTimings) {this.memoryTimings = memoryTimings;}

    String memoryType;
    String manufacturer;
    int memoryVolume;
    int memoryFrequancy;
    int memoryTimings;
}
