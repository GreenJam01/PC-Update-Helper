package com.example.demo.Entitites;

import java.util.ArrayList;
import java.util.List;

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

    public List<String> getReviews() {
        return reviews;
    }

    public void setReviews(List<String> reviews) {
        reviews = reviews;
    }

    public Hardware(int id, String name, int cost) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        reviews = new ArrayList<>();
    }

    private int id;
    private String name;
    private int cost;
    private List<String> reviews;
}
