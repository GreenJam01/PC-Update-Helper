package com.ezyxip.pcmback.repositories;

import com.ezyxip.pcmback.entities.CPUEntity;
import com.ezyxip.pcmback.entities.GPUEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GPURepository extends CrudRepository<GPUEntity, Long> {
    List<GPUEntity> findAll();
    GPUEntity findFirstByOrderByIdDesc();

}

