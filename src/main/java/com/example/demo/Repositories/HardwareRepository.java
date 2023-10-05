package com.example.demo.Repositories;

import com.example.demo.Entitites.CPU;
import com.example.demo.Entitites.GPU;
import com.example.demo.Entitites.Hardware;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component
public class HardwareRepository {
    @PostConstruct
    private void init(){}
    public List <Hardware> hardwares;
    public List<Hardware> getAll(){
        return hardwares;
    }
    public Hardware findByName(String name){
        return hardwares.stream().filter(e->e.getName().equals(name)).findFirst().get();
    }


}
