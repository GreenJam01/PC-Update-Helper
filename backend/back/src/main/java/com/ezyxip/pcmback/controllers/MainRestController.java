package com.ezyxip.pcmback.controllers;

import com.ezyxip.pcmback.entities.*;
import com.ezyxip.pcmback.entities.User.User;
import com.ezyxip.pcmback.repositories.*;
import com.ezyxip.pcmback.security.jwt.JwtUtils;
import com.ezyxip.pcmback.security.services.UserDetailsImpl;
import com.ezyxip.pcmback.security.services.UserDetailsServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.persistence.EntityNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;


@RestController
@RequestMapping("/")
@CrossOrigin
@Tag(name="Главный контроллер сборок", description="Контроллер позволяет взаимодейтсвовать с ресурсом сборок")
public class MainRestController {

    @Autowired
    private AssemblyRepository assemblyRepository;
    @Autowired
    private GPURepository gpuRepository;

    @Autowired
    private CPURepository cpuRepository;

    @Autowired
    private RAMRepository ramRepository;

    @Autowired
    private HDDRepository hddRepository;

    @Autowired
    private MotherboardRepository motherboardRepository;

    @Autowired
    UserDetailsServiceImpl userDetailsService;

    @Autowired
    UserRepository userRepository;

    @Autowired
    JwtUtils jwtUtils;
    @Operation(
            summary = "Получить последнюю сборку"
    )
    @GetMapping(value = "/getLastAssembly", produces = APPLICATION_JSON_VALUE)
    private ResponseEntity<AssemblyEntity> getLastAssemblyEndpoint(){
        return ResponseEntity.ok( assemblyRepository.findFirstByOrderByIdDesc());
    }
    @Operation(
            summary = "Добавить сборку в базу данных"
    )
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @PostMapping(value = "/assemblies", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<AssemblyEntity> createAssembly(@RequestBody AssemblyEntity assembly, HttpServletRequest request) {
        try {
            String token = jwtUtils.parseJwt(request);
            if (!jwtUtils.validateJwtToken(token)) {
                throw new Exception("Invalid or expired token");
            }

            String username = jwtUtils.getUserNameFromJwtToken(token);

            Optional<User> userEntity = userRepository.findByUsername(username);
            Optional<CPUEntity> cpuEntity = cpuRepository.findByTitle(assembly.getCPU().getTitle());
            Optional<GPUEntity> gpuEntity = gpuRepository.findByTitle(assembly.getGPU().getTitle());
            Optional<RAMEntity> ramEntity = ramRepository.findByTitle(assembly.getRAM().getTitle());
            Optional<HDDEntity> hddEntity = hddRepository.findByTitle(assembly.getHDD().getTitle());
            Optional<MotherboardEntity> motherboardEntity = motherboardRepository.findByTitle(assembly.
                    getMotherboard().getTitle());

            if (userEntity.isEmpty() || cpuEntity.isEmpty() || gpuEntity.isEmpty() || ramEntity.isEmpty() ||
                    hddEntity.isEmpty() || motherboardEntity.isEmpty()) {
                throw new EntityNotFoundException("Some entities not found");
            }

            AssemblyEntity _assembly = assemblyRepository.save(new AssemblyEntity(cpuEntity.get(), gpuEntity.get(),
                    hddEntity.get(), motherboardEntity.get(), ramEntity.get(), userEntity.get()));

            return new ResponseEntity<>(_assembly, HttpStatus.CREATED);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/post-scanned-assembly", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<AssemblyEntity> createParsedAssembly(@RequestBody AssemblyEntity assembly, @RequestParam String username) {
        try {
            Optional<User> userEntity = userRepository.findByUsername(username);
            if(userEntity.isEmpty()) throw new EntityNotFoundException("User is not found");

            Optional<CPUEntity> cpuEntity = cpuRepository.findByTitle(assembly.getCPU().getTitle());
            if(cpuEntity.isEmpty()){
                cpuEntity = Optional.ofNullable(cpuRepository.save(assembly.getCPU()));
            }
            Optional<GPUEntity> gpuEntity = gpuRepository.findByTitle(assembly.getGPU().getTitle());
            if(gpuEntity.isEmpty()){
                gpuEntity = Optional.ofNullable(gpuRepository.save(assembly.getGPU()));
            }
            Optional<RAMEntity> ramEntity = ramRepository.findByTitle(assembly.getRAM().getTitle());
            if(ramEntity.isEmpty()){
                ramEntity = Optional.ofNullable(ramRepository.save(assembly.getRAM()));
            }
            Optional<HDDEntity> hddEntity = hddRepository.findByTitle(assembly.getHDD().getTitle());
            if(hddEntity.isEmpty()){
                hddEntity = Optional.ofNullable(hddRepository.save(assembly.getHDD()));
            }
            Optional<MotherboardEntity> motherboardEntity = motherboardRepository.findByTitle(assembly.getMotherboard().getTitle());
            if(motherboardEntity.isEmpty()){
                motherboardEntity = Optional.ofNullable(motherboardRepository.save(assembly.getMotherboard()));
            }
            AssemblyEntity _assembly = assemblyRepository.save(new AssemblyEntity(cpuEntity.get(), gpuEntity.get(),
                    hddEntity.get(), motherboardEntity.get(), ramEntity.get(), userEntity.get()));

            return new ResponseEntity<>(_assembly, HttpStatus.CREATED);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @Operation(
            summary = "Получить список сборок из таблицы"
    )
    @GetMapping(value = "/assemblies", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<List<AssemblyEntity>> getAllAssemblies(HttpServletRequest request) {
        try {
            String token = jwtUtils.parseJwt(request);
            if (!jwtUtils.validateJwtToken(token)) {
                throw new Exception("Invalid or expired token");
            }

            String username = jwtUtils.getUserNameFromJwtToken(token);
            Optional<User> userEntity = userRepository.findByUsername(username);
            if (userEntity.isEmpty()) throw new Exception();
            List<AssemblyEntity> assemblies = userEntity.get().getAssemblies();
            return ResponseEntity.ok(assemblies);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }
    @Operation(
            summary = "Получить сборку по идентификатору"
    )
    @GetMapping("/assemblies/{id}")
    public ResponseEntity<AssemblyEntity> getAssemblyById(@PathVariable("id") long id) {
        Optional<AssemblyEntity> assemblyData = assemblyRepository.findById(id);

        return assemblyData.map(assembly ->
                new ResponseEntity<>(assembly, HttpStatus.OK)).orElseGet(() ->
                new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @Operation(
            summary = "Отредактировать сборку по идентификатору"
    )
    @PutMapping("/assemblies/{id}")
    public ResponseEntity<AssemblyEntity> updateAssembly(@PathVariable("id") long id, @RequestBody AssemblyEntity assembly) {
        Optional<AssemblyEntity> assemblyData = assemblyRepository.findById(id);

        if (assemblyData.isPresent()) {
            AssemblyEntity _assembly = assemblyData.get();
            _assembly.setCPU(assembly.getCPU());
            _assembly.setGPU(assembly.getGPU());
            _assembly.setRAM(assembly.getRAM());
            _assembly.setHDD(assembly.getHDD());
            _assembly.setMotherboard(assembly.getMotherboard());
            return new ResponseEntity<>(assemblyRepository.save(_assembly), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @Operation(
            summary = "Удалить сборку по идентификатору"
    )
    @DeleteMapping("/assemblies/{id}")
    public ResponseEntity<HttpStatus> deleteAssembly(@PathVariable("id") long id) {
        try {
            assemblyRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



}
