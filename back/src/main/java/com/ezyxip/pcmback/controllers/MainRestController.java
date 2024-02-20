package com.ezyxip.pcmback.controllers;

import com.ezyxip.pcmback.entities.AssemblyEntity;
import com.ezyxip.pcmback.entities.CPUEntity;
import com.ezyxip.pcmback.repositories.AssemblyRepository;
import com.ezyxip.pcmback.repositories.CPURepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    @PostMapping(value = "/assemblies", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<AssemblyEntity> createAssembly(@RequestBody AssemblyEntity assembly) {
        try {
            AssemblyEntity _assembly = assemblyRepository
                    .save(new AssemblyEntity(assembly.getCPU(), assembly.getGPU(),
                            assembly.getRAM(),assembly.getMotherboard(), assembly.getHDD()));
            return new ResponseEntity<>(assembly, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Operation(
            summary = "Получить список сборок из таблицы"
    )
    @GetMapping(value = "/assemblies", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<List<AssemblyEntity>> getAllAssemblies() {
        try {
            return ResponseEntity.ok(assemblyRepository.findAll());
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
