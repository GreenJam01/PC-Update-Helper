package com.example.demo.Entitites;

import java.util.List;

public class CPU extends Hardware {
    public CPU( int id, String name, String model, String manufacturer, String architecture, int coresNum, int streamsNum, int clockFrequency_L1, int clockFrequency_L2, int clockFrequency_L3, int cost, int rate) {
        super(id, name, cost, rate);
        this.model = model;
        this. manufacturer = manufacturer;
        this.architecture = architecture;
        this.coresNum = coresNum;
        this.streamNum = streamsNum;
        this.clockFrequency_L1 = clockFrequency_L1;
        this.clockFrequency_L2 = clockFrequency_L2;
        this.clockFrequency_L3 = clockFrequency_L3;
    }


    public String getModel() {return model;}
    public void setModel(String model) {this.model = model;}
    public String getManufacturer() {return manufacturer;}
    public void setManufacturer(String manufacturer) {this.manufacturer = manufacturer;}
    public String getArchitecture() {return architecture;}
    public void setArchitecture(String architecture) {this.architecture = architecture;}
    public int getCores() {return coresNum;}
    public void setCores(int coresNum) {this.coresNum = coresNum;}
    public int getStreamNum() {return streamNum;}
    public void setStreamNum(int streamNum) {this.streamNum = streamNum;}
    public int getClockFrequency_L1() {return clockFrequency_L1;}
    public void setClockFrequency_L1(int clockFrequency_L1) {this.clockFrequency_L1 = clockFrequency_L1;}
    public int getClockFrequency_L2() {return clockFrequency_L2;}
    public void setClockFrequency_L2(int clockFrequency_L2) {this.clockFrequency_L2 = clockFrequency_L2;}
    public int getClockFrequency_L3() {return clockFrequency_L3;}
    public void setClockFrequency_L3(int clockFrequency_L3) {this.clockFrequency_L3 = clockFrequency_L3;}

    String model;
    String manufacturer;
    String architecture;
    int coresNum;
    int streamNum;
    int clockFrequency_L1;
    int clockFrequency_L2;
    int clockFrequency_L3;
}
