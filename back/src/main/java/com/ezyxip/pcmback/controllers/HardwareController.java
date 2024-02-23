package com.ezyxip.pcmback.controllers;

import com.ezyxip.pcmback.entities.*;
import com.ezyxip.pcmback.repositories.*;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
@CrossOrigin
@RequestMapping("/hardware")
@RestController
@Tag(name="Контроллер железа", description="Контроллер позволяет взаимодейтсвовать с ресурсом hardware")
public class HardwareController {
    @Autowired
    CPURepository cpuRepository;

    @Autowired
    MotherboardRepository motherboardRepository;

    @Autowired
    GPURepository gpuRepository;
    @Autowired
    RAMRepository ramRepository;

    @Autowired
    HDDRepository hddRepository;


    @PostMapping(value = "/post-cpu", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<CPUEntity> createCPU(@RequestBody CPUEntity cpu) {
        try {
            CPUEntity _cpu = cpuRepository
                    .save(new CPUEntity(cpu.getTitle(), cpu.getBrand(), cpu.getFrequency(), cpu.getCoresNumber(), cpu.getThreadsNumber(), cpu.getPrice()));
            return new ResponseEntity<>(cpu, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/post-cpu-list", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<List<CPUEntity>> createCPUList(@RequestBody List<CPUEntity> list) {
        try {
            List<CPUEntity> savedList = new ArrayList<>();
            for (CPUEntity cpuEntity : list) {
                CPUEntity savedEntity = cpuRepository.save(cpuEntity);
                savedList.add(savedEntity);
            }
            return new ResponseEntity<>(savedList, HttpStatus.CREATED);
        } catch (Exception e) {
            // Лучше логировать исключение для отладки
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/post-gpu", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<GPUEntity> createGPU(@RequestBody GPUEntity gpu) {
        try {
            GPUEntity _gpu = gpuRepository
                    .save(new GPUEntity(gpu.getTitle(), gpu.getBrand(),gpu.getMemoryVolume(),gpu.getMemoryFrequency(), gpu.getBusWidth(),gpu.getPrice()));
            return new ResponseEntity<>(_gpu, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/post-gpu-list", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<List<GPUEntity>> createGPUList(@RequestBody List<GPUEntity> list) {
        try {
            List<GPUEntity> savedList = new ArrayList<>();
            for (GPUEntity cpuEntity : list) {
                GPUEntity savedEntity = gpuRepository.save(cpuEntity);
                savedList.add(savedEntity);
            }
            return new ResponseEntity<>(savedList, HttpStatus.CREATED);
        } catch (Exception e) {
            // Лучше логировать исключение для отладки
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/post-ram", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<RAMEntity> createRAM(@RequestBody RAMEntity ram) {
        try {
            RAMEntity _gpu = ramRepository
                    .save(new RAMEntity(ram.getTitle(), ram.getBrand(),ram.getVolume(), ram.getFrequency(), ram.getPrice() ));
            return new ResponseEntity<>(_gpu, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/post-ram-list", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<List<RAMEntity>> createRAMList(@RequestBody List<RAMEntity> list) {
        try {
            List<RAMEntity> savedList = new ArrayList<>();
            for (RAMEntity ramEntity : list) {
                RAMEntity savedEntity = ramRepository.save(ramEntity);
                savedList.add(savedEntity);
            }
            return new ResponseEntity<>(savedList, HttpStatus.CREATED);
        } catch (Exception e) {
            // Лучше логировать исключение для отладки
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/post-hdd", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<HDDEntity> createGPU(@RequestBody HDDEntity hdd) {
        try {
            HDDEntity _gpu = hddRepository
                    .save(new HDDEntity(hdd.getTitle(), hdd.getBrand(), hdd.getMemory(), hdd.getInterface(), hdd.getPrice()));
            return new ResponseEntity<>(_gpu, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/post-hdd-list", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<List<HDDEntity>> createHDDList(@RequestBody List<HDDEntity> list) {
        try {
            List<HDDEntity> savedList = new ArrayList<>();
            for (HDDEntity hddEntity : list) {
                HDDEntity savedEntity = hddRepository.save(hddEntity);
                savedList.add(savedEntity);
            }
            return new ResponseEntity<>(savedList, HttpStatus.CREATED);
        } catch (Exception e) {
            // Лучше логировать исключение для отладки
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping(value = "/post-motherboard", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<MotherboardEntity> createMotherboard(@RequestBody MotherboardEntity mothBoard) {
        try {
            MotherboardEntity _gpu = motherboardRepository
                    .save(new MotherboardEntity(mothBoard.getTitle(), mothBoard.getBrand(), mothBoard.getSocket(),mothBoard.getMemoryType(),mothBoard.getMaxMemory(),mothBoard.getPrice()));
            return new ResponseEntity<>(_gpu, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/post-motherboard-list", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<List<MotherboardEntity>> createMotherboardList(@RequestBody List<MotherboardEntity> list) {
        try {
            List<MotherboardEntity> savedList = new ArrayList<>();
            for (MotherboardEntity cpuEntity : list) {
                MotherboardEntity savedEntity = motherboardRepository.save(cpuEntity);
                savedList.add(savedEntity);
            }
            return new ResponseEntity<>(savedList, HttpStatus.CREATED);
        } catch (Exception e) {
            // Лучше логировать исключение для отладки
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "get-all-cpu")
    public ResponseEntity<List<CPUEntity>> getAllCPU() {
        try {
            return ResponseEntity.ok(cpuRepository.findAll());
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }

    @GetMapping(value = "get-all-gpu")
    public ResponseEntity<List<GPUEntity>> getAllGPU() {
        try {
            return ResponseEntity.ok(gpuRepository.findAll());
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }
    @GetMapping(value = "get-all-motherboard")
    public ResponseEntity<List<MotherboardEntity>> getAllMotherboard() {
        try {
            return ResponseEntity.ok(motherboardRepository.findAll());
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }
    @GetMapping(value = "get-all-ram")
    public ResponseEntity<List<RAMEntity>> getAllRAM() {
        try {
            return ResponseEntity.ok(ramRepository.findAll());
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }
    @GetMapping(value = "get-all-hdd")
    public ResponseEntity<List<HDDEntity>> getAllHDD() {
        try {
            return ResponseEntity.ok(hddRepository.findAll());
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }


}
