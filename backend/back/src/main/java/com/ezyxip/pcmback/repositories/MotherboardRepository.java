package com.ezyxip.pcmback.repositories;

import com.ezyxip.pcmback.entities.CPUEntity;
import com.ezyxip.pcmback.entities.GPUEntity;
import com.ezyxip.pcmback.entities.MotherboardEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MotherboardRepository extends CrudRepository<MotherboardEntity, Long> {
    List<MotherboardEntity> findAll();
    MotherboardEntity findFirstByOrderByIdDesc();

    Optional<MotherboardEntity> findByTitle(String title);

    Optional<MotherboardEntity> findFirstByTitle(String title);
}

