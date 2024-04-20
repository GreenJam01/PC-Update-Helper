package com.ezyxip.pcmback.repositories;

import com.ezyxip.pcmback.entities.CPUEntity;
import com.ezyxip.pcmback.entities.GPUEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface GPURepository extends CrudRepository<GPUEntity, Long> {
    List<GPUEntity> findAll();
    GPUEntity findFirstByOrderByIdDesc();

    Optional<GPUEntity> findByTitle(String title);
}

