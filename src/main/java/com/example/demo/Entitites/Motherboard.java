package com.example.demo.Entitites;

import com.example.demo.Entitites.Hardware;
import java.util.*;

public class Motherboard extends Hardware {
    public Motherboard( int id, String name, String model, String socket, String chipSet, String formFactor, int ramSlotsNum, int PCIExpressSlotsNum, List<String> interfacesSupport, int cost, int rate) {
        super(id, name, cost, rate);
        this.model = model;
        this.socket = socket;
        this.chipSet = chipSet;
        this.formFactor = formFactor;
        this.ramSlotsNum = ramSlotsNum;
        this.PCIExpressSlotsNum = PCIExpressSlotsNum;
        this.interfacesSupport = interfacesSupport;
    }
    public Motherboard() {
        super();

    }
    public String getModel() {return model;}
    public void setModel(String model) {this.model = model;}
    public String getSocket() {return socket;}
    public void setSocket(String socket) {this.socket = socket;}
    public String getChipSet() {return chipSet;}
    public void setChipSet(String chipSet) {this.chipSet = chipSet;}
    public String getFormFactor() {return formFactor;}
    public void setFormFactor(String formFactor) {this.formFactor = formFactor;}
    public int getRamSlotsNum() {return ramSlotsNum;}
    public void setRamSlotsNum(int ramSlotsNum) {this.ramSlotsNum = ramSlotsNum;}
    public int getPCIExpressSlotsNum() {return PCIExpressSlotsNum;}
    public void setPCIExpressSlotsNum(int PCIExpressSlotsNum) {this.PCIExpressSlotsNum = PCIExpressSlotsNum;}
    public List<String> getInterfacesSupport() {return interfacesSupport;}
    public void setInterfacesSupport(List<String> interfacesSupport) {this.interfacesSupport = interfacesSupport;}

    String model;
    String socket;
    String chipSet;
    String formFactor;
    int ramSlotsNum;
    int PCIExpressSlotsNum;
    List<String> interfacesSupport;
}
