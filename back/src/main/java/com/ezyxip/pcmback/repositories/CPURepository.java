package com.ezyxip.pcmback.repositories;

import com.ezyxip.pcmback.entities.CPUEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CPURepository extends CrudRepository<CPUEntity, Long> {
    List<CPUEntity> findAll();
    CPUEntity findFirstByOrderByIdDesc();

}

