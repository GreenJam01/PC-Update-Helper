package com.example.demo.Services;

import com.example.demo.Entitites.Build;
import com.example.demo.Repositories.BuildRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuildService {
    private BuildRepository buildRepository;
    @Autowired
    public void setHardwareRepository(BuildRepository buildRepository) {
        this.buildRepository = buildRepository;
    }

    public List<Build> getAllBuilds(){
        return buildRepository.getAll();
    }
    public Build getBuildById(int id) {
        return  buildRepository.getById(id);
    }
    public Build deleteBuildById(int id){
        return buildRepository.deleteById(id);
    }
    public void putInRepository(Build build){
        buildRepository.putInRepository(build);
    }
}
