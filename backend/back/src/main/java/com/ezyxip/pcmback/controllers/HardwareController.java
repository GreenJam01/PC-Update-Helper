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
import java.util.Optional;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
@RestController
@CrossOrigin
@RequestMapping("/hardware")
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
                    .save(new CPUEntity(cpu.getTitle(), cpu.getBrand(), cpu.getFrequency(), cpu.getCoresNumber(), cpu.getThreadsNumber(), cpu.getPrice(), cpu.getImgLink()));
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
                Optional<CPUEntity> cpuData = cpuRepository.findByTitle(cpuEntity.getTitle());
                if(cpuData.isPresent()){
                    CPUEntity cpu = cpuData.get();
                    cpu = cpuEntity;
                    cpuRepository.save(cpu);
                    savedList.add(cpu);
                }
                else {
                    CPUEntity savedEntity = cpuRepository.save(cpuEntity);
                    savedList.add(savedEntity);
                }
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
                    .save(new GPUEntity(gpu.getTitle(), gpu.getBrand(),gpu.getMemoryVolume(),gpu.getMemoryFrequency(), gpu.getBusWidth(),gpu.getPrice(), gpu.getImgLink()));
            return new ResponseEntity<>(_gpu, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/post-gpu-list", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<List<GPUEntity>> createGPUList(@RequestBody List<GPUEntity> list) {
        try {
            List<GPUEntity> savedList = new ArrayList<>();
            for (GPUEntity gpuEntity : list) {
                Optional<GPUEntity> gpuData = gpuRepository.findByTitle(gpuEntity.getTitle());
                if(gpuData.isPresent()){
                    GPUEntity gpu = gpuData.get();
                    gpu = gpuEntity;
                    gpuRepository.save(gpu);
                    savedList.add(gpu);
                }
                else {
                    GPUEntity savedEntity = gpuRepository.save(gpuEntity);
                    savedList.add(savedEntity);
                }
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
                    .save(new RAMEntity(ram.getTitle(), ram.getBrand(),ram.getVolume(), ram.getFrequency(), ram.getPrice(), ram.getImgLink() ));
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
                Optional<RAMEntity> ramData = ramRepository.findByTitle(ramEntity.getTitle());
                if(ramData.isPresent()){
                    RAMEntity ram = ramData.get();
                    ram = ramEntity;
                    ramRepository.save(ram);
                    savedList.add(ram);
                }
                else {
                    RAMEntity savedEntity = ramRepository.save(ramEntity);
                    savedList.add(savedEntity);
                }
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
                    .save(new HDDEntity(hdd.getTitle(), hdd.getBrand(), hdd.getMemory(), hdd.getInterface()
                            , hdd.getMaxRecordingSpeed(), hdd.getMaxReadingSpeed(), hdd.isSSD(),hdd.getPrice(), hdd.getImgLink()));
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
                Optional<HDDEntity> hddData = hddRepository.findByTitle(hddEntity.getTitle());
                if(hddData.isPresent()){
                    HDDEntity hdd = hddData.get();
                    hdd = hddEntity;
                    hddRepository.save(hdd);
                    savedList.add(hdd);
                }
                else {
                    HDDEntity savedEntity = hddRepository.save(hddEntity);
                    savedList.add(savedEntity);
                }
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
                    .save(new MotherboardEntity(mothBoard.getTitle(), mothBoard.getBrand(), mothBoard.getSocket(),mothBoard.getMemoryType(),mothBoard.getMaxMemory(),mothBoard.getPrice(), mothBoard.getImgLink()));
            return new ResponseEntity<>(_gpu, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/post-motherboard-list", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<List<MotherboardEntity>> createMotherboardList(@RequestBody List<MotherboardEntity> list) {
        try {
            List<MotherboardEntity> savedList = new ArrayList<>();
            for (MotherboardEntity mbEntity : list) {
                Optional<MotherboardEntity> mbData = motherboardRepository.findByTitle(mbEntity.getTitle());
                if(mbData.isPresent()){
                    MotherboardEntity mb = mbData.get();
                    mb = mbEntity;
                    motherboardRepository.save(mb);
                    savedList.add(mb);
                }
                else {
                    MotherboardEntity savedEntity = motherboardRepository.save(mbEntity);
                    savedList.add(savedEntity);
                }
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
            var rep = hddRepository.findAll();
            return ResponseEntity.ok(hddRepository.findAll());
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }

    @GetMapping("/cpu/{id}")
    public ResponseEntity<CPUEntity> getCpuById(@PathVariable("id") long id) {
        Optional<CPUEntity> cpuData = cpuRepository.findById(id);

        return cpuData.map(cpu ->
                new ResponseEntity<>(cpu, HttpStatus.OK)).orElseGet(() ->
                new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @GetMapping("/gpu/{id}")
    public ResponseEntity<GPUEntity> getGpuById(@PathVariable("id") long id) {
        Optional<GPUEntity> gpuData = gpuRepository.findById(id);

        return gpuData.map(gpu ->
                new ResponseEntity<>(gpu, HttpStatus.OK)).orElseGet(() ->
                new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/ram/{id}")
    public ResponseEntity<RAMEntity> getRamById(@PathVariable("id") long id) {
        Optional<RAMEntity> ramData = ramRepository.findById(id);

        return ramData.map(ram ->
                new ResponseEntity<>(ram, HttpStatus.OK)).orElseGet(() ->
                new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/hdd/{id}")
    public ResponseEntity<HDDEntity> getHddById(@PathVariable("id") long id) {
        Optional<HDDEntity> hddData = hddRepository.findById(id);

        return hddData.map(hdd ->
                new ResponseEntity<>(hdd, HttpStatus.OK)).orElseGet(() ->
                new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/motherboard/{id}")
    public ResponseEntity<MotherboardEntity> getmotherboardById(@PathVariable("id") long id) {
        Optional<MotherboardEntity> motherboardData = motherboardRepository.findById(id);

        return motherboardData.map(motherboard ->
                new ResponseEntity<>(motherboard, HttpStatus.OK)).orElseGet(() ->
                new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


}
