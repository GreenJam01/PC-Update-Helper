package com.ezyxip.pcmback.repositories;

import com.ezyxip.pcmback.entities.CPUEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CPURepository extends CrudRepository<CPUEntity, Long> {
    List<CPUEntity> findAll();
    CPUEntity findFirstByOrderByIdDesc();

    Optional<CPUEntity> findByTitle(String title);

    Optional<CPUEntity> findFirstByTitle(String title);
}

