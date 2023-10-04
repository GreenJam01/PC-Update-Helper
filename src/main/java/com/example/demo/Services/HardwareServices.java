package com.example.demo.Services;

import com.example.demo.Entitites.Hardware;
import com.example.demo.Repositories.HardwareRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HardwareServices {
    private HardwareRepository hardwareRepository;
    @Autowired
    public void setHardwareRepository(HardwareRepository hardwareRepository) {
        this.hardwareRepository = hardwareRepository;
    }

    public List<Hardware> getAllHardwares(){
       return hardwareRepository.getAll();
    }
}
