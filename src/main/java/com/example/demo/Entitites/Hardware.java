package com.example.demo.Entitites;

import java.util.*;

public abstract class Hardware {
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getCost() {
        return cost;
    }
    public void setCost(int cost) {
        this.cost = cost;
    }
    public int getRate() {return rate;}
    public void setRate(int rate) {this.rate = rate;}
    public Hardware(int id, String name, int cost, int rate) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.rate = rate;
    }
    public  Hardware(){

    }

    private int id;
    private String name;
    private int cost;
    private int rate;
}
