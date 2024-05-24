package com.ezyxip.pcmback.controllers;

import com.ezyxip.pcmback.entities.*;
import com.ezyxip.pcmback.entities.User.User;
import com.ezyxip.pcmback.repositories.*;
import com.ezyxip.pcmback.security.jwt.JwtUtils;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
@RestController
@CrossOrigin
@RequestMapping("/hardware")
@Tag(name="Контроллер железа", description="Контроллер позволяет взаимодейтсвовать с ресурсом hardware")
public class HardwareController {

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    UserRepository userRepository;
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
    public ResponseEntity<List<CPUEntity>> getAllCpus(HttpServletRequest request) {
        try {
            String token = jwtUtils.parseJwt(request);
            if (!jwtUtils.validateJwtToken(token)) {
                return ResponseEntity.ok(cpuRepository.findAll());
            }
            String username = jwtUtils.getUserNameFromJwtToken(token);
            Optional<User> userEntity = userRepository.findByUsername(username);
            if (userEntity.isEmpty())
                return ResponseEntity.ok(cpuRepository.findAll());

            return ResponseEntity.ok(cpuRepository
                    .findAll().stream()
                    .peek(i -> i.setFavorite(userEntity.get().getCpus().contains(i)))
                    .collect(Collectors.toList()));
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }


    @PostMapping(value = "post-favorite-cpu")
    public ResponseEntity<?> postFavoriteCPU(@RequestBody CPUEntity cpu, HttpServletRequest request) {
        try {
            String token = jwtUtils.parseJwt(request);
            if (!jwtUtils.validateJwtToken(token)) {
                throw new Exception("Вы не авторизованны!");
            }
            String username = jwtUtils.getUserNameFromJwtToken(token);
            Optional<User> userEntity = userRepository.findByUsername(username);
            if (userEntity.isEmpty()) {
                throw new Exception("Вы не авторизованны!");
            }

            CPUEntity cpuEntity = cpuRepository.findById(cpu.getId()).orElse(null);
            if (cpuEntity == null) {
                throw new Exception("Процессор не найден!");
            }

            Set<CPUEntity> userCPUs = userEntity.get().getCpus();
            boolean isFavorite = userCPUs.contains(cpuEntity);

            if (isFavorite) {
                userCPUs.remove(cpuEntity);
            } else {
                userCPUs.add(cpuEntity);
            }
            userEntity.get().setCpus(userCPUs);
            userRepository.save(userEntity.get());
            return new ResponseEntity<>(null, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }

    }

    @PostMapping(value = "post-favorite-gpu")
    public ResponseEntity<?> postFavoriteGPU(@RequestBody GPUEntity gpu, HttpServletRequest request) {
        try {
            String token = jwtUtils.parseJwt(request);
            if (!jwtUtils.validateJwtToken(token)) {
                throw new Exception("Вы не авторизованны!");
            }
            String username = jwtUtils.getUserNameFromJwtToken(token);
            Optional<User> userEntity = userRepository.findByUsername(username);
            if (userEntity.isEmpty()) {
                throw new Exception("Вы не авторизованны!");
            }

            GPUEntity gpuEntity = gpuRepository.findById(gpu.getId()).orElse(null);
            if (gpuEntity == null) {
                throw new Exception("Процессор не найден!");
            }

            Set<GPUEntity> userGPUs = userEntity.get().getGpus();
            boolean isFavorite = userGPUs.contains(gpuEntity);

            if (isFavorite) {
                userGPUs.remove(gpuEntity);
            } else {
                userGPUs.add(gpuEntity);
            }
            userEntity.get().setGpus(userGPUs);
            userRepository.save(userEntity.get());
            return new ResponseEntity<>(null, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }

    }

    @PostMapping(value = "post-favorite-ram")
    public ResponseEntity<?> postFavoriteRAM(@RequestBody RAMEntity ram, HttpServletRequest request) {
        try {
            String token = jwtUtils.parseJwt(request);
            if (!jwtUtils.validateJwtToken(token)) {
                throw new Exception("Вы не авторизованны!");
            }
            String username = jwtUtils.getUserNameFromJwtToken(token);
            Optional<User> userEntity = userRepository.findByUsername(username);
            if (userEntity.isEmpty()) {
                throw new Exception("Вы не авторизованны!");
            }

            RAMEntity ramEntity = ramRepository.findById(ram.getId()).orElse(null);
            if (ramEntity == null) {
                throw new Exception("Процессор не найден!");
            }

            Set<RAMEntity> userRAMs = userEntity.get().getRams();
            boolean isFavorite = userRAMs.contains(ramEntity);

            if (isFavorite) {
                userRAMs.remove(ramEntity);
            } else {
                userRAMs.add(ramEntity);
            }
            userEntity.get().setRams(userRAMs);
            userRepository.save(userEntity.get());
            return new ResponseEntity<>(null, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }

    }

    @PostMapping(value = "post-favorite-hdd")
    public ResponseEntity<?> postFavoriteCPU(@RequestBody HDDEntity hdd, HttpServletRequest request) {
        try {
            String token = jwtUtils.parseJwt(request);
            if (!jwtUtils.validateJwtToken(token)) {
                throw new Exception("Вы не авторизованны!");
            }
            String username = jwtUtils.getUserNameFromJwtToken(token);
            Optional<User> userEntity = userRepository.findByUsername(username);
            if (userEntity.isEmpty()) {
                throw new Exception("Вы не авторизованны!");
            }

            HDDEntity hddEntity = hddRepository.findById(hdd.getId()).orElse(null);
            if (hddEntity == null) {
                throw new Exception("Жесткий диск не найден!");
            }

            Set<HDDEntity> userHDDs = userEntity.get().getHdds();
            boolean isFavorite = userHDDs.contains(hddEntity);

            if (isFavorite) {
                userHDDs.remove(hddEntity);
            } else {
                userHDDs.add(hddEntity);
            }
            userEntity.get().setHdds(userHDDs);
            userRepository.save(userEntity.get());
            return new ResponseEntity<>(null, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }

    }

    @PostMapping(value = "post-favorite-motherboard")
    public ResponseEntity<?> postFavoriteCPU(@RequestBody MotherboardEntity motherboard, HttpServletRequest request) {
        try {
            String token = jwtUtils.parseJwt(request);
            if (!jwtUtils.validateJwtToken(token)) {
                throw new Exception("Вы не авторизованны!");
            }
            String username = jwtUtils.getUserNameFromJwtToken(token);
            Optional<User> userEntity = userRepository.findByUsername(username);
            if (userEntity.isEmpty()) {
                throw new Exception("Вы не авторизованны!");
            }

            MotherboardEntity motherboardEntity = motherboardRepository.findById(motherboard.getId()).orElse(null);
            if (motherboardEntity == null) {
                throw new Exception("Материнская плата не найдена!");
            }

            Set<MotherboardEntity> userMotherboards = userEntity.get().getMotherboards();
            boolean isFavorite = userMotherboards.contains(motherboardEntity);

            if (isFavorite) {
                userMotherboards.remove(motherboardEntity);
            } else {
                userMotherboards.add(motherboardEntity);
            }
            userEntity.get().setMotherboards(userMotherboards);
            userRepository.save(userEntity.get());
            return new ResponseEntity<>(null, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }

    }

    @GetMapping(value = "get-all-gpu")
    public ResponseEntity<List<GPUEntity>> getAllGpus(HttpServletRequest request) {
        try {
            String token = jwtUtils.parseJwt(request);
            if (!jwtUtils.validateJwtToken(token)) {
                return ResponseEntity.ok(gpuRepository.findAll());
            }
            String username = jwtUtils.getUserNameFromJwtToken(token);
            Optional<User> userEntity = userRepository.findByUsername(username);
            if (userEntity.isEmpty())
                return ResponseEntity.ok(gpuRepository.findAll());

            return ResponseEntity.ok(gpuRepository
                    .findAll().stream()
                    .peek(i -> i.setFavorite(userEntity.get().getGpus().contains(i)))
                    .collect(Collectors.toList()));
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }
    @GetMapping(value = "get-all-motherboard")
    public ResponseEntity<List<MotherboardEntity>> getAllMotherboard(HttpServletRequest request) {
        try {
            String token = jwtUtils.parseJwt(request);
            if (!jwtUtils.validateJwtToken(token)) {
                throw new Exception("Invalid or expired token");
            }

            String username = jwtUtils.getUserNameFromJwtToken(token);
            Optional<User> userEntity = userRepository.findByUsername(username);
            if (userEntity.isEmpty())
                return ResponseEntity.ok(motherboardRepository.findAll());

            return ResponseEntity.ok(motherboardRepository
                    .findAll().stream()
                    .peek(i -> i.setFavorite(userEntity.get().getMotherboards().contains(i)))
                    .collect(Collectors.toList()));
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }
    @GetMapping(value = "get-all-hdd")
    public ResponseEntity<List<HDDEntity>> getAllHdds(HttpServletRequest request) {
        try {
            String token = jwtUtils.parseJwt(request);
            if (!jwtUtils.validateJwtToken(token)) {
                return ResponseEntity.ok(hddRepository.findAll());
            }
            String username = jwtUtils.getUserNameFromJwtToken(token);
            Optional<User> userEntity = userRepository.findByUsername(username);
            if (userEntity.isEmpty())
                return ResponseEntity.ok(hddRepository.findAll());

            return ResponseEntity.ok(hddRepository
                    .findAll().stream()
                    .peek(i -> i.setFavorite(userEntity.get().getHdds().contains(i)))
                    .collect(Collectors.toList()));
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }

    @GetMapping(value = "get-all-ram")
    public ResponseEntity<List<RAMEntity>> getAllRams(HttpServletRequest request) {
        try {
            String token = jwtUtils.parseJwt(request);
            if (!jwtUtils.validateJwtToken(token)) {
                return ResponseEntity.ok(ramRepository.findAll());
            }
            String username = jwtUtils.getUserNameFromJwtToken(token);
            Optional<User> userEntity = userRepository.findByUsername(username);
            if (userEntity.isEmpty())
                return ResponseEntity.ok(ramRepository.findAll());

            return ResponseEntity.ok(ramRepository
                    .findAll().stream()
                    .peek(i -> i.setFavorite(userEntity.get().getRams().contains(i)))
                    .collect(Collectors.toList()));
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
