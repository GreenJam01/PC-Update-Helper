package com.example.demo.Repositories;
import com.example.demo.Entitites.*;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component

public class BuildRepository {
    @PostConstruct
    private void init(){
        builds = new ArrayList<>();
        builds.add(new Build(1, new CPU(), new GPU(), new Motherboard(),new RAM()));
    }
    public List<Build> builds;
    public List<Build> getAll(){
        return builds;
    }
    public Build getById(int id){
        try {
            return  builds.stream().filter(e -> e.getId() == id).findFirst().get();
        }
        catch (Exception ex) {
            return null;
        }
    }
    public Build deleteById(int id){
        try {
            Build build =  builds.stream().filter(e -> e.getId() == id).findFirst().get();
            builds.remove(build);
            return  build;
        }
        catch (Exception ex) {
            return null;
        }
    }
    public void putInRepository(Build build){
        builds.add(build);
    }

}
