package com.example.demo.Entitites;

import com.example.demo.Entitites.Hardware;

public class SDD extends Hardware {
    public SDD( int id, String name, String manufacturer, String type
              , int storegeV, int readSpeed, int wrightSpeed, int cost, int rate ) {
        super(id, name, cost, rate);
        this.manufacturer = manufacturer;
        this.type = type;
        this.storegeV = storegeV;
        this.readSpeed = readSpeed;
        this.wrightSpeed = wrightSpeed;
    }
    public SDD() {
        super();

    }
    public String getManufacturer() {return manufacturer;}
    public void setManufacturer(String manufacturer) {this.manufacturer = manufacturer;}
    public String getType() {return type;}
    public void setType(String type) {this.type = type;}
    public int getStoregeV() {return storegeV;}
    public void setStoregeV(int storegeV) {this.storegeV = storegeV;}
    public int getReadSpeed() {return readSpeed;}
    public void setReadSpeed(int readSpeed) {this.readSpeed = readSpeed;}
    public int getWrightSpeed() {return wrightSpeed;}
    public void setWrightSpeed(int wrightSpeed) {this.wrightSpeed = wrightSpeed;}

    String manufacturer;
    String type;
    int storegeV;
    int readSpeed;
    int wrightSpeed;
}
