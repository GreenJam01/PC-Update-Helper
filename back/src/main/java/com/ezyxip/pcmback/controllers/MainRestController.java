package com.ezyxip.pcmback.controllers;

import com.ezyxip.pcmback.entities.AssemblyEntity;
import com.ezyxip.pcmback.repositories.AssemblyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping("/")
public class MainRestController {

    @Autowired
    private AssemblyRepository assemblyRepository;

    @GetMapping(value = "/getLastAssembly", produces = APPLICATION_JSON_VALUE)
    private ResponseEntity<AssemblyEntity> getLastAssemblyEndpoint(){
        return ResponseEntity.ok( assemblyRepository.findFirstByOrderByIdDesc());
    }

    @PostMapping(value = "/assemblies", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<AssemblyEntity> createTutorial(@RequestBody AssemblyEntity assembly) {
        try {
            AssemblyEntity _assembly = assemblyRepository
                    .save(new AssemblyEntity(assembly.getCPU(), assembly.getGPU(),
                            assembly.getRAM(),assembly.getMotherboard(), assembly.getHDD()));
            return new ResponseEntity<>(assembly, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping(value = "/assemblies", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<List<AssemblyEntity>> getAllAssemblies() {
        try {
            return ResponseEntity.ok(assemblyRepository.findAll());
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }

    @GetMapping("/assemblies/{id}")
    public ResponseEntity<AssemblyEntity> getAssemblyById(@PathVariable("id") long id) {
        Optional<AssemblyEntity> assemblyData = assemblyRepository.findById(id);

        return assemblyData.map(assembly ->
                new ResponseEntity<>(assembly, HttpStatus.OK)).orElseGet(() ->
                new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @PutMapping("/assemblies/{id}")
    public ResponseEntity<AssemblyEntity> updateTutorial(@PathVariable("id") long id, @RequestBody AssemblyEntity assembly) {
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
    @DeleteMapping("/assemblies/{id}")
    public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") long id) {
        try {
            assemblyRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
